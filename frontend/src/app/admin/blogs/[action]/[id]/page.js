"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BlogForm({ params }) {
	const router = useRouter();
	const { action, id } = params;
	const isEdit = action === "edit";

	const [formData, setFormData] = useState({
		title: "",
		content: "",
		image: "",
	});
	const [loading, setLoading] = useState(false);
	const [previewImage, setPreviewImage] = useState("");

	useEffect(() => {
		if (isEdit) {
			fetchBlog();
		}
	}, [isEdit, id]);

	const fetchBlog = async () => {
		try {
			const response = await fetch(`http://localhost:3000/api/blogs/${id}`);
			const data = await response.json();
			setFormData(data);
			setPreviewImage(data.image);
		} catch (error) {
			console.error("Error fetching blog:", error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const response = await fetch(
				isEdit
					? `http://localhost:3000/api/blogs/${id}`
					: "http://localhost:3000/api/blogs",
				{
					method: isEdit ? "PUT" : "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			if (response.ok) {
				router.push("/admin/blogs");
			}
		} catch (error) {
			console.error("Error saving blog:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewImage(reader.result);
				setFormData({ ...formData, image: reader.result });
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-2xl font-bold mb-6">
					{isEdit ? "Edit Blog" : "Create New Blog"}
				</h1>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Title
						</label>
						<input
							type="text"
							value={formData.title}
							onChange={(e) =>
								setFormData({ ...formData, title: e.target.value })
							}
							className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							required
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Content
						</label>
						<textarea
							value={formData.content}
							onChange={(e) =>
								setFormData({ ...formData, content: e.target.value })
							}
							className="w-full p-2 border rounded-md h-64 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							required
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Image
						</label>
						<input
							type="file"
							accept="image/*"
							onChange={handleImageChange}
							className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						/>
						{previewImage && (
							<div className="mt-2 relative w-40 h-40">
								<Image
									src={previewImage}
									alt="Preview"
									fill
									className="object-cover rounded"
								/>
							</div>
						)}
					</div>

					<div className="flex space-x-4">
						<button
							type="submit"
							disabled={loading}
							className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
						>
							{loading ? "Saving..." : isEdit ? "Update Blog" : "Create Blog"}
						</button>
						<button
							type="button"
							onClick={() => router.push("/admin/blogs")}
							className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
