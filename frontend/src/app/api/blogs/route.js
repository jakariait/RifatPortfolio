import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

// GET all blogs
export async function GET() {
	try {
		await connectDB();
		const blogs = await Blog.find().sort({ createdAt: -1 });
		return NextResponse.json(blogs);
	} catch (error) {
		console.error("Error fetching blogs:", error);
		return NextResponse.json(
			{ error: "Failed to fetch blogs" },
			{ status: 500 }
		);
	}
}

// POST new blog
export async function POST(request) {
	try {
		await connectDB();
		const data = await request.json();

		// Validate required fields
		if (!data.title || !data.content || !data.image) {
			return NextResponse.json(
				{ error: "Title, content, and image are required" },
				{ status: 400 }
			);
		}

		// Create slug from title
		const slug = data.title
			.toLowerCase()
			.replace(/[^a-zA-Z0-9]/g, "-")
			.replace(/-+/g, "-");

		// Check if blog with same slug exists
		const existingBlog = await Blog.findOne({ slug });
		if (existingBlog) {
			return NextResponse.json(
				{ error: "A blog with this title already exists" },
				{ status: 400 }
			);
		}

		const blog = await Blog.create({
			...data,
			slug,
		});

		return NextResponse.json(blog, { status: 201 });
	} catch (error) {
		console.error("Error creating blog:", error);
		return NextResponse.json(
			{ error: "Failed to create blog" },
			{ status: 500 }
		);
	}
}
