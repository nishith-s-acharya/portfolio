
import { AiFillCopyrightCircle } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { CONTACTS } from '../constants/constants'

const Footer = () => {
    return (
        <footer className="mt-20 z-10 relative bg-DeepNightBlack border-t border-white/5 backdrop-blur-sm">
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
                </div>
            </div>
        </footer>
    )
}

export default Footer