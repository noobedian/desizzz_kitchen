"use client";

import { useEffect, useState } from "react";

const SECTION_TITLE = "Today's Specials";

export default function TodaysMenuAdmin() {
	const [dishes, setDishes] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	// Fetch current menu on load
	useEffect(() => {
		fetch("/api/todays-menu")
			.then((res) => res.json())
			.then((data) => {
				if (
					Array.isArray(data.menu) &&
					data.menu.length > 0 &&
					typeof data.menu[0] === "object" &&
					Array.isArray(data.menu[0].dishes)
				) {
					setDishes(data.menu[0].dishes);
				} else {
					setDishes([]);
				}
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

	const handleChange = (idx: number, field: string, value: string) => {
		setDishes((dishes) =>
			dishes.map((dish, i) => (i === idx ? { ...dish, [field]: value } : dish))
		);
	};

	const addDish = () =>
		setDishes((dishes) => [
			...dishes,
			{ name: "", price: "", desc: "", img: "", tags: [] },
		]);
	const removeDish = (idx: number) =>
		setDishes((dishes) => dishes.filter((_, i) => i !== idx));

	const handleSave = async (e: React.FormEvent) => {
		e.preventDefault();
		// Only save non-empty dishes (with a name)
		const filtered = dishes.filter((d) => d.name && d.name.trim() !== "");
		await fetch("/api/todays-menu", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ menu: [{ title: SECTION_TITLE, dishes: filtered }] }),
		});
		alert("Today's menu updated!");
	};

	return (
		<main className="max-w-2xl mx-auto py-10 px-4">
			<h1 className="text-2xl font-bold mb-6">Admin: Update Today's Menu</h1>
			{loading ? (
				<div>Loading...</div>
			) : (
				<form onSubmit={handleSave}>
					{dishes.map((dish, idx) => (
						<div key={idx} className="mb-6 border-b pb-4">
							<div className="flex gap-2 mb-2">
								<input
									className="border px-2 py-1 rounded w-1/3"
									placeholder="Dish Name"
									value={dish.name}
									onChange={(e) => handleChange(idx, "name", e.target.value)}
								/>
								<input
									className="border px-2 py-1 rounded w-1/4"
									placeholder="Price"
									value={dish.price}
									onChange={(e) => handleChange(idx, "price", e.target.value)}
								/>
								<input
									className="border px-2 py-1 rounded w-1/2"
									placeholder="Image URL"
									value={dish.img}
									onChange={(e) => handleChange(idx, "img", e.target.value)}
								/>
								<button
									className="text-red-600 font-bold px-2"
									onClick={() => removeDish(idx)}
									type="button"
									title="Remove"
								>
									×
								</button>
							</div>
							<textarea
								className="border px-2 py-1 rounded w-full mb-2"
								placeholder="Description"
								value={dish.desc}
								onChange={(e) => handleChange(idx, "desc", e.target.value)}
							/>
						</div>
					))}
					<button
						className="bg-[#FFAA33] text-white px-4 py-2 rounded font-semibold mr-2"
						onClick={addDish}
						type="button"
					>
						Add Dish
					</button>
					<button
						className="bg-[#800000] text-white px-4 py-2 rounded font-semibold"
						type="submit"
					>
						Save Today's Menu
					</button>
				</form>
			)}
		</main>
	);
}
