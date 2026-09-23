import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CategoryCard({image,title,slug,id}) {
    const navigate=useNavigate()
  return (
    <div className="group cursor-pointer" onClick={()=>navigate(`products/${id}/${slug}`)}>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
        <img className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105" src={import.meta.env.VITE_BASE_FILE_URL+image} alt={title} />
        <h2 className="truncate px-4 py-3 text-center text-sm font-semibold text-slate-800">{title}</h2>
      </div>
    </div>
  )
}
