import { motion } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';
import Badge from '../Common/Badge';

const PortfolioCard = ({ data }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bento-card h-full flex flex-col group overflow-hidden p-0 border border-white/5 hover:border-RoyalBlue/50 transition-all duration-300">
            <div className="relative overflow-hidden h-48 w-full">
                <img
                    src={data?.image}
                    alt={data?.projectName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-Surface to-transparent" />
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-OffWhite group-hover:text-RoyalBlue transition-colors">
                        <a
                            href={data?.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {data?.projectName}
                        </a>
                    </h3>

                    <a
                        href={data?.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-LightGray hover:text-RoyalBlue transition-colors"
                    >
                        <FaGlobe className="text-lg" />
                    </a>
                </div>

                <p className="text-sm text-LightGray/80 leading-relaxed mb-6 flex-1">
                    {data?.projectDetail}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {data.technologiesUsed.map((tech, key) => (
                        <Badge key={key} title={tech.tech} />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default PortfolioCard