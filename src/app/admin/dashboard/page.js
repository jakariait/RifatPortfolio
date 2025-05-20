import { checkAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
	const { isAuthenticated } = await checkAuth();

	if (!isAuthenticated) {
		redirect("/admin");
	}

	return <DashboardClient />;
}
