import { motion } from 'framer-motion';
import { containerVariants, fadeUpVariants } from '../lib/motion';
import { hero, profile } from '../data/profile';

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'WORK', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

// Headline tone → gradient classes (cinematic 3-line treatment)
const toneGradients: Record<string, string> = {
  light: 'from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]',
  gold: 'from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]',
  amber: 'from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]',
};

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black">
      {/* ================= 1. AMBIENT BACKGROUND (replaces video layer) ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black">
        {/* Animated gold radial glow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.07, 0.14, 0.07] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-[36rem] h-[36rem] bg-[#D4AF37] rounded-full blur-[160px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 left-1/6 w-[30rem] h-[30rem] bg-[#8C6D4F] rounded-full blur-[170px]"
        />

        {/* Drifting gold particles */}
        {[
          { top: '18%', left: '12%', size: 2, dur: 7, delay: 0 },
          { top: '32%', left: '78%', size: 1.5, dur: 9, delay: 1.2 },
          { top: '62%', left: '8%', size: 1.5, dur: 8, delay: 0.6 },
          { top: '74%', left: '70%', size: 2.5, dur: 10, delay: 2 },
          { top: '48%', left: '45%', size: 1, dur: 12, delay: 0.3 },
        ].map((p, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -30, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
            className="absolute rounded-full bg-[#F3DBB3] shadow-[0_0_8px_#D4AF37]"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          />
        ))}

        {/* Seamless soft left blend (keeps text legible) */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none" />
      </div>

      {/* ================= 2. FLOATING "AR" MONOGRAM EMBLEM ================= */}
      <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-12 pointer-events-none flex items-center justify-center z-10">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-36 h-36 bg-black/85 rounded-full blur-xl" />
          <motion.div
            animate={{ y: [-3, 3, -3], scale: [1, 1.03, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative flex items-center justify-center"
          >
            {/* AR monogram — styled placeholder for future emblem image */}
            <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full border border-[#D4AF37]/40 flex flex-col items-center justify-center bg-[#0A0806]/90 backdrop-blur-sm drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]">
              <span
                className="text-4xl lg:text-[2.6rem] leading-none text-[#D8AB64]"
                style={{ fontFamily: "'Cinzel', 'Georgia', serif", letterSpacing: '0.08em' }}
              >
                AR
              </span>
              <span className="text-[7px] tracking-[0.4em] uppercase text-[#8C6D4F] mt-1.5">
                EST. 2025
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= 3. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8">
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full">
          <a
            href="#"
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:opacity-75 transition-opacity"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {profile.brand}
          </a>

          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-all duration-300 backdrop-blur-sm ml-auto md:ml-0"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>LET&apos;S TALK</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
              ↗
            </span>
          </a>
        </header>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">
          {/* LEFT: Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[37rem] xl:max-w-[40rem] pointer-events-auto z-20"
          >
            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-3.5 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {hero.headlineLines.map((line) => (
                  <span
                    key={line.text}
                    className={`block text-transparent bg-clip-text bg-gradient-to-b ${toneGradients[line.tone]}`}
                  >
                    {line.text}
                  </span>
                ))}
              </h1>
            </motion.div>

            {/* Subtitle Roles */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <p
                className="text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.28em] uppercase text-[#C4B29E]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {hero.roles.join(' • ')}
              </p>
            </motion.div>

            {/* Bio */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#A8988B] leading-[1.8] tracking-wide max-w-lg mb-6 space-y-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                {hero.bio[0]}
                <br />
                {hero.bio[1]}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-row items-center gap-4 sm:gap-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <motion.a
                href={hero.ctas.primary.href}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-3 px-6 sm:px-7 py-3.5 border border-[#8C6D4F] bg-[#120F0C]/80 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.18)]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent pointer-events-none" />
                <span>{hero.ctas.primary.label}</span>
                <span className="text-xs">↗</span>
              </motion.a>

              <motion.a
                href={hero.ctas.secondary.href}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#BFA895] hover:text-[#EAD8C7] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
              >
                <span>{hero.ctas.secondary.label}</span>
                <span className="text-xs">↓</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Quote & Signature Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-auto pr-24 xl:pr-36 mr-4 z-20 select-none"
          >
            <span className="text-xl text-[#C99E5D] leading-none font-serif mb-2">&ldquo;</span>

            <div
              className="text-[9.5px] font-medium tracking-[0.24em] uppercase text-[#E0D3C5] space-y-1 mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>{hero.quote.line1}</p>
              <p>{hero.quote.line2}</p>
            </div>

            <div className="w-28 h-[1px] bg-gradient-to-r from-[#D4AF37] via-[#E8D7C5]/70 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.4)] mb-2" />

            <div
              className="text-[2.2rem] text-[#D8AB64] font-normal leading-none -ml-0.5"
              style={{
                fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive",
                letterSpacing: '0.04em',
              }}
            >
              {profile.signature}
            </div>
          </motion.div>
        </div>

        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;
