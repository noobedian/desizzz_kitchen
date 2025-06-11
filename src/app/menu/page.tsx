"use client";

import { useState } from "react";
import { Button } from "../Button";
import { Card, CardImage, CardBody } from "../Card";

function MenuPage() {
	const [showToday, setShowToday] = useState(true);
	const menuToShow = showToday ? todaysMenu : sections;
	return (
		<>
			<main className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-6">
				<div className="max-w-6xl mx-auto py-12">
					<h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#800000] mb-8 animate-in fade-in duration-700">
						Our Menu
					</h1>
					{/* Smooth sliding toggle switch */}
					<div className="flex justify-center mb-10">
						<div className="relative flex items-center w-80 h-12 bg-[#FFF8E7] rounded-full shadow-inner">
							<span
								className={`absolute top-1 left-1 h-10 w-[calc(50%-0.25rem)] rounded-full bg-[#800000] shadow transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)] ${
									showToday ? "translate-x-0" : "translate-x-full"
								}`}
								style={{ zIndex: 1 }}
							/>
							<button
								className={`relative z-10 flex-1 h-10 rounded-full font-semibold transition-colors duration-200 text-base focus:outline-none ${
									showToday ? "text-white font-bold" : "text-[#800000] font-medium"
								}`}
								style={{ zIndex: 3 }}
								onClick={() => setShowToday(true)}
								aria-pressed={showToday}
							>
								Today&apos;s Menu
							</button>
							<button
								className={`relative z-10 flex-1 h-10 rounded-full font-semibold transition-colors duration-200 text-base focus:outline-none ${
									!showToday ? "text-white font-bold" : "text-[#800000] font-medium"
								}`}
								style={{ zIndex: 3 }}
								onClick={() => setShowToday(false)}
								aria-pressed={!showToday}
							>
								Full Menu
							</button>
						</div>
					</div>
					<div className="space-y-16">
						{menuToShow.map((section) => (
							<section key={section.title}>
								<h2 className="text-2xl md:text-3xl font-bold text-[#800000] mb-6 border-l-4 border-[#FFAA33] pl-4 animate-in fade-in duration-700">
									{section.title}
								</h2>
								<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
									{section.dishes.map((dish) => (
										<Card
											key={dish.name}
											className="group relative overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg"
										>
											<div className="relative">
												<CardImage src={dish.img} alt={dish.name} />
												<div className="absolute top-2 right-2 flex gap-1">
													{dish.tags.map((tag) => (
														<span
															key={tag}
															className="bg-[#FFF8E7] text-[#800000] text-xs px-2 py-0.5 rounded-full shadow-sm font-semibold"
														>
															{tag}
														</span>
													))}
												</div>
											</div>
											<CardBody>
												<h2 className="text-xl font-bold mb-1 group-hover:text-[#800000] transition-colors duration-200">
													{dish.name}
												</h2>
												<p className="text-[#FFAA33] font-semibold mb-2">
													{dish.price}
												</p>
												<p className="text-gray-600 mb-4 text-sm">
													{dish.desc}
												</p>
											</CardBody>
										</Card>
									))}
								</div>
							</section>
						))}
					</div>
				</div>
			</main>
		</>
	);
}

const sections = [
	{
		title: "Meal Dealzzz",
		dishes: [
			{
				name: "Butter Chicken Meal",
				price: "$15.99",
				img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
				desc: "Butter chicken, naan, rice, salad, and drink.",
				tags: ["Non-Veg", "Combo", "Popular"],
			},
			{
				name: "Veg Thali",
				price: "$13.99",
				img: "https://images.unsplash.com/photo-1600628422019-6c1a9b7b8c5e?auto=format&fit=crop&w=400&q=80",
				desc: "Assorted vegetarian curries, rice, naan, dessert.",
				tags: ["Veg", "Combo"],
			},
		],
	},
	{
		title: "Rolzzz",
		dishes: [
			{
				name: "Paneer Tikka Roll",
				price: "$8.99",
				img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
				desc: "Grilled paneer, veggies, tangy sauce in a wrap.",
				tags: ["Veg", "Snack"],
			},
			{
				name: "Chicken Seekh Roll",
				price: "$9.99",
				img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
				desc: "Spiced chicken seekh, onions, mint chutney in a roll.",
				tags: ["Non-Veg", "Snack"],
			},
		],
	},
	{
		title: "Classic Curries",
		dishes: [
			{
				name: "Chole Bhature",
				price: "$10.99",
				img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
				desc: "Spiced chickpeas with fluffy fried bread.",
				tags: ["Veg", "Popular"],
			},
			{
				name: "Rajma Chawal",
				price: "$9.99",
				img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
				desc: "Kidney beans curry with steamed rice.",
				tags: ["Veg", "Comfort Food"],
			},
		],
	},
];

const todaysMenu = [
	{
		title: "Today's Specials",
		dishes: [
			{
				name: "Butter Chicken Meal",
				price: "$15.99",
				img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
				desc: "Butter chicken, naan, rice, salad, and drink.",
				tags: ["Non-Veg", "Combo", "Popular"],
			},
			{
				name: "Paneer Tikka Roll",
				price: "$8.99",
				img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
				desc: "Grilled paneer, veggies, tangy sauce in a wrap.",
				tags: ["Veg", "Snack"],
			},
		],
	},
];

export default MenuPage;
