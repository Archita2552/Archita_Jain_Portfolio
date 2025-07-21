"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-indigo-400/20 rounded-full animate-float-slow" />
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400/20 rounded-full animate-float-medium" />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-400/20 rounded-full animate-float-fast" />
      <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-cyan-400/20 rounded-full animate-float-slow" />

      {/* Floating squares */}
      <div className="absolute top-1/5 right-1/5 w-4 h-4 bg-indigo-400/10 rotate-45 animate-float-medium" />
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-400/10 rotate-45 animate-float-fast" />
    </div>
  )
}
