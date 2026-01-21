
import { AiFillCopyrightCircle } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className="mt-20 z-10 relative bg-Surface/30 border-t border-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-LightGray">

                    <div className='flex items-center gap-2 font-medium'>
                        <AiFillCopyrightCircle className="text-lg" />
                        <span>{new Date().getFullYear()} <span className="text-OffWhite">Bronish</span>. All Rights Reserved.</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span>Made with</span>
                        <span className="text-red-500 animate-pulse">❤️</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="mailto:nishith.s.acharya@gmail.com" className="flex items-center gap-2 hover:text-RoyalBlue transition-colors group">
                            <MdMail className="text-lg group-hover:scale-110 transition-transform" />
                            <span className="hidden md:block">iosamajavaid@gmail.com</span>
                        </a>
                        <a
                            href='https://www.fiverr.com/codeworthy'
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-RoyalBlue transition-colors"
                        >
                            Fiverr
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer