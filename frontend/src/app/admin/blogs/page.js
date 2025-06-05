"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AdminBlogs() {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchBlogs();
	}, []);

	const fetchBlogs = async () => {
		try {
			const response = await fetch("/api/blogs");
			const data = await response.json();
			setBlogs(data);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching blogs:", error);
			setLoading(false);
		}
	};

	const handleDelete = async (id) => {
		if (window.confirm("Are you sure you want to delete this blog?")) {
			try {
				const response = await fetch(`/api/blogs/${id}`, {
					method: "DELETE",
				});
				if (response.ok) {
					fetchBlogs();
				}
			} catch (error) {
				console.error("Error deleting blog:", error);
			}
		}
	};

	if (loading) {
		return <div className="text-center py-10">Loading...</div>;
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Manage Blogs</h1>
				<Link
					href="/admin/blogs/new"
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
				>
					Create New Blog
				</Link>
			</div>

			<div className="grid gap-6">
				{blogs.map((blog) => (
					<div
						key={blog._id}
						className="border rounded-lg p-4 flex items-center justify-between"
					>
						<div className="flex items-center space-x-4">
							<div className="relative w-20 h-20">
								<Image
									src={blog.image}
									alt={blog.title}
									fill
									className="object-cover rounded"
								/>
							</div>
							<div>
								<h2 className="text-xl font-semibold">{blog.title}</h2>
								<p className="text-gray-500">
									{new Date(blog.createdAt).toLocaleDateString()}
								</p>
							</div>
						</div>
						<div className="flex space-x-2">
							<Link
								href={`/admin/blogs/edit/${blog._id}`}
								className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
							>
								Edit
							</Link>
							<button
								onClick={() => handleDelete(blog._id)}
								className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
							>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
