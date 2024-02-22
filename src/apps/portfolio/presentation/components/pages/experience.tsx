import ExperienceCard from '../cards/experience.card';
import { experienceMock } from '../../../data/mock/portfolio';

export const Experience = () => {
  return (
    <div className="w-full pt-32 pb-10 px-2 lg:px-20">
      <ExperienceCard data={experienceMock} />
    </div>
  );
};
