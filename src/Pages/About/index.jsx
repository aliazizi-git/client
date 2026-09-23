import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">About Us</h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-800">Our Story</h2>
            <p className="text-slate-600 leading-relaxed">
              Founded with a passion for innovation, we have been dedicated to delivering exceptional solutions that empower businesses and individuals alike. Our journey began with a simple vision: to make technology accessible and impactful for everyone.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Over the years, we have grown into a team of talented professionals committed to excellence, creativity, and customer satisfaction. Every project we undertake is driven by our core values of integrity, quality, and collaboration.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-24 h-24 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To deliver innovative solutions that drive growth, efficiency, and success for our clients worldwide.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be a global leader in technology, recognized for our commitment to quality and innovation.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Values</h3>
            <p className="text-slate-600 leading-relaxed">
              Integrity, collaboration, and excellence guide every decision we make and every project we deliver.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-12 border border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-slate-600 font-medium">Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">200+</div>
              <div className="text-slate-600 font-medium">Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-slate-600 font-medium">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">10+</div>
              <div className="text-slate-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}