
import ExpertiseCard from "./ExpertiseCard"
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";
import { motion } from "framer-motion";

const MyExpertise = () => {

    const { isLoading, error, data } = useQuery('expertise', () =>
        axios.get('api/expertise')
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
                        My Expertise
                    </h2>
                    <div className="w-20 h-1 bg-RoyalBlue rounded-full" />
                    <p className="text-LightGray max-w-lg text-lg">
                        A deep dive into my technical skills and the tools I use to build digital solutions.
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    isLoading ?
                        [1, 2, 3, 4, 5, 6].map((_, i) => (
                            <div key={i} className="bento-card min-h-[200px] flex flex-col justify-center animate-pulse">
                                <div className="h-6 w-1/2 bg-white/10 rounded mb-4"></div>
                                <div className="h-4 w-full bg-white/5 rounded mb-2"></div>
                                <div className="h-4 w-3/4 bg-white/5 rounded"></div>
                            </div>
                        ))
                        :
                        data?.map((data, key) => (
                            <ExpertiseCard key={key} data={data} index={key} />
                        ))
                }
            </div>
        </section>
    )
}

export default MyExpertise