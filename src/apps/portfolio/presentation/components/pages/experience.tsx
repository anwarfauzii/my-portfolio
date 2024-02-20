import ExperienceCard from '../cards/experience.card';
import { experienceMock } from '../../../data/mock/portfolio';

export const Experience = () => {
  return (
    <div className="w-full h-full pt-32 px-20">
      <ExperienceCard data={experienceMock} />
    </div>
  );
};
