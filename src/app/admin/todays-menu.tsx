"use client";

import { useState } from "react";

const initialDishes = [
  { name: "", price: "", desc: "", img: "", tags: [] as string[] }
];

export default function TodaysMenuAdmin() {
  const [dishes, setDishes] = useState(initialDishes);

  const handleChange = (idx: number, field: string, value: string) => {
    setDishes(dishes =>
      dishes.map((dish, i) =>
        i === idx ? { ...dish, [field]: value } : dish
      )
    );
  };

  const addDish = () => setDishes([...dishes, { name: "", price: "", desc: "", img: "", tags: [] }]);
  const removeDish = (idx: number) => setDishes(dishes => dishes.filter((_, i) => i !== idx));

  // In a real app, save to backend or file here
  const handleSave = () => {
    alert("Today's menu saved!\n" + JSON.stringify(dishes, null, 2));
    // TODO: Save to backend or file
  };

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Admin: Update Today's Menu</h1>
      {dishes.map((dish, idx) => (
        <div key={idx} className="mb-6 border-b pb-4">
          <div className="flex gap-2 mb-2">
            <input
              className="border px-2 py-1 rounded w-1/3"
              placeholder="Dish Name"
              value={dish.name}
              onChange={e => handleChange(idx, "name", e.target.value)}
            />
            <input
              className="border px-2 py-1 rounded w-1/4"
              placeholder="Price"
              value={dish.price}
              onChange={e => handleChange(idx, "price", e.target.value)}
            />
            <input
              className="border px-2 py-1 rounded w-1/2"
              placeholder="Image URL"
              value={dish.img}
              onChange={e => handleChange(idx, "img", e.target.value)}
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
            onChange={e => handleChange(idx, "desc", e.target.value)}
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
        onClick={handleSave}
        type="button"
      >
        Save Today's Menu
      </button>
    </main>
  );
}
