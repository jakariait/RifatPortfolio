import Image from "next/image";
import Link from "next/link";

async function getBlog(slug) {
	const res = await fetch("http://localhost:3000/api/blogs", {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch blog");
	}
	const blogs = await res.json();
	const blog = blogs.find((b) => b.slug === slug);
	if (!blog) {
		throw new Error("Blog not found");
	}
	return blog;
}

export default async function BlogPost({ params }) {
	const blog = await getBlog(params.slug);

	return (
		<div className="container mx-auto px-4 py-8">
			<Link
				href="/blog"
				className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
			>
				<svg
					className="w-4 h-4 mr-2"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 19l-7-7 7-7"
					/>
				</svg>
				Back to Blogs
			</Link>

			<article className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
				<p className="text-gray-500 mb-8">
					{new Date(blog.createdAt).toLocaleDateString()}
				</p>

				<div className="relative w-full h-[400px] mb-8">
					<Image
						src={blog.image}
						alt={blog.title}
						fill
						className="object-cover rounded-lg"
						priority
					/>
				</div>

				<div className="prose prose-lg max-w-none">
					{blog.content.split("\n").map((paragraph, index) => (
						<p key={index} className="mb-4">
							{paragraph}
						</p>
					))}
				</div>
			</article>
		</div>
	);
}
