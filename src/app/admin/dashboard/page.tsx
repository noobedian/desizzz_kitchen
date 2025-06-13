"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AdminDashboard() {
  const [menu, setMenu] = useState<{ title: string; dishes: any[] }[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch current menu on load
  useEffect(() => {
    fetch("/api/todays-menu")
      .then(res => res.json())
      .then(data => {
        setMenu(Array.isArray(data.menu) ? data.menu : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">Today's Menu</h2>
          {menu.length === 0 && <div className="text-gray-500 mb-4">No dishes set for today.</div>}
          {menu.map(section => (
            <div key={section.title} className="mb-8">
              <h3 className="text-lg font-bold mb-2">{section.title}</h3>
              <ul className="space-y-2">
                {section.dishes.map((dish, idx) => (
                  <li key={dish.name + idx} className="border rounded p-2 flex flex-col md:flex-row md:items-center md:justify-between">
                    <span>
                      <span className="font-semibold">{dish.name}</span>
                      {dish.price && <span className="ml-2 text-[#FFAA33]">{dish.price}</span>}
                      {dish.desc && <span className="ml-2 text-gray-600 text-sm">{dish.desc}</span>}
                    </span>
                    {dish.img && (
                      <Image
                        src={dish.img}
                        alt={dish.name}
                        width={96} // 24*4
                        height={64} // 16*4
                        className="w-24 h-16 object-cover rounded mt-2 md:mt-0"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <a
            href="/admin/todays-menu"
            className="inline-block mt-6 bg-[#800000] text-white px-4 py-2 rounded font-semibold hover:bg-[#a83232] transition"
          >
            Edit Today's Menu
          </a>
        </>
      )}
    </main>
  );
}
