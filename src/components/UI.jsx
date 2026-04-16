import { useRef } from 'react'

export default function UI() {
    return (
        <header className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center pointer-events-none text-[#F5EFE6]">
            {/* Logo */}
            <div className="pointer-events-auto flex items-center gap-2">
                <h1 className="text-2xl font-bold tracking-widest uppercase">
                    BODR<span className="text-[#A1887F]">☕</span>N
                </h1>
            </div>

            {/* Centered Nav (Glassmorphism if needed, currently clean text) */}
            <nav className="pointer-events-auto absolute left-1/2 transform -translate-x-1/2 bg-[#3E2723]/80 backdrop-blur-md px-8 py-3 rounded-full flex gap-8 border border-[#5D4037]">
                {['Home', 'Menu', 'About', 'Reviews', 'Promo'].map((item) => (
                    <button key={item} className="text-xs font-medium uppercase tracking-wider hover:text-[#D7CCC8] transition-colors cursor-pointer">
                        {item}
                    </button>
                ))}
            </nav>

            {/* Right Icons & Action */}
            <div className="pointer-events-auto flex items-center gap-6">
                <button className="hover:text-orange-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </button>
                <button className="hover:text-orange-400 transition-colors relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-black text-[10px] w-3 h-3 flex items-center justify-center rounded-full font-bold">2</span>
                </button>
                <button className="bg-[#6D4C41] hover:bg-[#8D6E63] text-white text-xs font-bold px-6 py-3 rounded-full transition-colors uppercase tracking-wide">
                    Order Now
                </button>
            </div>
        </header>
    )
}
