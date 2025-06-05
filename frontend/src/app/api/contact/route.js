import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { authMiddleware } from "@/middleware/auth";

export async function POST(request) {
	try {
		const body = await request.json();
		const { fullName, email, message } = body;

		// Validate required fields
		if (!fullName || !email || !message) {
			return NextResponse.json(
				{ error: "All fields are required" },
				{ status: 400 }
			);
		}

		// Connect to database
		await connectDB();

		// Create new contact
		const contact = await Contact.create({
			fullName,
			email,
			message,
			isServed: false,
		});

		return NextResponse.json(
			{ message: "Contact form submitted successfully", contact },
			{ status: 201 }
		);
	} catch (error) {
		console.error("Contact form submission error:", error);
		return NextResponse.json(
			{ error: "Error submitting contact form" },
			{ status: 500 }
		);
	}
}

export async function GET(request) {
	// Check authentication for GET requests
	const authError = await authMiddleware(request);
	if (authError) return authError;

	try {
		const { searchParams } = new URL(request.url);
		const id = searchParams.get("id");

		await connectDB();

		// If ID is provided, return single contact
		if (id) {
			const contact = await Contact.findById(id);
			if (!contact) {
				return NextResponse.json(
					{ error: "Contact not found" },
					{ status: 404 }
				);
			}
			return NextResponse.json(contact);
		}

		// If no ID, return all contacts
		const contacts = await Contact.find().sort({ createdAt: -1 });
		return NextResponse.json(contacts);
	} catch (error) {
		console.error("Error fetching contacts:", error);
		return NextResponse.json(
			{ error: "Error fetching contacts" },
			{ status: 500 }
		);
	}
}

// Update a contact
export async function PUT(request) {
	// Check authentication for PUT requests
	const authError = await authMiddleware(request);
	if (authError) return authError;

	try {
		const { searchParams } = new URL(request.url);
		const id = searchParams.get("id");

		if (!id) {
			return NextResponse.json(
				{ error: "Contact ID is required" },
				{ status: 400 }
			);
		}

		const body = await request.json();
		const { isServed } = body;

		// Only allow updating isServed field
		if (isServed === undefined) {
			return NextResponse.json(
				{ error: "isServed field is required" },
				{ status: 400 }
			);
		}

		await connectDB();

		const updatedContact = await Contact.findByIdAndUpdate(
			id,
			{ isServed },
			{ new: true }
		);

		if (!updatedContact) {
			return NextResponse.json({ error: "Contact not found" }, { status: 404 });
		}

		return NextResponse.json({
			message: "Contact updated successfully",
			contact: updatedContact,
		});
	} catch (error) {
		console.error("Error updating contact:", error);
		return NextResponse.json(
			{ error: "Error updating contact" },
			{ status: 500 }
		);
	}
}

// Delete a contact
export async function DELETE(request) {
	// Check authentication for DELETE requests
	const authError = await authMiddleware(request);
	if (authError) return authError;

	try {
		const { searchParams } = new URL(request.url);
		const id = searchParams.get("id");

		if (!id) {
			return NextResponse.json(
				{ error: "Contact ID is required" },
				{ status: 400 }
			);
		}

		await connectDB();
		const deletedContact = await Contact.findByIdAndDelete(id);

		if (!deletedContact) {
			return NextResponse.json({ error: "Contact not found" }, { status: 404 });
		}

		return NextResponse.json({
			message: "Contact deleted successfully",
			contact: deletedContact,
		});
	} catch (error) {
		console.error("Error deleting contact:", error);
		return NextResponse.json(
			{ error: "Error deleting contact" },
			{ status: 500 }
		);
	}
}
