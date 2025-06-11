"use client";

import { useState } from "react";

// Always POST the correct structure: [{ title: "Today's Specials", dishes: [...] }]
const initialDishes = [
	{
		name: "Butter Chicken Meal",
		price: "$15.99",
		desc: "Butter chicken, naan, rice, salad, and drink.",
		img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
		tags: ["Non-Veg", "Combo", "Popular"],
	},
	{
		name: "Paneer Tikka Roll",
		price: "$8.99",
		desc: "Grilled paneer, veggies, tangy sauce in a wrap.",
		img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
		tags: ["Veg", "Snack"],
	},
];

export default function TodaysMenuAdmin() {
	const [dishes, setDishes] = useState(initialDishes);

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
		// Always POST as [{ title: "Today's Specials", dishes }]
		await fetch("/api/todays-menu", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ menu: [{ title: "Today's Specials", dishes }] }),
		});
		alert("Today's menu updated!");
	};

	return (
		<main className="max-w-2xl mx-auto py-10 px-4">
			<h1 className="text-2xl font-bold mb-6">Admin: Update Today's Menu</h1>
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
		</main>
	);
}
