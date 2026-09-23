import React from 'react'

export default function Skeleton() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 h-8 w-56 animate-pulse rounded bg-slate-200"></div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {new Array(4).fill(null).map((_, index) => <div key={index} className="h-80 animate-pulse rounded-2xl bg-slate-200"></div>)}
      </div>
    </div>
  )
}
