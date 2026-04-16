import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollContent() {
    const sectionRef = useRef();

    useGSAP(() => {
        const featureItems = sectionRef.current.querySelectorAll('.feature-item');
        const sectionTitle = sectionRef.current.querySelector('.section-title');

        // Section title fade animation
        gsap.fromTo(sectionTitle,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionTitle,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Feature items fade animation
        featureItems.forEach((item) => {
            gsap.fromTo(item,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

    }, { scope: sectionRef });

    return (
        <div ref={sectionRef}>
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

            {/* FEATURES SECTION */}
            <section style={{ height: '100vh', width: '100vw', paddingTop: '10vh' }} className="relative overflow-hidden">
                <div className="text-center mb-16 section-title">
                    <h2 className="text-4xl font-black text-[#F5EFE6] tracking-[0.2em] uppercase drop-shadow-lg">
                        <span className="text-[#8D6E63]">BODREN</span> EXPERIENCE
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-x-[45vw] gap-y-24 px-[10vw] max-w-7xl mx-auto h-[60vh] items-center relative z-10">
                    <div className="feature-item text-left">
                        <h3 className="text-xl font-bold text-[#EFEBE9] mb-3 border-l-4 border-[#8D6E63] pl-4">
                            Exquisite Bean Selection
                        </h3>
                        <p className="text-[#D7CCC8] text-sm leading-relaxed max-w-[280px] font-light">
                            Our journey begins at the source. We meticulously source only the finest single-origin beans, ensuring a masterpiece of flavor in every pour.
                        </p>
                    </div>

                    <div className="feature-item text-right">
                        <h3 className="text-2xl font-bold text-[#EFEBE9] mb-3 border-r-4 border-[#8D6E63] pr-4">
                            Personalized Craftsmanship
                        </h3>
                        <p className="text-[#D7CCC8] text-sm leading-relaxed max-w-[280px] ml-auto font-light">
                            Your coffee, your signature. We craft each beverage to your exact specifications, because we believe perfection is a personal experience.
                        </p>
                    </div>

                    <div className="feature-item text-left">
                        <h3 className="text-2xl font-bold text-[#EFEBE9] mb-3 border-l-4 border-[#8D6E63] pl-4">
                            Captivating Ambience
                        </h3>
                        <p className="text-[#D7CCC8] text-sm leading-relaxed max-w-[280px] font-light">
                            Step into a sanctuary of warmth and tranquility. Our space is designed to be your cozy haven, where time slows down over a perfect cup.
                        </p>
                    </div>

                    <div className="feature-item text-right">
                        <h3 className="text-2xl font-bold text-[#EFEBE9] mb-3 border-r-4 border-[#8D6E63] pr-4">
                            Master Artisans
                        </h3>
                        <p className="text-[#D7CCC8] text-sm leading-relaxed max-w-[280px] ml-auto font-light">
                            Our baristas are more than just brewers; they are dedicated craftsmen. With years of expertise, they transform simple beans into liquid gold.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-16 w-full flex justify-center z-10">
                    <button className="bg-[#8D6E63] text-white font-black px-12 py-4 rounded-full hover:bg-[#A1887F] transition-all hover:scale-110 shadow-2xl uppercase tracking-widest text-sm">
                        Reserve Your Table
                    </button>
                </div>
            </section>
        </div>
    );
}