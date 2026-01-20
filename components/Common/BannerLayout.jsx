
const BannerLayout = ({ children }) => {
    return (
        <div className="relative w-full min-h-screen z-10">
            <div className="relative z-20 w-full h-full">
                {children}
            </div>
        </div>
    )
}

export default BannerLayout