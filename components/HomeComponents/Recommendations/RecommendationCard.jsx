
import { motion } from 'framer-motion';

const RecommendationCard = ({ data, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.2}
            className="bento-card h-full relative group overflow-hidden flex flex-col justify-between cursor-grab active:cursor-grabbing"
        >
            <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <img
                                src={data?.image}
                                alt={data?.name}
                                className="relative w-14 h-14 object-cover rounded-full border border-white/10 group-hover:border-RoyalBlue/50 transition-colors"
                            />
                        </div>
                        <div>
                            <a
                                href={data?.linkednURL}
                                target="_blank"
                                rel="noreferrer"
                                className="text-OffWhite font-bold text-lg hover:text-RoyalBlue transition-colors"
                            >
                                {data?.name}
                            </a>
                            <div className="text-xs text-LightGray/60 italic">{data?.designation}</div>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-LightGray/90 leading-relaxed relative z-10">
                    "{data?.view}"
                </p>
            </div>
        </motion.div>
    )
}

export default RecommendationCard