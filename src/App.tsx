import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { About, Home, Experience } from './apps/portfolio/components/pages';
import RootLayout from './core/layout/RootLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<About />} />
        <Route path="experience" element={<Experience />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;