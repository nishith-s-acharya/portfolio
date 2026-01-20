
import ReviewCard from "./ReviewCard"
import axios from "axios";
import { useQuery } from "react-query";
import { motion } from "framer-motion";

const ClientReviews = () => {

    const { isLoading, error, data } = useQuery('review', () =>
        axios.get('api/review')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <section className="py-24 px-4 md:px-8 bg-Surface/50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-OffWhite">
                            Client Reviews
                        </h2>
                        <div className="w-20 h-1 bg-RoyalBlue rounded-full" />
                        <p className="text-LightGray max-w-lg text-lg">
                            Feedback from clients around the world.
                        </p>
                    </motion.div>
                </div>

                <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar snap-x snap-mandatory">
                    {
                        isLoading ?
                            [1, 2, 3, 4, 5].map((_, i) => (
                                <div key={i} className="bento-card w-80 md:w-96 h-64 flex-shrink-0 animate-pulse bg-white/5" />
                            ))
                            :
                            data?.map((data, key) => (
                                <ReviewCard key={key} data={data} index={key} />
                            ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ClientReviews