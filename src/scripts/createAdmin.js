import connectDB from "../lib/mongodb";
import Admin from "../models/Admin";

async function createAdmin() {
	try {
		await connectDB();

		// Check if admin already exists
		const existingAdmin = await Admin.findOne({ username: "admin" });
		if (existingAdmin) {
			console.log("Admin user already exists");
			process.exit(0);
		}

		// Create new admin
		const admin = await Admin.create({
			username: "admin",
			password: "admin", // Will be automatically hashed by the pre-save hook
		});

		console.log("Admin user created successfully:", admin.username);
		process.exit(0);
	} catch (error) {
		console.error("Error creating admin:", error);
		process.exit(1);
	}
}

createAdmin();
