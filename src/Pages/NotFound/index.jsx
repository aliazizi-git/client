import React from 'react'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <div className="text-center">
        <p className="mb-3 text-7xl font-black text-indigo-600">404</p>
        <h1 className="mb-3 text-3xl font-bold text-slate-900">Page not found</h1>
        <p className="text-slate-500">The page you requested does not exist.</p>
      </div>
    </div>
  )
}
