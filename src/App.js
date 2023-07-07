import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'countryDetails',
        element: <CountryDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
