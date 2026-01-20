import Link from 'next/link';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Download from './Download';
import Tools from './Tools';
import Skills from './Skills';
import { NAME, DESIGNATION, SOCIAL_LINKS, DETAILS, CONTACTS } from '../../../constants/constants';

const Intro = () => {
  return (
    <div className='flex flex-col h-full bg-Surface border border-white/5 rounded-2xl overflow-hidden sticky top-4'>
      {/* Profile Header */}
      <div className='flex flex-col items-center justify-center p-8 bg-zinc-900/30'>
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-RoyalBlue/20 shadow-lg shadow-RoyalBlue/10 mb-4 transition-transform duration-300 hover:scale-105 p-2 bg-white/5">
          <img src="/images/profile.png" alt="Profile" className="w-full h-full object-cover rounded-full" />
        </div>
        <h2 className='text-2xl font-bold text-OffWhite mt-2 text-center'>{NAME}</h2>
        <span className='text-sm text-RoyalBlue font-medium mt-1 text-center'>{DESIGNATION}</span>
      </div>

      {/* Scrollable Content */}
      <div className='flex-1 overflow-y-auto overflow-x-hidden no-scrollbar px-6 py-4 space-y-6'>
        {/* About / Details - Compact Grid */}
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col gap-1 p-3 rounded-xl bg-white/5 border border-white/5'>
            <span className='text-xs text-LightGray uppercase tracking-wider font-semibold'>Location</span>
            <span className='text-sm text-OffWhite font-medium truncate'>{DETAILS.Residence}</span>
          </div>
          <div className='flex flex-col gap-1 p-3 rounded-xl bg-white/5 border border-white/5'>
            <span className='text-xs text-LightGray uppercase tracking-wider font-semibold'>City</span>
            <span className='text-sm text-OffWhite font-medium truncate'>{DETAILS.City}</span>
          </div>
          <div className='flex flex-col gap-1 p-3 rounded-xl bg-white/5 border border-white/5 col-span-2'>
            <div className="flex justify-between items-center">
              <span className='text-xs text-LightGray uppercase tracking-wider font-semibold'>Age</span>
              <span className='text-sm text-OffWhite font-medium'>{DETAILS.Age} Years Old</span>
            </div>
          </div>
        </div>

        {/* Skills & Tools */}
        <Skills />
        <Tools />

        {/* Contact Compact */}
        <div className='space-y-3 p-4 rounded-xl bg-zinc-900/40 border border-white/5'>
          <div className='flex items-center gap-3 text-sm group'>
            <div className="p-2 rounded-lg bg-RoyalBlue/10 text-RoyalBlue group-hover:bg-RoyalBlue group-hover:text-white transition-colors">
              <FaEnvelope />
            </div>
            <a href={`mailto:${CONTACTS.EMAIL}`} className='text-LightGray hover:text-OffWhite transition-colors truncate font-medium'>
              {CONTACTS.EMAIL}
            </a>
          </div>
        </div>

        <Download icon={<FaDownload />} />
      </div>

      {/* Footer Socials */}
      <div className='p-6 bg-Surface border-t border-white/5 flex items-center justify-center gap-6'>
        <Link href={SOCIAL_LINKS.GITHUB} target='_blank' rel='noreferrer' className='text-LightGray hover:text-OffWhite hover:scale-110 transition-all text-xl'>
          <FaGithub />
        </Link>
        <Link href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel='noreferrer' className='text-LightGray hover:text-OffWhite hover:scale-110 transition-all text-xl'>
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
