"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeSelector } from "@/components/ui/theme-selector";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-x-hidden bg-white dark:bg-neutral-950">
            {/* Theme Selector */}
            <div className="absolute top-4 right-4 z-20">
                <ThemeSelector />
            </div>
            
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 w-full flex items-center justify-center px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="text-center max-w-5xl"
                >
                    <h1 className="text-7xl sm:text-9xl md:text-10xl font-bold mb-12 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-linear-to-r from-neutral-900 to-neutral-700/80 
                                        dark:from-white dark:to-white/80"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-600 dark:text-neutral-400"
                        style={{ marginBottom: '4rem', marginTop: '2rem' }}
                    >
                        Academic Search Finally Simplified
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="flex flex-col sm:flex-row gap-6 items-center justify-center"
                    >

                        {/* WhatsApp Community Button */}
                        <a
                            href="https://chat.whatsapp.com/FO8HW11MbK95iZp6pNnhDi?mode=r_c"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="outline"
                                className="rounded-2xl px-8 py-6 text-lg font-semibold backdrop-blur-md 
                                bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black 
                                text-black dark:text-white transition-all duration-300 
                                hover:-translate-y-0.5 border-2 border-black/20 dark:border-white/20
                                hover:border-green-500 dark:hover:border-green-400 shadow-lg hover:shadow-xl
                                dark:hover:shadow-neutral-800/50 min-w-[180px] hover:text-green-600 dark:hover:text-green-400"
                            >
                                <span className="opacity-90 hover:opacity-100 transition-opacity">
                                    Join WhatsApp Community
                                </span>
                                <span className="ml-3 text-xl">💬</span>
                            </Button>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
