import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollContent() {
    const sectionRef = useRef();

    useGSAP(() => {
        const featureItems = sectionRef.current.querySelectorAll('.feature-item');

        // Feature items entrance animation
        featureItems.forEach((item, index) => {
            gsap.fromTo(item,
                { 
                    opacity: 0, 
                    x: index % 2 === 0 ? -100 : 100,
                    y: 40 
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });

        // Background Blur Animation for final section (Heavy Style matching user screenshot)
        gsap.fromTo(".blur-overlay", 
            { 
                backdropFilter: "blur(0px)",
                backgroundColor: "rgba(44, 24, 16, 0)",
                opacity: 0,
                visibility: "hidden"
            },
            {
                backdropFilter: "blur(20px)", // Heavy 20px blur as requested
                backgroundColor: "rgba(44, 24, 16, 0.6)", // Darker overlay for cinematic feel
                opacity: 1,
                visibility: "visible",
                scrollTrigger: {
                    trigger: "#final-footer",
                    start: "top 95%",
                    end: "top 50%",
                    scrub: true,
                    toggleActions: "play none none reverse"
                }
            }
        );

    }, { scope: sectionRef });

    return (
        <div ref={sectionRef}>
            {/* Cinematic Background Blur Overlay - z-index below Navbar (z-50) */}
            <div className="fixed inset-0 pointer-events-none z-[40] blur-overlay" 
                 style={{ backdropFilter: 'blur(0px)', backgroundColor: 'rgba(44, 24, 16, 0)', opacity: 0 }} />

            {/* HERO SECTION */}
            <section style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', paddingLeft: '10vw' }}>
                <div className="max-w-xl">
                    <h1 className="text-6xl font-black text-[#F5EFE6] mb-6 leading-[1.1] uppercase drop-shadow-2xl">
                        Discover<br />Exquisite Taste<br />In Every Sip
                    </h1>
                    <p className="text-[#D7CCC8] text-xl mb-10 font-light max-w-md leading-relaxed">
                        Experience the art of artisanal coffee. Sourced ethically, roasted to perfection, and served with a passion that transcends the ordinary.
                    </p>
                    <div className="flex gap-6">
                        <button className="bg-[#8D6E63] text-white px-10 py-4 rounded-full font-bold hover:bg-[#A1887F] transition-all hover:scale-105 shadow-xl uppercase tracking-widest text-sm">
                            Explore Menu
                        </button>
                    </div>
                </div>
            </section>

            {/* MENU SECTION */}
            <section style={{ height: '100vh', width: '100vw' }} className="flex flex-col justify-center px-[10vw]">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-[#8D6E63] font-bold uppercase tracking-[0.3em] mb-2 text-sm">Artisan Menu</h2>
                        <h3 className="text-5xl font-black text-[#F5EFE6] uppercase">Today's Roasts</h3>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        { name: "Ethiopian Yirgacheffe", price: "$6.50", rating: "4.9", desc: "Floral notes with a citrus finish." },
                        { name: "Colombian Supremo", price: "$5.75", rating: "4.8", desc: "Rich, nutty flavor with hints of caramel." },
                        { name: "Sumatran Mandheling", price: "$6.25", rating: "4.7", desc: "Earthy, full-bodied with a spicy aroma." }
                    ].map((item, index) => (
                        <div key={index} className="feature-item bg-[#3E2723]/20 backdrop-blur-md border border-[#5D4037]/30 p-8 rounded-3xl hover:border-[#8D6E63] transition-all group cursor-pointer hover:-translate-y-2">
                            <div className="flex justify-between items-start mb-6">
                                <span className="p-3 bg-[#6D4C41]/30 rounded-2xl text-[#8D6E63]">
                                    ★ {item.rating}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-[#F5EFE6] mb-1 uppercase">{item.name}</h3>
                            <p className="text-[#A1887F] text-xs mb-6 font-light leading-relaxed">{item.desc}</p>
                            <div className="flex justify-between items-center mt-auto border-t border-[#5D4037]/20 pt-6">
                                <span className="text-lg font-bold text-[#F5EFE6]">{item.price}</span>
                                <button className="w-10 h-10 rounded-full bg-[#8D6E63] text-white flex items-center justify-center hover:bg-[#A1887F] transition-all">
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FEATURES SECTIONS */}
            {[
                { title: "Exquisite Bean Selection", text: "Our journey begins at the source. We meticulously source only the finest single-origin beans, ensuring a masterpiece of flavor in every pour.", align: "left" },
                { title: "Personalized Craftsmanship", text: "Your coffee, your signature. We craft each beverage to your exact specifications, because we believe perfection is a personal experience.", align: "right" },
                { title: "Captivating Ambience", text: "Step into a sanctuary of warmth and tranquility. Our space is designed to be your cozy haven, where time slows down over a perfect cup.", align: "left" },
                { title: "Master Artisans", text: "Our baristas are more than just brewers; they are dedicated craftsmen. With years of expertise, they transform simple beans into liquid gold.", align: "right" }
            ].map((feature, index) => (
                <section key={index} style={{ height: '100vh', width: '100vw' }} className="flex items-center px-[10vw]">
                    <div className={`feature-item max-w-lg ${feature.align === 'right' ? 'ml-auto text-right' : 'text-left'}`}>
                        <h3 className={`text-5xl font-black text-[#F5EFE6] mb-6 uppercase tracking-tight drop-shadow-xl ${feature.align === 'right' ? 'border-r-8 border-[#8D6E63] pr-8' : 'border-l-8 border-[#8D6E63] pl-8'}`}>
                            {feature.title}
                        </h3>
                        <p className={`text-[#D7CCC8] text-xl leading-relaxed font-light ${feature.align === 'right' ? 'mr-12' : 'ml-12'}`}>
                            {feature.text}
                        </p>
                    </div>
                </section>
            ))}

            <section style={{ height: '100vh', width: '100vw' }} className="flex flex-col items-center justify-center">
                <div className="feature-item text-center">
                    <h2 className="text-6xl font-black text-[#F5EFE6] mb-12 uppercase tracking-widest drop-shadow-2xl">
                        Ready for the <span className="text-[#8D6E63]">Perfect</span> Cup?
                    </h2>
                    <button className="bg-[#6D4C41] text-white font-black px-16 py-6 rounded-full hover:bg-[#8D6E63] transition-all hover:scale-110 shadow-2xl uppercase tracking-[0.3em] text-lg">
                        Reserve Your Table
                    </button>
                </div>
            </section>

            {/* CONNECT & LOCATION SECTION (Final: Uses id="final-footer" for trigger) */}
            <section id="final-footer" style={{ height: '100vh', width: '100vw' }} className="flex items-center px-[10vw]">
                <div className="feature-item grid grid-cols-2 gap-20 w-full bg-[#3E2723]/30 backdrop-blur-xl border border-[#5D4037]/50 p-16 rounded-[4rem]">
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-4xl font-black text-[#F5EFE6] mb-6 uppercase tracking-widest">
                                Visit Our <span className="text-[#8D6E63]">Sanctuary</span>
                            </h3>
                            <p className="text-[#D7CCC8] text-lg font-light leading-relaxed">
                                123 Artisan Valley, Coffee District<br />Roasted Peaks, CA 90210
                            </p>
                        </div>

                        <div className="flex gap-16">
                            <div>
                                <h4 className="text-[#8D6E63] font-bold uppercase text-sm tracking-widest mb-4">Opening Hours</h4>
                                <ul className="text-[#D7CCC8] text-sm space-y-2">
                                    <li>Mon - Fri: 7am - 9pm</li>
                                    <li>Sat - Sun: 8am - 10pm</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[#8D6E63] font-bold uppercase text-sm tracking-widest mb-4">Contact</h4>
                                <ul className="text-[#D7CCC8] text-sm space-y-2">
                                    <li>hello@bodren.coffee</li>
                                    <li>+1 (555) 012-3456</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            {['IG', 'TW', 'FB'].map((social) => (
                                <div key={social} className="w-12 h-12 rounded-full border border-[#8D6E63] flex items-center justify-center text-[#F5EFE6] hover:bg-[#8D6E63] transition-all cursor-pointer font-bold text-xs uppercase">
                                    {social}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-8 bg-[#3E2723]/40 p-12 rounded-3xl border border-[#5D4037]/30">
                        <h3 className="text-2xl font-bold text-[#F5EFE6] uppercase tracking-wider">Join the Inner Circle</h3>
                        <p className="text-[#D7CCC8] text-sm font-light">Subscribe for exclusive bean releases and artisanal stories.</p>
                        <div className="flex gap-2">
                            <input type="email" placeholder="Your email" className="bg-transparent border-b border-[#5D4037] py-3 text-[#F5EFE6] focus:outline-none focus:border-[#8D6E63] flex-1 text-sm" />
                            <button className="bg-[#8D6E63] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#A1887F] transition-all">Join</button>
                        </div>
                        <p className="text-[#A1887F] text-[10px] uppercase tracking-tighter">© 2026 BODREN Coffee Artisans. Crafted with Passion.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}