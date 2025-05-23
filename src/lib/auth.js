import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = "your-super-secret-jwt-key-change-this-in-production";

export async function checkAuth() {
	try {
		const token = cookies().get("admin_token")?.value;

		if (!token) {
			return { isAuthenticated: false };
		}

		const decoded = jwt.verify(token, JWT_SECRET);
		return { isAuthenticated: true, user: decoded };
	} catch (error) {
		console.error("Auth check error:", error);
		return { isAuthenticated: false };
	}
}
