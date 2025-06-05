import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function GET() {
	try {
		await connectDB();
		const admin = await Admin.findOne({ username: "admin" });

		if (!admin) {
			return NextResponse.json(
				{ error: "Admin user not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json({
			message: "Admin user exists",
			admin: {
				id: admin._id,
				username: admin.username,
			},
		});
	} catch (error) {
		console.error("Error checking admin:", error);
		return NextResponse.json(
			{ error: "Error checking admin user" },
			{ status: 500 }
		);
	}
}
