import BannerLayout from '../Common/BannerLayout';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <BannerLayout>
            <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="z-10 max-w-5xl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8 inline-block px-4 py-1.5 rounded-full border border-white/5 bg-zinc-900/50 text-sm md:text-base text-zinc-400 backdrop-blur-md shadow-sm"
                    >
                        Building Scalable Digital Experiences
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 text-OffWhite leading-[0.9]">
                        Creative <br />
                        <span className="text-RoyalBlue">
                            <Typewriter
                                options={{
                                    strings: ['Developer.', 'Designer.', 'Engineer.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-2xl text-LightGray max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                    >
                        Engineering distinct web applications with a focus on performance, accessibility, and minimalist design.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link to='intro' smooth={true} duration={500} offset={-50}>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="button-primary px-8 py-4 text-lg shadow-blue-500/20 shadow-2xl ring-1 ring-blue-500/50"
                            >
                                View Projects
                            </motion.button>
                        </Link>

                        <a href="mailto:nishith@example.com" className="px-8 py-4 rounded-lg border border-white/5 bg-zinc-900/50 hover:bg-zinc-800 transition-all text-OffWhite font-medium text-lg backdrop-blur-sm">
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>

                {/* Subtle Background Glows removed in favor of global Background component */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    {/* Kept empty container if needed for future, or can remove entirely */}
                </div>

            </div>
        </BannerLayout>
    )
}

export default Banner