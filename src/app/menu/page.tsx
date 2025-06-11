"use client";

import { useEffect, useState } from "react";
import { Card, CardBody, CardImage } from "../Card";

function MenuPage() {
	const [showToday, setShowToday] = useState(true);
	const [todaysMenu, setTodaysMenu] = useState<{ title: string; dishes: any[] }[]>([]);
	const menuToShow = showToday ? todaysMenu : sections;

	useEffect(() => {
		if (showToday) {
			fetch("/api/todays-menu")
				.then(res => res.json())
				.then(data => setTodaysMenu(data.menu?.length ? data.menu : []));
		}
	}, [showToday]);

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
					{/* Add a note for Today's Menu */}
					{showToday && (
						<div className="mb-8 text-center">
							<p className="text-[#800000] text-lg font-semibold">
								Our chefs prepare a fresh selection of curries every day.<br />
								<span className="text-[#FFAA33]">Ask us for today&apos;s specials or check below!</span>
							</p>
						</div>
					)}
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
													{dish.tags.map((tag: string) => (
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
		title: "STUDENT MEALZZZ",
		dishes: [
			{
				name: "Veg Meal",
				price: "$10",
				desc: "2 Curries + 4 Roti + Salad or 2 Curries + 2 Roti + Rice + Salad",
				tags: ["Veg"],
				img: "/images/veg-meal.jpg",
			},
			{
				name: "Non-Veg Meal",
				price: "$12",
				desc: "2 Curries + 4 Roti + Salad or 2 Curries + 2 Roti + Rice + Salad",
				tags: ["Non-Veg"],
				img: "/images/nonveg-meal.jpg",
			},
		],
	},
	{
		title: "ROLLZZZ",
		dishes: [
			{
				name: "Paneer Roll",
				price: "$12",
				desc: "",
				tags: ["Veg"],
				img: "/images/paneer-roll.jpg",
			},
			{
				name: "Soya Chaap Roll",
				price: "$12",
				desc: "",
				tags: ["Veg"],
				img: "/images/soya-chaap-roll.jpg",
			},
			{
				name: "Chicken Roll",
				price: "$12",
				desc: "",
				tags: ["Non-Veg"],
				img: "/images/chicken-roll.jpg",
			},
		],
	},
	{
		title: "BIRYANIzzz",
		dishes: [
			{
				name: "Veg Biryani",
				price: "$14",
				desc: "",
				tags: ["Veg"],
				img: "/images/veg-biryani.jpg",
			},
			{
				name: "Chicken Biryani",
				price: "$16",
				desc: "",
				tags: ["Non-Veg"],
				img: "/images/chicken-biryani.jpg",
			},
			{
				name: "Goat Biryani",
				price: "$16",
				desc: "",
				tags: ["Non-Veg"],
				img: "/images/goat-biryani.jpg",
			},
		],
	},
	{
		title: "ENTREEZZZ",
		dishes: [
			{ name: "Soya Malai Chaap", price: "$10", desc: "", tags: ["Veg", "🌱"], img: "/images/soya-malai-chaap.jpg" },
			{ name: "Achari Chaap", price: "$10", desc: "", tags: ["Veg", "🌱"], img: "/images/achari-chaap.jpg" },
			{ name: "Chilli Paneer", price: "$15", desc: "", tags: ["Veg", "🌱"], img: "/images/chilli-paneer.jpg" },
			{ name: "Paneer Tikka", price: "$15", desc: "", tags: ["Veg", "🌱"], img: "/images/paneer-tikka.jpg" },
			{ name: "Samosa Chaat", price: "$8", desc: "", tags: ["Veg", "🌱"], img: "/images/samosa-chaat.jpg" },
			{ name: "Samosa", price: "$2.50", desc: "", tags: ["Veg", "🌱"], img: "/images/samosa.jpg" },
			{ name: "Chicken Tikka", price: "$15", desc: "", tags: ["Non-Veg"], img: "/images/chicken-tikka.jpg" },
			{ name: "Malai Tikka", price: "$15", desc: "", tags: ["Non-Veg"], img: "/images/malai-tikka.jpg" },
			{ name: "Tandoori Chicken", price: "$12/$18", desc: "", tags: ["Non-Veg"], img: "/images/tandoori-chicken.jpg" },
			{ name: "Pepper Chicken", price: "$15", desc: "", tags: ["Non-Veg"], img: "/images/pepper-chicken.jpg" },
			{ name: "Afghani Chicken", price: "$15", desc: "", tags: ["Non-Veg"], img: "/images/afghani-chicken.jpg" },
			{ name: "Chilli Chicken", price: "$15", desc: "", tags: ["Non-Veg"], img: "/images/chilli-chicken.jpg" },
			{ name: "Lamb Seekh Kebab", price: "$15", desc: "", tags: ["Non-Veg"], img: "/images/lamb-seekh.jpg" },
			{ name: "Achari Seekh Kebab", price: "$15", desc: "", tags: ["Non-Veg"], img: "/images/achari-seekh.jpg" },
			{ name: "Amritsari Fish", price: "$15", desc: "", tags: ["Non-Veg"], img: "/images/amritsari-fish.jpg" },
			{ name: "Tawa Goat", price: "$22", desc: "", tags: ["Non-Veg"], img: "/images/tawa-goat.jpg" },
			{ name: "Tawa Chicken", price: "$18", desc: "", tags: ["Non-Veg"], img: "/images/tawa-chicken.jpg" },
			{ name: "Seekh Platter", price: "$22", desc: "", tags: ["Non-Veg"], img: "/images/seekh-platter.jpg" },
		],
	},
	{
		title: "BREADZZZ",
		dishes: [
			{ name: "Roti", price: "$1.5", desc: "", tags: ["Veg"], img: "/images/roti.jpg" },
			{ name: "Plain Naan", price: "$3", desc: "", tags: ["Veg"], img: "/images/plain-naan.jpg" },
			{ name: "Garlic Naan", price: "$4", desc: "", tags: ["Veg"], img: "/images/garlic-naan.jpg" },
			{ name: "Tandoori Roti", price: "$3", desc: "", tags: ["Veg"], img: "/images/tandoori-roti.jpg" },
			{ name: "Cheese Naan", price: "$5", desc: "", tags: ["Veg"], img: "/images/cheese-naan.jpg" },
			{ name: "Chicken Cheese Naan", price: "$6", desc: "", tags: ["Non-Veg"], img: "/images/chicken-cheese-naan.jpg" },
			{ name: "Cheese Garlic Naan", price: "$6", desc: "", tags: ["Veg"], img: "/images/cheese-garlic-naan.jpg" },
			{ name: "Laccha Paratha", price: "$5", desc: "", tags: ["Veg"], img: "/images/laccha-paratha.jpg" },
		],
	},
	{
		title: "BREAKFASTZZZ",
		dishes: [
			{ name: "Amritsari Kulcha", price: "$10", desc: "", tags: ["Veg"], img: "/images/amritsari-kulcha.jpg" },
			{ name: "Chole Bhature", price: "$10", desc: "", tags: ["Veg"], img: "/images/chole-bhature.jpg" },
			{ name: "Poori Chole", price: "$15", desc: "", tags: ["Veg"], img: "/images/poori-chole.jpg" },
			{ name: "Parantha (2 Pieces) (With Butter and Pickle)", price: "$10", desc: "", tags: ["Veg"], img: "/images/parantha.jpg" },
		],
	},
	{
		title: "SWEETZZZ",
		dishes: [
			{ name: "Gulab Jamun (2 pieces)", price: "$5", desc: "", tags: ["Veg"], img: "/images/gulab-jamun.jpg" },
			{ name: "Halwa", price: "$5", desc: "", tags: ["Veg"], img: "/images/halwa.jpg" },
			{ name: "Rasmalai", price: "$6", desc: "", tags: ["Veg"], img: "/images/rasmalai.jpg" },
		],
	},
	{
		title: "EXTRAZZZ",
		dishes: [
			{ name: "Achar", price: "$2", desc: "", tags: ["Veg"], img: "/images/achar.jpg" },
			{ name: "Salad", price: "$3", desc: "", tags: ["Veg"], img: "/images/salad.jpg" },
			{ name: "Mint Yogurt Sauce", price: "$2", desc: "", tags: ["Veg"], img: "/images/mint-yogurt.jpg" },
			{ name: "Mint Sauce", price: "$2", desc: "", tags: ["Veg"], img: "/images/mint-sauce.jpg" },
			{ name: "Rice", price: "$4", desc: "", tags: ["Veg"], img: "/images/rice.jpg" },
			{ name: "Home Style Tea", price: "$3", desc: "", tags: ["Veg"], img: "/images/tea.jpg" },
		],
	},
	{
		title: "DRINKZZZ",
		dishes: [
			{ name: "Water", price: "$2", desc: "", tags: [], img: "/images/water.jpg" },
			{ name: "Soft Drink", price: "$3", desc: "", tags: [], img: "/images/soft-drink.jpg" },
			{ name: "Energy Drink", price: "$4", desc: "", tags: [], img: "/images/energy-drink.jpg" },
			{ name: "Mango Lassi", price: "$4", desc: "", tags: ["Veg"], img: "/images/mango-lassi.jpg" },
			{ name: "Sweet Lassi", price: "$4", desc: "", tags: ["Veg"], img: "/images/sweet-lassi.jpg" },
			{ name: "Namkeen Lassi", price: "$4", desc: "", tags: ["Veg"], img: "/images/namkeen-lassi.jpg" },
		],
	},
];

export default MenuPage;
