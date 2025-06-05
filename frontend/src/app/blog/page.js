import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

async function getBlogs() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch blogs");
	}
	return res.json();
}

export default async function BlogPage() {
	const blogs = await getBlogs();

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Our Blog</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{blogs.map((blog) => (
					<Link key={blog._id} href={`/blog/${blog.slug}`} className="group">
						<div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
							<div className="relative h-48">
								<Image
									src={blog.image}
									alt={blog.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-300"
								/>
							</div>
							<div className="p-4">
								<h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
									{blog.title}
								</h2>
								<p className="text-gray-500 text-sm">
									{new Date(blog.createdAt).toLocaleDateString()}
								</p>
								<p className="mt-2 text-gray-600 line-clamp-3">
									{blog.content.substring(0, 150)}...
								</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
