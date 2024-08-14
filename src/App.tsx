import React from 'react';
import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';

// Definir un tipo para los componentes de ruta
type RouteComponent = React.ComponentType<any>;

// Definir una interfaz para los objetos de ruta dinámica
interface DynamicRoute {
  path: string;
  component: RouteComponent;
}

const LazyAbout = React.lazy(()=> import('./pages/About'))

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;