"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardClient() {
	const [contacts, setContacts] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		fetchContacts();
	}, []);

	const fetchContacts = async () => {
		try {
			const res = await fetch("/api/contact");
			if (!res.ok) {
				if (res.status === 401) {
					router.push("/admin");
					return;
				}
				throw new Error("Failed to fetch contacts");
			}
			const data = await res.json();
			setContacts(data);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const handleLogout = async () => {
		try {
			const res = await fetch("/api/admin/logout", {
				method: "POST",
			});

			if (!res.ok) {
				throw new Error("Failed to logout");
			}

			router.push("/admin");
		} catch (err) {
			setError(err.message);
		}
	};

	const handleToggleServed = async (id, currentStatus) => {
		try {
			const res = await fetch(`/api/contact?id=${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ isServed: !currentStatus }),
			});

			if (!res.ok) {
				throw new Error("Failed to update contact");
			}

			setContacts(
				contacts.map((contact) =>
					contact._id === id
						? { ...contact, isServed: !currentStatus }
						: contact
				)
			);
		} catch (err) {
			setError(err.message);
		}
	};

	const handleDelete = async (id) => {
		if (!confirm("Are you sure you want to delete this contact?")) {
			return;
		}

		try {
			const res = await fetch(`/api/contact?id=${id}`, {
				method: "DELETE",
			});

			if (!res.ok) {
				throw new Error("Failed to delete contact");
			}

			setContacts(contacts.filter((contact) => contact._id !== id));
		} catch (err) {
			setError(err.message);
		}
	};

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-xl">Loading...</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between items-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900">
						Contact Submissions
					</h1>
					<button
						onClick={handleLogout}
						className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
					>
						Logout
					</button>
				</div>

				{error && (
					<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
						{error}
					</div>
				)}

				<div className="bg-white shadow overflow-hidden sm:rounded-md">
					<ul className="divide-y divide-gray-200">
						{contacts.map((contact) => (
							<li key={contact._id} className="px-6 py-4">
								<div className="flex items-center justify-between">
									<div className="flex-1">
										<h3 className="text-lg font-medium text-gray-900">
											{contact.fullName}
										</h3>
										<p className="mt-1 text-sm text-gray-500">
											{contact.email}
										</p>
										<p className="mt-2 text-gray-700">{contact.message}</p>
										<p className="mt-1 text-sm text-gray-500">
											Received: {new Date(contact.createdAt).toLocaleString()}
										</p>
									</div>
									<div className="ml-4 flex items-center space-x-4">
										<button
											onClick={() =>
												handleToggleServed(contact._id, contact.isServed)
											}
											className={`px-3 py-1 rounded text-sm font-medium ${
												contact.isServed
													? "bg-green-100 text-green-800"
													: "bg-yellow-100 text-yellow-800"
											}`}
										>
											{contact.isServed ? "Served" : "Not Served"}
										</button>
										<button
											onClick={() => handleDelete(contact._id)}
											className="px-3 py-1 rounded text-sm font-medium bg-red-100 text-red-800 hover:bg-red-200"
										>
											Delete
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
