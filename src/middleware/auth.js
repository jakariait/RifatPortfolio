import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function authMiddleware(request) {
	const token = cookies().get("admin_token")?.value;

	if (!token) {
		return NextResponse.json(
			{ error: "Authentication required" },
			{ status: 401 }
		);
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		request.user = decoded;
		return null; // Continue to the route handler
	} catch (error) {
		return NextResponse.json({ error: "Invalid token" }, { status: 401 });
	}
}
