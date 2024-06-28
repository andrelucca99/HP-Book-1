import { createBrowserRouter } from 'react-router-dom';
import Capa from '../pages/Capa';
import Autora from '../pages/Autora';
import Capitulo1 from '../pages/capitulos/Capitulo1';
import Page1 from '../pages/capitulos/Capitulo1/pages/page1';
import Page2 from '../pages/capitulos/Capitulo1/pages/page2';
import Page3 from '../pages/capitulos/Capitulo1/pages/page3';
import Page4 from '../pages/capitulos/Capitulo1/pages/page4';
import Page5 from '../pages/capitulos/Capitulo1/pages/page5';
import Page6 from '../pages/capitulos/Capitulo1/pages/page6';
import Page7 from '../pages/capitulos/Capitulo1/pages/page7';
import Page8 from '../pages/capitulos/Capitulo1/pages/page8';
import Page9 from '../pages/capitulos/Capitulo1/pages/page9';
import Page10 from '../pages/capitulos/Capitulo1/pages/page10';
import Page11 from '../pages/capitulos/Capitulo1/pages/page11';
import Page12 from '../pages/capitulos/Capitulo1/pages/page12';

import Capitulo2 from '../pages/capitulos/capitulo2';
import Page13 from '../pages/capitulos/capitulo2/pages/page13';
import Page14 from '../pages/capitulos/capitulo2/pages/page14';
import Page15 from '../pages/capitulos/capitulo2/pages/page15';
import Page16 from '../pages/capitulos/capitulo2/pages/page16';
import Page17 from '../pages/capitulos/capitulo2/pages/page17';
import Page18 from '../pages/capitulos/capitulo2/pages/page18';
import Page19 from '../pages/capitulos/capitulo2/pages/page19';
import Page20 from '../pages/capitulos/capitulo2/pages/page20';
import Page21 from '../pages/capitulos/capitulo2/pages/page21';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Capa />,
    ErrorBoundary: NotFound,
  },
  {
    path: 'autora',
    element: <Autora />,
  },
  {
    path: 'cap1',
    children: [
      {
        path: '',
        element: <Capitulo1 />,
      },
      {
        path: 'page1',
        element: <Page1 />,
      },
      {
        path: 'page2',
        element: <Page2 />,
      },
      {
        path: 'page3',
        element: <Page3 />,
      },
      {
        path: 'page4',
        element: <Page4 />,
      },
      {
        path: 'page5',
        element: <Page5 />,
      },
      {
        path: 'page6',
        element: <Page6 />,
      },
      {
        path: 'page7',
        element: <Page7 />,
      },
      {
        path: 'page8',
        element: <Page8 />,
      },
      {
        path: 'page9',
        element: <Page9 />,
      },
      {
        path: 'page10',
        element: <Page10 />,
      },
      {
        path: 'page11',
        element: <Page11 />,
      },
      {
        path: 'page12',
        element: <Page12 />,
      },
    ],
  },
  {
    path: 'cap2',
    children: [
      {
        path: '',
        element: <Capitulo2 />,
      },
      {
        path: 'page13',
        element: <Page13 />,
      },
      {
        path: 'page14',
        element: <Page14 />,
      },
      {
        path: 'page15',
        element: <Page15 />,
      },
      {
        path: 'page16',
        element: <Page16 />,
      },
      {
        path: 'page17',
        element: <Page17 />,
      },
      {
        path: 'page18',
        element: <Page18 />,
      },
      {
        path: 'page19',
        element: <Page19 />,
      },
      {
        path: 'page20',
        element: <Page20 />,
      },
      {
        path: 'page21',
        element: <Page21 />,
      },
    ],
  },
]);
