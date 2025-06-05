import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/mongodb";
import Admin from "@/models/Admin";

// Use the same JWT secret as middleware
const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(request) {
	console.log("Login API called");
	try {
		const body = await request.json();
		console.log("Request body:", body);
		const { username, password } = body;

		if (!username || !password) {
			console.log("Missing credentials:", {
				username: !!username,
				password: !!password,
			});
			return NextResponse.json(
				{ error: "Username and password are required" },
				{ status: 400 }
			);
		}

		console.log("Connecting to database...");
		await connectDB();
		console.log("Database connected successfully");

		console.log("Finding admin user:", username);
		const admin = await Admin.findOne({ username });
		console.log("Admin user found:", !!admin);

		if (!admin) {
			console.log("Admin not found");
			return NextResponse.json(
				{ error: "Invalid credentials" },
				{ status: 401 }
			);
		}

		console.log("Comparing password...");
		const isMatch = await admin.comparePassword(password);
		console.log("Password match result:", isMatch);

		if (!isMatch) {
			console.log("Password mismatch");
			return NextResponse.json(
				{ error: "Invalid credentials" },
				{ status: 401 }
			);
		}

		console.log("Generating JWT token...");
		const token = jwt.sign(
			{ id: admin._id, username: admin.username },
			JWT_SECRET,
			{ expiresIn: "1d" }
		);

		console.log("Setting cookie...");
		cookies().set("admin_token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
			maxAge: 86400, // 1 day
		});

		console.log("Login successful");
		return NextResponse.json({
			message: "Login successful",
			admin: {
				id: admin._id,
				username: admin.username,
			},
		});
	} catch (error) {
		console.error("Login error details:", {
			message: error.message,
			stack: error.stack,
		});
		return NextResponse.json(
			{ error: "Error during login", details: error.message },
			{ status: 500 }
		);
	}
}
