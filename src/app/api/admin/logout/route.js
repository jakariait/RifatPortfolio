import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
	try {
		cookies().delete("admin_token");
		return NextResponse.json({ message: "Logged out successfully" });
	} catch (error) {
		return NextResponse.json({ error: "Error during logout" }, { status: 500 });
	}
}
