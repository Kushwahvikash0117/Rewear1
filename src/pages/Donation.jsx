import React from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Heart, Globe, Users, Zap, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

// --- CRITICAL CONSTANTS ---
const FOUNDATION_NAME = "ReWear";
const HEADER_HEIGHT_PX = '80px'; 

const HERO_IMAGES = [
    "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/10/25131609/251017_ClothesBoxFoundation_04.jpg",
    "https://d3mnyo7e05c2kb.cloudfront.net/blog-content/uploads/2019/04/where-to-donate-clothing-header.jpg",
   " https://www.shutterstock.com/image-photo/group-poor-pakistani-children-holding-260nw-2314389153.jpg"
];

const NAV_ITEMS = [
    { name: 'Mission', icon: Globe },
    { name: 'Projects', icon: Zap },
    { name: 'Partners', icon: ShieldCheck },
    { name: 'Contact', icon: Phone },
];

const STATS = [
    { number: '150K+', label: 'Lives Impacted', icon: Users },
    { number: '400', label: 'Volunteers Active', icon: Heart },
    { number: '15', label: 'Countries Served', icon: Globe },
];

// NOTE: The internal order of content boxes remains swapped (Addressing Basic Needs is first)
const IMPACT_POINTS = [
    { title: "Empowering Rural Women", description: "Our 'Re-Wear' program provides sustainable employment by manufacturing goods from reclaimed materials, fostering economic independence.", icon: Users },
    { title: "Addressing Basic Needs", description: "We focus on remote areas to supply essential items like clothing and sanitation kits, ensuring fundamental dignity.", icon: Zap },
    { title: "Sustainable Development", description: "Every project aligns with UN SDGs, prioritizing long-term environmental and social benefits.", icon: Globe },
];

// --- CORE COMPONENTS ---

const AccentButton = ({ children, className = '', onClick }) => (
    <button 
        className={`px-8 py-3 font-semibold text-lg rounded-full transition duration-300 shadow-xl 
                    hover:shadow-2xl transform hover:scale-[1.02] ${className}`}
        onClick={onClick}
    >
        {children}
    </button>
);

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-md z-50" style={{ height: HEADER_HEIGHT_PX }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center h-full">
                <div className="text-2xl font-black text-rose-900 tracking-tight"> 
                    {FOUNDATION_NAME}
                </div>
                
                <nav className="hidden md:flex items-center space-x-6">
                    {NAV_ITEMS.map((item) => (
                        <a key={item.name} href={`#${item.name.toLowerCase()}`} 
                           className="text-gray-600 hover:text-rose-400 font-medium transition duration-150 flex items-center">
                            <item.icon size={16} className="mr-1 text-rose-400" />
                            {item.name}
                        </a>
                    ))}
                    <AccentButton className={`bg-rose-400 text-white ml-4 hover:bg-rose-500`}> 
                        Support Us
                    </AccentButton>
                </nav>
                
                <button className="md:hidden p-2 text-rose-400" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-xl absolute top-[80px] w-full">
                    <nav className="flex flex-col space-y-1 p-4">
                        {NAV_ITEMS.map((item) => (
                            <a key={item.name} href={`#${item.name.toLowerCase()}`} 
                               className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition duration-150 font-medium"
                               onClick={() => setIsOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                        <AccentButton className={`bg-rose-400 text-white mt-2 w-full text-center hover:bg-rose-500`} onClick={() => setIsOpen(false)}>
                            Support Us
                        </AccentButton>
                    </nav>
                </div>
            )}
        </header>
    );
};

// ... (imports and other components)
// Custom smooth scroll handler
const handleSmoothScroll = (event, targetId) => {
    event.preventDefault(); // Stop instant jump
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        // Use native browser smooth scrolling
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Scroll to the top of the element
        });
    }
};

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [imageOpacity, setImageOpacity] = React.useState(1);
    const currentImageUrl = HERO_IMAGES[currentImageIndex];

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setImageOpacity(0);

            const timeoutId = setTimeout(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % HERO_IMAGES.length);
                setImageOpacity(1);
            }, 500);

            return () => clearTimeout(timeoutId);
        }, 3500);

        return () => clearInterval(intervalId);
    }, []); 
    
    return (
        <section className="relative flex items-center overflow-hidden" style={{ height: `calc(75vh)`, minHeight: `500px` }}>
            <div className="absolute inset-0">
                <img 
                    key={currentImageIndex} 
                    src={currentImageUrl} 
                    alt="Community help slider image" 
                    className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    style={{ opacity: imageOpacity }}
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src="https://placehold.co/1200x700/e0f2f1/1e40af?text=Image+Load+Failed" 
                    }}
                />
                <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug">
                    <span className="block">Dignity for All.</span>
                    <span className="block text-yellow-300">Sustainable Solutions.</span> 
                </h1>
                <p className="mt-4 max-w-xl text-xl font-light opacity-90">
                    "LET CLOTHING NOT BE A PRIVILEGE OR SUSTAINABILITY AN AFTERTHOUGHT" — Driving change in rural communities through empowerment.
                </p>
                <div className="mt-8 flex space-x-4">
                    <AccentButton className={`bg-rose-400 text-white hover:bg-rose-500`}>
                        <Heart size={20} className="inline-block mr-2" /> Donate Now
                    </AccentButton>
                    
                    {/* The `<a>` tag is replaced with a `<button>` that calls the smooth scroll function */}
                    <button 
                        onClick={(e) => handleSmoothScroll(e, 'mission')} 
                        className="px-8 py-3 font-semibold text-lg rounded-full transition duration-300 shadow-xl 
                            hover:shadow-2xl transform hover:scale-[1.02] bg-white text-rose-400 hover:bg-rose-100"
                    >
                        Our Impact
                    </button>
                </div>
            </div>
        </section>
    );
};

// ... (rest of the components and App export)

const StatsSection = () => (
    <div className={`py-10 bg-rose-100 rounded-t-2xl shadow-2xl`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-rose-900 text-center">
            {STATS.map((stat) => (
                <div key={stat.label} className="p-4 flex flex-col items-center">
                    <stat.icon size={36} className="text-rose-400 mb-2" />
                    <p className="text-4xl font-extrabold tracking-tight">{stat.number}</p>
                    <p className="mt-1 text-base font-medium opacity-80">{stat.label}</p>
                </div>
            ))}
        </div>
    </div>
); 

const ImpactSection = () => (
    // id="mission" is the anchor point
    <section id="mission" className="py-20 px-4 bg-white -mt-1"> 
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-base font-semibold text-rose-400 uppercase tracking-wider">OUR CORE CAUSES</h2>
                <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
                    Spreading Happiness, One Milestone at a time
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    IMPACT_POINTS[1], 
                    IMPACT_POINTS[0], 
                    IMPACT_POINTS[2], 
                ].map((point, index) => (
                    <div key={index} className="p-6 border-t-4 border-rose-400 rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-gray-50">
                        <point.icon size={32} className="text-rose-400 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                        <p className="text-gray-600">{point.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// New constant array for the rotating quotes
const IMPACT_QUOTES = [
    {
        quote: "Before, I had no steady income; now, through **Refresh**, I not only earn a living but also help my community reuse waste fabrics. It’s a sustainable livelihood.",
        author: "Priya, Refresh Artisan"
    },
    {
        quote: "The donation of warm clothing helped my children survive the harsh winter. It’s more than clothes; it's **dignity and warmth**.",
        author: "Meena, Community Recipient"
    },
    {
        quote: "ReWear's partnership has allowed us to integrate recycling practices seamlessly, boosting our local economy while **cutting waste to zero**.",
        author: "Ravi, Village Council Head"
    },
    {
        quote: "Seeing the confidence of the women artisans grow is the real reward. We are building a future where **no thread is wasted**.",
        author: "Sanjay, Project Manager"
    }
];


const RealImpactBox = () => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = React.useState(0);
    const [quoteOpacity, setQuoteOpacity] = React.useState(1);
    
    // Logic to cycle the quotes every 5 seconds (5000ms)
    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setQuoteOpacity(0); // Start fade out

            const timeoutId = setTimeout(() => {
                setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % IMPACT_QUOTES.length);
                setQuoteOpacity(1); // Start fade in
            }, 300); // Wait for the 300ms fade-out transition

            return () => clearTimeout(timeoutId);
        }, 5000); // 5 seconds interval

        return () => clearInterval(intervalId);
    }, []);

    const currentQuote = IMPACT_QUOTES[currentQuoteIndex];

    return (
        <section className="py-16 px-4 bg-rose-50">
            <div className="max-w-3xl mx-auto p-8 rounded-xl bg-orange-200 text-gray-800 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-center">Real Impact: Stories of Change</h3>
                
                <div className="min-h-[100px] flex flex-col justify-center"> {/* Ensure a fixed height to prevent layout jump */}
                    <div 
                        key={currentQuoteIndex} // Key forces transition on content change
                        className="transition-opacity duration-300 ease-in-out text-center"
                        style={{ opacity: quoteOpacity }}
                    >
                        <p className="italic text-lg">
                            {/* Dangerously set inner HTML to render the bold tags (**) */}
                            <span dangerouslySetInnerHTML={{ __html: currentQuote.quote }} />
                        </p>
                        <div className="mt-4 text-sm font-semibold text-rose-600">
                            — {currentQuote.author}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
const Footer = () => (
    <footer className="bg-gray-900 text-gray-300 font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10 mb-10">
                
                <div className="col-span-2 md:col-span-1">
                    <h3 className="text-2xl font-black text-white mb-4">{FOUNDATION_NAME}</h3>
                    <p className="text-sm">
                        Empowering the marginalized through dignity and sustainable action.
                    </p>
                    <div className="flex space-x-3 mt-4">
                        <a href="#" aria-label="Facebook" className="p-2 rounded-full text-white bg-rose-400 hover:bg-rose-500 transition duration-300">
                            <Facebook size={18} />
                        </a>
                        <a href="#" aria-label="Twitter" className="p-2 rounded-full text-white bg-rose-400 hover:bg-rose-500 transition duration-300">
                            <Twitter size={18} />
                        </a>
                        <a href="#" aria-label="Instagram" className="p-2 rounded-full text-white bg-rose-400 hover:bg-rose-500 transition duration-300">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        {['About Us', 'Refund Policy', 'Legal Documents', 'Stories'].map((link, index) => (
                            <li key={index}>
                                <a href="#" className="text-sm hover:text-rose-400 transition duration-300">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-white mb-4">Get In Touch</h4>
                    <div className="space-y-3 text-sm">
                        <div className="flex items-start">
                            <Mail size={16} className="mt-1 mr-2 text-rose-400 flex-shrink-0" />
                            <span>contact@momentum.org</span>
                        </div>
                        <div className="flex items-start">
                            <Phone size={16} className="mt-1 mr-2 text-rose-400 flex-shrink-0" />
                            <span>+91 XXXX-XXXXXX</span>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-lg font-bold text-white mb-4">Head Office</h4>
                    <div className="flex items-start text-sm">
                        <MapPin size={16} className="mt-1 mr-2 text-rose-400 flex-shrink-0" />
                        <p>
                           101 Global Square, Sustainability Road, New Delhi, India 110001
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="text-center pt-8">
                <p className="text-xs text-gray-500">
                    &copy; COPYRIGHT 2025 {FOUNDATION_NAME}. ALL RIGHTS RESERVED.
                </p>
                <div className="mt-4 flex justify-center space-x-6 text-sm text-gray-500">
                    <span>Verified Partner</span>
                    <span>Audited by NASSCOM</span>
                </div>
            </div>
        </div>
        
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" 
            className={`fixed bottom-6 right-6 p-4 bg-rose-400 text-white rounded-full shadow-2xl hover:opacity-90 transition duration-300 z-50`}
            aria-label="Chat on WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
        </a>
    </footer>
);

// --- MAIN APP ENTRY POINT (FINAL ORDER) ---

const Donation = () => {
    return (
        <div className="min-h-screen bg-rose-50 font-inter antialiased">
            <Header />
            <main style={{ marginTop: HEADER_HEIGHT_PX }}> 
                
                {/* 1. Hero Section (Image/Banner) */}
                <HeroSection /> 
                
                {/* 2. Impact Section (Spreading Happiness) - Target of the "Our Impact" button */}
                <ImpactSection /> 
                
                {/* 3. Stats Section (150K+) */}
                <StatsSection /> 
                
                {/* 4. REAL IMPACT BOX */}
                <RealImpactBox />
                
            </main>
            <Footer />
        </div>
    );
};
export default Donation;
