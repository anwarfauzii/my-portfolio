import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { About, Home, Experience, Project } from './apps/portfolio/presentation/components/pages';
import RootLayout from './core/layout/RootLayout';
import Page404 from './apps/404/404';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="project" element={<Project />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
