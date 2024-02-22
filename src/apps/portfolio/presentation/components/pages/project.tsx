import ProjectsCard from '../cards/projects.card';
import { projectsMock } from '../../../data/mock/portfolio';

export const Project = () => {
  return (
    <div className="w-full pt-32 pb-10 px-4 lg:px-20">
      <ProjectsCard data={projectsMock} />
    </div>
  );
};
