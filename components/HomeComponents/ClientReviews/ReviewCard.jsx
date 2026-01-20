
import { MdLocationOn } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion';

const ReviewCard = ({ data, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.2}
            className="bento-card w-80 md:w-96 p-6 md:p-8 flex-shrink-0 relative overflow-hidden group border border-white/5 hover:border-RoyalBlue/50"
        >
            <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col gap-1">
                    <span className="text-lg text-OffWhite font-bold tracking-wide">{data?.clientName}</span>
                    <div className="text-xs text-LightGray/60 flex items-center gap-1">
                        <MdLocationOn className="text-RoyalBlue" />
                        <em>{data?.clientLocation}</em>
                    </div>
                </div>
                <span className='text-xs font-bold px-2 py-1 rounded bg-RoyalBlue/10 text-RoyalBlue border border-RoyalBlue/20'>
                    {data?.clientSource}
                </span>
            </div>

            <p className="text-sm text-LightGray/90 font-light leading-relaxed mb-6">
                "{data.clientReview}"
            </p>

            <div className="flex gap-1 items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-yellow-500 text-sm" />
                ))}
            </div>
        </motion.div>
    )
}

export default ReviewCard