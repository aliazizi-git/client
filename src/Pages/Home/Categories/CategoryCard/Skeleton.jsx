import React from 'react'

export default function Skeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="aspect-square animate-pulse bg-slate-200"></div>
      <div className="m-4 h-4 animate-pulse rounded bg-slate-200"></div>
    </div>
  )
}
