
import { motion } from 'framer-motion';

const ExpertiseCard = ({ data, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bento-card h-full flex flex-col justify-between group"
        >
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-OffWhite group-hover:text-RoyalBlue transition-colors duration-300">
                        {data.title}
                    </h3>
                </div>

                <p className="text-sm text-LightGray group-hover:text-OffWhite/90 leading-relaxed transition-colors duration-300">
                    {data.desc}
                </p>
            </div>

            {/* Subtle progress bar or indicator */}
            <div className="mt-8 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '40%' }} // Static width for aesthetics as "expertise" isn't always 100%
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                    className="h-full bg-RoyalBlue"
                />
            </div>
        </motion.div>
    )
}

export default ExpertiseCard