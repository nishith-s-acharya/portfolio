

import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { HiMail, HiUser } from 'react-icons/hi'
import { BsChatTextFill } from 'react-icons/bs'
import Fiverr_Icon from '../components/Fiverr_Icon';
import Footer from '../components/Footer';
import { Modal } from 'antd';
import { CONTACTS, SOCIAL_LINKS, DETAILS } from '../constants/constants';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <BannerLayout>
            <div className=" px-4 py-2">
                <div className="my-6 text-OffWhite flex flex-col gap-y-5">
                    <h1 className='text-4xl font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="bento-card w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base font-semibold'>Country:</span>
                                <span className='text-LightGray md:text-sm'>{DETAILS.Residence}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base font-semibold'>City:</span>
                                <span className='text-LightGray md:text-sm'>{DETAILS.City}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base font-semibold'>Company:</span>
                                <span className='text-LightGray md:text-sm'>Confidential</span>
                            </div>
                        </div>
                        <div className="bento-card w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base font-semibold'>Email:</span>
                                <span className='text-LightGray text-sm'>{CONTACTS.EMAIL}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base font-semibold'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>nishith</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base font-semibold'>Phone:</span>
                                <span className='text-LightGray text-sm'>{CONTACTS.PHONE}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-20 w-full bento-card flex gap-x-8 sm:gap-x-16 items-center justify-center text-OffWhite">
                    <a className='text-3xl hover:scale-125 hover:text-RoyalBlue ease-in-out duration-300' href={`mailto:${CONTACTS.EMAIL}`} target='_blank' rel="noreferrer"><HiMail /></a>
                    <a className='text-3xl hover:scale-125 hover:text-RoyalBlue ease-in-out duration-300' href={SOCIAL_LINKS.GITHUB} target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='text-3xl hover:scale-125 hover:text-RoyalBlue ease-in-out duration-300' href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a className='hover:scale-125 ease-in-out duration-300 hidden sm:block' href="https://www.fiverr.com/" target='_blank' rel="noreferrer"><Fiverr_Icon /></a>
                    <a className='text-3xl hover:scale-125 hover:text-RoyalBlue ease-in-out duration-300 mt-1' href="#" target='_blank' rel="noreferrer"><SiUpwork /></a>
                </div>


                <div className="my-12 w-full h-auto text-OffWhite">
                    <h1 className='text-4xl font-bold mb-8'>Get In Touch</h1>
                    <div className="py-8 px-8 bg-Surface rounded-2xl border border-white/5 text-sm">
                        <div>
                            <div className="flex flex-col w-full">
                                <div className="userIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none text-LightGray">
                                        <HiUser />
                                    </div>
                                    <input type="text" className="input-field pl-10" placeholder="Name" />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="mailIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none text-LightGray">
                                        <HiMail />
                                    </div>
                                    <input type="text" className="input-field pl-10" placeholder="Email" />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="textIcon relative mb-6">
                                    <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none text-LightGray">
                                        <BsChatTextFill />
                                    </div>
                                    <textarea rows={6} className="input-field pl-10 resize-none" placeholder="Message" />
                                </div>
                            </div>

                            <div className="my-4">
                                <button onClick={() => setIsOpen(true)} className="button-primary w-full md:w-auto"> SEND MESSAGE </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* success modal */}
            <Modal
                className='backdrop-blur-3xl drop-shadow-2xl'
                centered
                open={isOpen}
                footer={null}
                closable={false}
                onOk={() => setIsOpen(false)}
                onCancel={() => setIsOpen(false)}
                bodyStyle={{ padding: '24px', background: '#121212', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
            >
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-RoyalBlue font-bold text-2xl mb-4'>In Progress</h1>
                    <a className='underline text-OffWhite hover:text-RoyalBlue transition-colors' target='_blank' href='https://github.com/nishiths/portfolio'>
                        Be the one to integrate this!
                    </a>
                </div>
            </Modal>
            <Footer />
        </BannerLayout>

    )
}

export default Contact