
import RecommendationCard from "./RecommendationCard"
import axios from "axios";
import { useQuery } from "react-query";
import { motion } from "framer-motion";

const Recommendations = () => {
    const { isLoading, error, data } = useQuery('recommendations', () =>
        axios.get('api/recommendations')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-4"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-OffWhite">
                        Testimonials
                    </h2>
                    <div className="w-20 h-1 bg-RoyalBlue rounded-full" />
                    <p className="text-LightGray max-w-lg text-lg">
                        What my peers and colleagues have said about working with me.
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {isLoading ?
                    [1, 2, 3, 4].map((_, i) => (
                        <div key={i} className="bento-card h-64 animate-pulse flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-white/10 rounded-full" />
                                <div className="space-y-2">
                                    <div className="w-32 h-4 bg-white/10 rounded" />
                                    <div className="w-24 h-3 bg-white/5 rounded" />
                                </div>
                            </div>
                            <div className="w-full h-full bg-white/5 rounded-xl" />
                        </div>
                    ))
                    :
                    data?.map((data, key) => (
                        <RecommendationCard key={key} data={data} index={key} />
                    ))
                }
            </div>
        </section>
    )
}

export default Recommendations