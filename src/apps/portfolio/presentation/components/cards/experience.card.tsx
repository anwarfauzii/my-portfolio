import { Link } from 'react-router-dom';
import { IExperienceModel } from '../../../domail/model/portfolio.model';

const ExperienceCard = ({ data }: { data: IExperienceModel[] }) => {
  return (
    <div className='flex flex-col gap-y-6'>
      {data.map((item: IExperienceModel, idx: number) => (
        <li
          key={idx}
          className="relative grid grid-cols-1 gap-8 pl-10 before:absolute before:left-0 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:rounded-md before:bg-gray-100 before:ring-1 before:ring-gray-200 before:content-[''] pb-8 after:absolute after:bottom-6 after:left-[0.6875rem] after:top-10 after:w-0.5 after:bg-slate-300/50"
        >
          <div className="flex flex-col gap-y-2">
            <h2 className="text-base font-semibold text-white">{item.title}</h2>
            <span className="text-xs font-medium text-gray-400">{item.time}</span>
            <p className="line-clamp-2 max-w-4xl pt-4 text-sm text-gray-200">{item.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {item.image.map((o: string, idx: number) => (
              <img key={idx} src={o} className="w-full h-60 object-cover rounded-lg" alt={item.alt[idx]} />
            ))}
          </div>
          <Link to={`/experience/${item.url}`}>
            <div className="inline-block justify-center items-center bg-gradient-to-r from-orange-500 to-orange-400 px-3 py-1 rounded-lg border-2 border-white shadow-xl cursor-pointer hover:shadow-gray-700/35 hover:scale-105 transition-all">
              <span className="text-base font-bold text-white">Read more</span>
              <span className="sr-only">, {item.title}</span>
            </div>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default ExperienceCard;
