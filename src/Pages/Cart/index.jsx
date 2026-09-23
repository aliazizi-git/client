import React from 'react'

export default function Cart() {
  return (
    <div className="mx-auto min-h-[70vh] max-w-7xl px-6 py-16">
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
        <h1 className="mb-3 text-3xl font-bold text-slate-900">Your cart</h1>
        <p className="text-slate-500">Your selected products will appear here.</p>
      </div>
    </div>
  )
}
