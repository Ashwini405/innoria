// import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Utensils, Pizza, Heart, Navigation, Star } from 'lucide-react';

// // Starfield Background to match the dark purple/black vibe
// const StarField = () => (
//   <div className="absolute inset-0 overflow-hidden pointer-events-none">
//     {[...Array(30)].map((_, i) => (
//       <motion.div
//         key={i}
//         className="absolute bg-orange-200/40 rounded-full"
//         style={{
//           width: Math.random() * 3 + 'px',
//           height: Math.random() * 3 + 'px',
//           left: Math.random() * 100 + '%',
//           top: Math.random() * 100 + '%',
//         }}
//         animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.2, 1] }}
//         transition={{ duration: 3 + Math.random() * 5, repeat: Infinity }}
//       />
//     ))}
//   </div>
// );

// export default function Landing() {
//   // 3D Tilt Logic for the central box
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const mouseXSpring = useSpring(x);
//   const mouseYSpring = useSpring(y);
//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

//   const handleMouseMove = (e: React.MouseEvent) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     x.set((e.clientX - rect.left) / rect.width - 0.5);
//     y.set((e.clientY - rect.top) / rect.height - 0.5);
//   };

//   return (
//     <div className="min-h-screen bg-[#0E0B16] text-white flex flex-col items-center selection:bg-orange-500 overflow-hidden">
//       <StarField />

//       {/* Navigation - High fidelity to your image */}
//       <nav className="relative z-50 w-full max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
//         <div className="flex items-center gap-3">
//           <div className="bg-white/10 p-2 rounded-lg border border-white/20">
//             <Utensils className="w-6 h-6 text-orange-400" />
//           </div>
//           <div>
//             <h1 className="text-xl font-bold tracking-tight">Gourmet Delights</h1>
//             <p className="text-[9px] text-orange-400 uppercase font-black tracking-[0.25em]">Fine Dining Experience</p>
//           </div>
//         </div>

//         <div className="flex items-center gap-10">
//           <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">
//             <Link to="/home" className="text-white border-b-2 border-orange-500 pb-1">Menu</Link>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
//           </div>
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             onClick={() => window.location.href = '/signup'}
//             className="px-7 py-2.5 bg-gradient-to-r from-orange-400 to-rose-500 rounded-full text-sm font-bold shadow-xl shadow-orange-500/20 cursor-pointer"
//           >
//             Reserve Table
//           </motion.button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <main className="flex-1 flex flex-col items-center justify-center relative w-full">
//         {/* Glow behind the box */}
//         <div className="absolute w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />

//         {/* Central Interactive Box Component */}
//         <motion.div
//           onMouseMove={handleMouseMove}
//           onMouseLeave={() => { x.set(0); y.set(0); }}
//           style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//           className="relative w-full max-w-[440px] aspect-square bg-[#D2B48C] rounded-xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center p-12 border-b-[10px] border-[#B89870] group"
//         >
//           {/* Decorative Elements - Exact placements from image */}
//           <div className="absolute top-8 left-8 flex flex-col items-center text-[#5D4037]/60">
//             <span className="text-[10px] font-black uppercase tracking-widest mb-1">Delicious</span>
//             <Heart className="w-4 h-4" />
//           </div>

//           <div className="absolute bottom-10 left-10 flex flex-col items-center text-[#5D4037]/60">
//             <span className="text-[10px] font-black uppercase tracking-widest mb-1">Fresh</span>
//             <Navigation className="w-4 h-4 rotate-45" />
//           </div>

//           {/* Dashed Pizza Outline SVG */}
//           <div className="absolute top-10 right-10 opacity-20 group-hover:rotate-45 transition-transform duration-1000">
//             <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="#5D4037" strokeWidth="1" strokeDasharray="3 3">
//               <circle cx="12" cy="12" r="10" />
//               <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" />
//             </svg>
//           </div>

//           <div className="absolute bottom-10 right-10 text-[#5D4037]/60 italic font-serif text-lg">
//             Tasty
//           </div>

//           {/* Central Animated Illustration */}
//           <motion.div
//             animate={{ y: [0, -10, 0] }}
//             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             className="mb-8 relative"
//           >
//             <Pizza className="w-28 h-28 text-orange-500 fill-orange-400 drop-shadow-2xl" />
//             <div className="absolute inset-0 bg-orange-400/20 blur-2xl rounded-full" />
//           </motion.div>

//           {/* Box Text Content */}
//           <div className="text-center text-[#5D4037]">
//             <p className="text-xs font-black uppercase tracking-[0.3em] mb-1 opacity-70">Italian</p>
//             <h2 className="text-2xl font-black mb-10">Hot & Fresh</h2>
            
//             <motion.button
//               whileHover={{ scale: 1.05, backgroundColor: "#5D4037", color: "#D2B48C" }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => window.location.href = '/signup'}
//               className="px-8 py-2.5 bg-[#5D4037]/10 border border-[#5D4037]/30 rounded-lg text-xs font-black uppercase tracking-widest transition-colors cursor-pointer"
//             >
//               Tap to Open
//             </motion.button>
//           </div>
//         </motion.div>
//       </main>

//       {/* Subtle Footer Info */}
//       <footer className="w-full max-w-7xl mx-auto px-8 py-10 flex justify-between items-center opacity-30">
//         <div className="flex items-center gap-2">
//           <Star className="w-3 h-3 text-orange-400" />
//           <span className="text-[9px] font-bold uppercase tracking-widest">Premium Quality Guaranteed</span>
//         </div>
//         <div className="text-[9px] font-bold uppercase tracking-widest">
//           © 2026 GOURMET DELIGHTS LTD.
//         </div>
//       </footer>
//     </div>
//   );
// }




import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Utensils, Heart, Navigation, Star, Sparkles, ChefHat, Crown, Gem } from 'lucide-react';
import { useState, useEffect } from 'react';

// Enhanced Starfield Background with floating particles
const StarField = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-gradient-to-r from-orange-200/60 to-rose-200/40 rounded-full"
        style={{
          width: Math.random() * 4 + 2 + 'px',
          height: Math.random() * 4 + 2 + 'px',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
        }}
        animate={{ 
          opacity: [0.1, 0.8, 0.1], 
          scale: [1, 1.5, 1],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 4 + Math.random() * 6, 
          repeat: Infinity,
          delay: Math.random() * 2
        }}
      />
    ))}
    {/* Floating food particles */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`food-${i}`}
        className="absolute text-orange-300/20"
        style={{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
        }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 3
        }}
      >
        {i % 2 === 0 ? <ChefHat className="w-6 h-6" /> : <Sparkles className="w-4 h-4" />}
      </motion.div>
    ))}
  </div>
);

export default function Landing() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // 3D Tilt Logic for the central box
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0E0B16] via-[#1A0E2E] to-[#0E0B16] text-white flex flex-col items-center selection:bg-orange-500 overflow-hidden relative">
      <StarField />
      
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-500/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Enhanced Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-50 w-full max-w-7xl mx-auto flex justify-between items-center px-8 py-6 backdrop-blur-sm bg-white/5 rounded-b-2xl border-b border-white/10">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-orange-400/20 to-rose-500/20 p-3 rounded-xl border border-orange-400/30 shadow-lg shadow-orange-500/10"
            whileHover={{ rotate: 5, scale: 1.1 }}
          >
            <Utensils className="w-6 h-6 text-orange-400" />
          </motion.div>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">Gourmet Delights</h1>
            <p className="text-[9px] text-orange-400 uppercase font-black tracking-[0.25em] flex items-center gap-1">
              <Sparkles className="w-2 h-2" />
              Fine Dining Experience
            </p>
          </div>
        </motion.div>

        <div className="flex items-center gap-10">
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">
            <Link to="/home" className="text-white border-b-2 border-orange-500 pb-1 relative group">
              Menu
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-rose-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-rose-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-rose-500 group-hover:w-full transition-all duration-300" />
            </a>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/signup'}
            className="px-7 py-3 bg-gradient-to-r from-orange-400 to-rose-500 rounded-full text-sm font-bold shadow-xl shadow-orange-500/30 cursor-pointer relative overflow-hidden group"
          >
            <span className="relative z-10">Reserve Table</span>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center relative w-full">
        {/* Enhanced glow effects */}
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-orange-500/15 to-rose-500/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-orange-400/20 rounded-full blur-[100px]" />

        {/* Enhanced Central Interactive Box */}
        <AnimatePresence>
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              y: 0,
              boxShadow: [
                "0 50px 100px rgba(0,0,0,0.8)",
                "0 60px 120px rgba(251,146,60,0.2)",
                "0 50px 100px rgba(0,0,0,0.8)"
              ]
            }}
            transition={{ 
              duration: 1, 
              ease: "easeOut", 
              delay: 0.3,
              boxShadow: { duration: 3, repeat: Infinity }
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[440px] aspect-square bg-gradient-to-br from-[#D2B48C] to-[#C4A373] rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center p-12 border-b-[12px] border-[#B89870] group overflow-hidden"
          >
            {/* Animated border glow */}
            <motion.div 
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(251,146,60,0.2), rgba(244,63,94,0.2))",
                  "linear-gradient(135deg, rgba(244,63,94,0.2), rgba(251,146,60,0.2))",
                  "linear-gradient(225deg, rgba(251,146,60,0.2), rgba(244,63,94,0.2))",
                  "linear-gradient(315deg, rgba(244,63,94,0.2), rgba(251,146,60,0.2))"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-[#D2B48C] to-[#C4A373]"
              animate={{
                background: [
                  "linear-gradient(135deg, #D2B48C, #C4A373)",
                  "linear-gradient(225deg, #D2B48C, #C4A373)",
                  "linear-gradient(315deg, #D2B48C, #C4A373)",
                  "linear-gradient(45deg, #D2B48C, #C4A373)"
                ]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            
            {/* Floating particles around the box */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-rose-500 rounded-full opacity-60"
                style={{
                  left: `${10 + (i * 10)}%`,
                  top: `${5 + (i % 2) * 90}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.sin(i) * 20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.5, 1.2, 0.5]
                }}
                transition={{
                  duration: 3 + (i * 0.5),
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
            {/* Enhanced Decorative Elements */}
            <motion.div 
              className="absolute top-8 left-8 flex flex-col items-center text-[#5D4037]/70 z-10"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <span className="text-[10px] font-black uppercase tracking-widest mb-1">Delicious</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 fill-red-400/30" />
              </motion.div>
            </motion.div>

            <motion.div 
              className="absolute bottom-10 left-10 flex flex-col items-center text-[#5D4037]/70 z-10"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <span className="text-[10px] font-black uppercase tracking-widest mb-1">Fresh</span>
              <motion.div
                animate={{ rotate: [45, 90, 45] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Navigation className="w-4 h-4" />
              </motion.div>
            </motion.div>

            {/* Enhanced Dashed Pizza Outline SVG */}
            <motion.div 
              className="absolute top-10 right-10 opacity-30 z-10"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              whileHover={{ scale: 1.2, opacity: 0.6 }}
            >
              <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="#5D4037" strokeWidth="1.5" strokeDasharray="4 4">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" />
              </svg>
            </motion.div>

            <motion.div 
              className="absolute bottom-10 right-10 text-[#5D4037]/70 italic font-serif text-lg z-10"
              whileHover={{ scale: 1.1, color: "#5D4037" }}
            >
              Tasty
            </motion.div>

            {/* Simple Elegant Food Icon */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="mb-8 relative z-10"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center shadow-2xl"
              >
                <Utensils className="w-16 h-16 text-white drop-shadow-lg" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-rose-400/20 blur-3xl rounded-full animate-pulse" />
              <div className="absolute inset-0 bg-orange-400/10 blur-xl rounded-full" />
            </motion.div>

            {/* Enhanced Box Text Content */}
            <div className="text-center text-[#5D4037] z-10 relative">
              <motion.p 
                className="text-xs font-black uppercase tracking-[0.3em] mb-2 opacity-80 flex items-center justify-center gap-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Sparkles className="w-3 h-3" />
                Italian
                <Sparkles className="w-3 h-3" />
              </motion.p>
              <motion.h2 
                className="text-3xl font-black mb-12 bg-gradient-to-r from-[#5D4037] to-[#8B4513] bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                Hot & Fresh
              </motion.h2>
              
              <motion.button
                whileHover={{ 
                  scale: 1.08, 
                  backgroundColor: "#5D4037", 
                  color: "#D2B48C",
                  boxShadow: "0 10px 30px rgba(93, 64, 55, 0.4)"
                }}
                whileTap={{ scale: 0.92 }}
                onClick={() => window.location.href = '/signup'}
                className="px-10 py-3 bg-[#5D4037]/15 border-2 border-[#5D4037]/40 rounded-xl text-sm font-black uppercase tracking-widest transition-all duration-300 cursor-pointer relative overflow-hidden group shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <span className="relative z-10">Tap to Open</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#5D4037] to-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Enhanced Footer */}
      <motion.footer 
        className="w-full max-w-7xl mx-auto px-8 py-10 flex justify-between items-center opacity-40 backdrop-blur-sm bg-white/5 rounded-t-2xl border-t border-white/10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05, opacity: 0.8 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Star className="w-3 h-3 text-orange-400" />
          </motion.div>
          <span className="text-[9px] font-bold uppercase tracking-widest">Premium Quality Guaranteed</span>
        </motion.div>
        <motion.div 
          className="text-[9px] font-bold uppercase tracking-widest"
          whileHover={{ scale: 1.05, opacity: 0.8 }}
        >
          © 2026 GOURMET DELIGHTS LTD.
        </motion.div>
      </motion.footer>
    </div>
  );
}