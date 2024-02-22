import { IExperienceModel } from '../../../domail/model/portfolio.model';

const ProjectsCard = ({ data }: { data: IExperienceModel[] }) => {
  const formatDescription = (description: string) => {
    return description.replace(/\n/g, '<br/>');
  };
  return (
    <div className="flex flex-col gap-y-6">
      {data.map((item: IExperienceModel, idx: number) => (
        <li
          key={idx}
          className="relative grid grid-cols-1 gap-8 pl-10 before:absolute before:left-0 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:rounded-md before:bg-gray-100 before:ring-1 before:ring-gray-200 before:content-[''] pb-8"
        >
          <div className="flex flex-col gap-y-2">
            <h2 className="text-base font-semibold text-white">{item.title}</h2>
            <span className="text-xs font-medium text-gray-400">Tools: {item.label}</span>
            <div className="w-full lg:flex justify-between items-center gap-x-4 pt-3">
              <div
                onClick={() => window.open(item.url, '_blank')}
                className="w-full h-72 relative rounded-lg overflow-hidden flex items-center justify-center group hover:shadow-xl border border-gray-400 cursor-pointer"
              >
                <img
                  src={item.image[0]}
                  className="w-full h-full object-cover rounded-lg group-hover:opacity-50 bg-black/60"
                  alt={item.alt[0]}
                />

                <div className="absolute pointer-events-none hidden group-hover:block transition-all group-hover:duration-700 ">
                  <span className="flex whitespace-nowrap gap-x-4 text-xl lg:text-base text-white font-extrabold lg:font-semibold">
                    Buka Website
                    <svg
                      stroke="currentColor"
                      className="w-5"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <p className="max-w-3xl pt-4 text-base text-gray-200 leading-7 line-clamp-[10]"dangerouslySetInnerHTML={{ __html: formatDescription(item.description) }}></p>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ProjectsCard;
