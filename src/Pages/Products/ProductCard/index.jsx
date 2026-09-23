import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  title,
  image,
  minPrice,
  maxPrice,
  discountPercent,
  finalPrice,
  price,
  avgRating,
  id,
  slug,
  rating
}) {
    const navigate= useNavigate()
  return <div className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl" onClick={()=>navigate(`product-details/${id}/${slug}`)}>
    <div className="relative overflow-hidden bg-slate-100">
        <img className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105" src={import.meta.env.VITE_BASE_FILE_URL + image} alt={title} />
        {discountPercent>0 && <span className="absolute left-3 top-3 rounded-full bg-rose-500 px-3 py-1 text-xs font-bold text-white">{discountPercent}%</span>}
    </div>
    <div className="space-y-3 p-4">
        <h2 className="truncate text-base font-bold text-slate-900">{title}</h2>
        <div className="flex justify-between gap-2 text-xs text-slate-500">
          <p>Min: ${minPrice}</p>
          <p>Max: ${maxPrice}</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm text-slate-500">${price}</p>
          <p className="font-bold text-indigo-600">${finalPrice}</p>
        </div>
        <div className="flex justify-between gap-2 text-xs text-slate-500">
          <p>Rating: {avgRating ?? 0}</p>
          <p>Reviews: {rating ?? 0}</p>
        </div>
    </div>
  </div>;
}
