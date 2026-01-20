import LinearBar from './LinearBar';
import { SKILLS } from '../../../constants/constants';
const Skills = () => {
  return (
    <div className='flex flex-col space-y-1'>
      <div className='flex flex-col gap-y-3'>
        <span className='text-LightGray text-xs font-bold uppercase tracking-wider'>Domain Focus</span>
        <div className='flex flex-wrap gap-2'>
          {SKILLS.map((skill, index) => {
            return (
              <div key={index} className="px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-white/5 text-sm text-OffWhite font-medium shadow-sm">
                {skill.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
