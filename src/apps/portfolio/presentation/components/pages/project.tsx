import ProjectsCard from '../cards/projects.card';
import { projectsMock } from '../../../data/mock/portfolio';

export const Project =() =>{
  return (
        <div className="w-full h-full pt-32 px-20">
          <ProjectsCard data={projectsMock} />
        </div>
      );
}