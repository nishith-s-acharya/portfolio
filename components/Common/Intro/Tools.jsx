import Badge from '../Badge';
import { TECH_STACK } from '../../../constants/constants';
const Tools = () => {
  return (
    <div className='flex flex-col space-y-1'>
      <div className='flex flex-col gap-y-3'>
        <span className='text-LightGray text-xs font-bold uppercase tracking-wider'>Tools</span>
        <div className='flex flex-wrap gap-2'>
          {TECH_STACK.map((item, index) => (
            <Badge key={index} title={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
