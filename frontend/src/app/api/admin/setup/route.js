import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function POST(request) {
	try {
		const { username, password } = await request.json();

		if (!username || !password) {
			return NextResponse.json(
				{ error: "Username and password are required" },
				{ status: 400 }
			);
		}

		await connectDB();

		// Check if admin already exists
		const existingAdmin = await Admin.findOne({ username });
		if (existingAdmin) {
			return NextResponse.json(
				{ message: "Admin user already exists" },
				{ status: 200 }
			);
		}

		// Create new admin
		const admin = await Admin.create({
			username,
			password, // Will be automatically hashed by the pre-save hook
		});

		return NextResponse.json({
			message: "Admin user created successfully",
			admin: {
				id: admin._id,
				username: admin.username,
			},
		});
	} catch (error) {
		console.error("Error creating admin:", error);
		return NextResponse.json(
			{ error: "Error creating admin user" },
			{ status: 500 }
		);
	}
}
