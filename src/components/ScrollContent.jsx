import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollContent() {
    const sectionRef = useRef();

    useGSAP(() => {
        const featureItems = sectionRef.current.querySelectorAll('.feature-item');

        // Feature items animation
        featureItems.forEach((item, index) => {
            gsap.fromTo(item,
                { 
                    opacity: 0, 
                    x: index % 2 === 0 ? -100 : 100, // Slide from left or right
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

        // Background Blur Animation for final section
        gsap.to(".blur-overlay", {
            backdropFilter: "blur(12px)",
            backgroundColor: "rgba(44, 24, 16, 0.4)",
            scrollTrigger: {
                trigger: ".feature-item.grid", // Matches the final footer section
                start: "top 80%",
                end: "top 20%",
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });

    }, { scope: sectionRef });

    return (
        <div ref={sectionRef}>
            {/* Cinematic Background Blur Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[40] transition-opacity duration-100 blur-overlay" 
                 style={{ backdropFilter: 'blur(0px)', backgroundColor: 'rgba(44, 24, 16, 0)' }} />

            {/* HERO SECTION */}
            <section style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', paddingLeft: '10vw' }}>
                <div className="max-w-xl">
                    <h1 className="text-6xl font-black text-[#F5EFE6] mb-6 leading-[1.1] uppercase drop-shadow-2xl">
                        Discover<br />Exquisite Taste<br />In Every Sip
                    </h1>
                    <p className="text-[#D7CCC8] text-lg mb-8 leading-relaxed max-w-md font-light">
                        For us, coffee is not just a drink, but an art. We invite you on a unique culinary journey where every sip is a meeting with perfect taste.
                    </p>
                    <button className="bg-[#6D4C41] text-white font-bold px-8 py-4 rounded-full hover:bg-[#8D6E63] transition-all hover:scale-105 shadow-lg shadow-[#3E2723]/50">
                        Choose Coffee
                    </button>
                </div>
            </section>

            {/* MENU CARDS */}
            <section style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '30vw' }}>
                <div className="flex gap-6">
                    {[
                        { name: 'Cappuccino', price: '120 p.', rating: '4.9', desc: '30% espresso, 40% milk, 30% foam', image: 'https://img.freepik.com/free-psd/close-up-coffee-mug-isolated_23-2151833545.jpg?semt=ais_user_personalization&w=740&q=80' },
                        { name: 'Latte', price: '140 p.', rating: '5.0', desc: '30% espresso, 70% steamed milk', image: 'https://www.drinksupercoffee.com/cdn/shop/articles/fae84ed5-a18c-4da8-95d8-d38d576fa3b1_latte_2a0c8c48-b26b-48a0-8079-f999ed9fa3fd.jpg?v=1746120400&width=2048' },
                        { name: 'Mocha', price: '140 p.', rating: '4.7', desc: '20% espresso, 50% hot milk, 30% chocolate', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5p1q2u39s9-MRsW1EwiRsCGvzEPUKuGBbQ&s' }
                    ].map((item) => (
                        <div key={item.name} className="bg-[#3E2723]/40 backdrop-blur-md border border-[#5D4037]/50 p-6 rounded-3xl w-64 flex flex-col items-center text-center hover:bg-[#3E2723]/60 transition-colors cursor-pointer group shadow-xl">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform shadow-lg"
                            />

                            <div className="flex items-center gap-1 mb-2 bg-[#5D4037] px-2 py-1 rounded text-xs font-bold text-white">
                                <span>★</span> {item.rating}
                            </div>

                            <h3 className="text-xl font-bold text-[#F5EFE6] mb-1">{item.name}</h3>
                            <p className="text-[#A1887F] text-xs mb-4 leading-tight min-h-[3em]">{item.desc}</p>

                            <div className="flex justify-between w-full items-center mt-auto">
                                <span className="text-lg font-bold text-[#F5EFE6]">{item.price}</span>
                                <button className="w-8 h-8 rounded-full bg-[#8D6E63] text-white flex items-center justify-center hover:bg-[#A1887F] transition-colors">
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FEATURES SECTIONS (Individual) */}
            {[
                {
                    title: "Exquisite Bean Selection",
                    text: "Our journey begins at the source. We meticulously source only the finest single-origin beans, ensuring a masterpiece of flavor in every pour.",
                    align: "left"
                },
                {
                    title: "Personalized Craftsmanship",
                    text: "Your coffee, your signature. We craft each beverage to your exact specifications, because we believe perfection is a personal experience.",
                    align: "right"
                },
                {
                    title: "Captivating Ambience",
                    text: "Step into a sanctuary of warmth and tranquility. Our space is designed to be your cozy haven, where time slows down over a perfect cup.",
                    align: "left"
                },
                {
                    title: "Master Artisans",
                    text: "Our baristas are more than just brewers; they are dedicated craftsmen. With years of expertise, they transform simple beans into liquid gold.",
                    align: "right"
                }
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
                    <button className="bg-[#6D4C41] text-white font-black px-16 py-6 rounded-full hover:bg-[#8D6E63] transition-all hover:scale-110 shadow-2xl uppercase tracking-[0.3em] text-lg active:scale-95">
                        Reserve Your Table
                    </button>
                </div>
            </section>

            {/* CONNECT & LOCATION SECTION (Final) */}
            <section style={{ height: '100vh', width: '100vw' }} className="flex items-center px-[10vw]">
                <div className="feature-item grid grid-cols-2 gap-20 w-full bg-[#3E2723]/30 backdrop-blur-xl border border-[#5D4037]/50 p-16 rounded-[4rem]">
                    
                    {/* Left Column: Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-4xl font-black text-[#F5EFE6] mb-6 uppercase tracking-widest">
                                Visit Our <span className="text-[#8D6E63]">Sanctuary</span>
                            </h3>
                            <p className="text-[#D7CCC8] text-lg font-light leading-relaxed">
                                123 Artisan Valley, Coffee District<br />
                                Roasted Peaks, CA 90210
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

                        {/* Social Links */}
                        <div className="flex gap-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border border-[#8D6E63] flex items-center justify-center text-[#F5EFE6] hover:bg-[#8D6E63] transition-all cursor-pointer">
                                    {/* SVG Placeholders for Socials */}
                                    <span className="text-xs font-bold">IG</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Newsletter */}
                    <div className="flex flex-col justify-center space-y-8 bg-[#3E2723]/40 p-12 rounded-3xl border border-[#5D4037]/30">
                        <h3 className="text-2xl font-bold text-[#F5EFE6] uppercase tracking-wider">Join the Inner Circle</h3>
                        <p className="text-[#D7CCC8] text-sm font-light">
                            Subscribe for exclusive bean releases, brewing secrets, and artisanal stories.
                        </p>
                        <div className="flex gap-2">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="bg-transparent border-b-2 border-[#5D4037] py-3 text-[#F5EFE6] focus:outline-none focus:border-[#8D6E63] flex-1 text-sm"
                            />
                            <button className="bg-[#8D6E63] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#A1887F] transition-all">
                                Join
                            </button>
                        </div>
                        <p className="text-[#A1887F] text-[10px] uppercase tracking-tighter">
                            © 2026 BODREN Coffee Artisans. Crafted with Passion.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}