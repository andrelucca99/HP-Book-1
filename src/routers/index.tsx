/* eslint-disable max-lines */
/* eslint-disable max-len */
import { createBrowserRouter } from 'react-router-dom';
import Capa from '../pages/Capa';
import Autora from '../pages/Autora';

import { Capitulo1, Capitulo2, Capitulo3, Capitulo4, Capitulo5, Capitulo6, Capitulo7, Capitulo8, Capitulo9, Capitulo10, Capitulo11, Capitulo12, Capitulo13, Capitulo14, Capitulo15, Capitulo16, Capitulo17 } from '../pages/capitulos';
import { Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page10, Page11, Page12, Page13 } from '../pages/capitulos/Capitulo1/pages';
import { Page14, Page15, Page16, Page17, Page18, Page19, Page20, Page21, Page22 } from '../pages/capitulos/capitulo2/pages';
import { Page24, Page25, Page26, Page27, Page28, Page29, Page30, Page31, Page32, Page33 } from '../pages/capitulos/capitulo3/pages';
import { Page35, Page36, Page37, Page38, Page39, Page40, Page41, Page42, Page43, Page44 } from '../pages/capitulos/capitulo4/pages';

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
  {
    path: 'cap4',
    children: [
      {
        path: '',
        element: <Capitulo4 />,
      },
      {
        path: 'page35',
        element: <Page35 />,
      },
      {
        path: 'page36',
        element: <Page36 />,
      },
      {
        path: 'page37',
        element: <Page37 />,
      },
      {
        path: 'page38',
        element: <Page38 />,
      },
      {
        path: 'page39',
        element: <Page39 />,
      },
      {
        path: 'page40',
        element: <Page40 />,
      },
      {
        path: 'page41',
        element: <Page41 />,
      },
      {
        path: 'page42',
        element: <Page42 />,
      },
      {
        path: 'page43',
        element: <Page43 />,
      },
      {
        path: 'page44',
        element: <Page44 />,
      },
    ],
  },
  {
    path: 'cap5',
    children: [
      {
        path: '',
        element: <Capitulo5 />,
      },
    ],
  },
  {
    path: 'cap6',
    children: [
      {
        path: '',
        element: <Capitulo6 />,
      },
    ],
  },
  {
    path: 'cap7',
    children: [
      {
        path: '',
        element: <Capitulo7 />,
      },
    ],
  },
  {
    path: 'cap8',
    children: [
      {
        path: '',
        element: <Capitulo8 />,
      },
    ],
  },
  {
    path: 'cap9',
    children: [
      {
        path: '',
        element: <Capitulo9 />,
      },
    ],
  },
  {
    path: 'cap10',
    children: [
      {
        path: '',
        element: <Capitulo10 />,
      },
    ],
  },
  {
    path: 'cap11',
    children: [
      {
        path: '',
        element: <Capitulo11 />,
      },
    ],
  },
  {
    path: 'cap12',
    children: [
      {
        path: '',
        element: <Capitulo12 />,
      },
    ],
  },
  {
    path: 'cap13',
    children: [
      {
        path: '',
        element: <Capitulo13 />,
      },
    ],
  },
  {
    path: 'cap14',
    children: [
      {
        path: '',
        element: <Capitulo14 />,
      },
    ],
  },
  {
    path: 'cap15',
    children: [
      {
        path: '',
        element: <Capitulo15 />,
      },
    ],
  },
  {
    path: 'cap16',
    children: [
      {
        path: '',
        element: <Capitulo16 />,
      },
    ],
  },
  {
    path: 'cap17',
    children: [
      {
        path: '',
        element: <Capitulo17 />,
      },
    ],
  },
]);
