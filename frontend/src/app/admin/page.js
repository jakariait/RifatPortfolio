"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		try {
			console.log("Attempting login...");
			const res = await fetch("/api/admin/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			});

			console.log("Response status:", res.status);
			const data = await res.json();
			console.log("Response data:", data);

			if (!res.ok) {
				throw new Error(data.error || data.details || "Login failed");
			}

			console.log("Login successful, redirecting...");
			window.location.href = "/admin/dashboard";
		} catch (err) {
			console.error("Login error:", err);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Admin Login
					</h2>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="username" className="sr-only">
								Username
							</label>
							<input
								id="username"
								name="username"
								type="text"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								disabled={loading}
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								disabled={loading}
							/>
						</div>
					</div>

					{error && (
						<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
							<strong className="font-bold">Error: </strong>
							<span className="block sm:inline">{error}</span>
						</div>
					)}

					<div>
						<button
							type="submit"
							disabled={loading}
							className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
								loading
									? "bg-indigo-400 cursor-not-allowed"
									: "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							}`}
						>
							{loading ? "Signing in..." : "Sign in"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
