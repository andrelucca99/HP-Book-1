/* eslint-disable max-len */
import { createBrowserRouter } from 'react-router-dom';
import Capa from '../pages/Capa';
import Autora from '../pages/Autora';
import Capitulo1 from '../pages/capitulos/Capitulo1';
import Capitulo2 from '../pages/capitulos/capitulo2';
import Capitulo3 from '../pages/capitulos/capitulo3';

import { Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page10, Page11, Page12, Page13 } from '../pages/capitulos/Capitulo1/pages';
import { Page14, Page15, Page16, Page17, Page18, Page19, Page20, Page21, Page22 } from '../pages/capitulos/capitulo2/pages';
import { Page24, Page25, Page26, Page27, Page28, Page29, Page30, Page31, Page32, Page33 } from '../pages/capitulos/capitulo3/pages';

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
      {
        path: 'page13',
        element: <Page13 />,
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
      {
        path: 'page22',
        element: <Page22 />,
      },
    ],
  },
  {
    path: 'cap3',
    children: [
      {
        path: '',
        element: <Capitulo3 />,
      },
      {
        path: 'page24',
        element: <Page24 />,
      },
      {
        path: 'page25',
        element: <Page25 />,
      },
      {
        path: 'page26',
        element: <Page26 />,
      },
      {
        path: 'page27',
        element: <Page27 />,
      },
      {
        path: 'page28',
        element: <Page28 />,
      },
      {
        path: 'page29',
        element: <Page29 />,
      },
      {
        path: 'page30',
        element: <Page30 />,
      },
      {
        path: 'page31',
        element: <Page31 />,
      },
      {
        path: 'page32',
        element: <Page32 />,
      },
      {
        path: 'page33',
        element: <Page33 />,
      },
    ],
  },
]);
