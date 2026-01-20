import { useQuery } from "react-query";
import axios from "axios";
import PortfolioCard from "../../Portfolio/PortfolioCard";
import { motion } from "framer-motion";

const HomePortfolio = () => {
    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('api/portfolio')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching portfolio:', error)))

    return (
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
            <div className="mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-4"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-OffWhite tracking-tight">
                        Selected Projects
                    </h2>
                    <div className="w-20 h-1 bg-RoyalBlue rounded-full" />
                    <p className="text-LightGray max-w-lg text-xl font-light">
                        A collection of projects showcasing accessibility, performance, and design.
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24">
                {isLoading ?
                    [1, 2, 3, 4].map((_, i) => (
                        <div key={i} className="bento-card h-80 animate-pulse" />
                    ))
                    :
                    data?.map((data, key) => (
                        <PortfolioCard key={key} data={data} />
                    ))
                }
            </div>
        </section>
    );
};

export default HomePortfolio;
