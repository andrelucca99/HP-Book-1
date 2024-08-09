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
import { Page45, Page46, Page47, Page48, Page49, Page50, Page51, Page52, Page53, Page54, Page55, Page56, Page57, Page58, Page59, Page60, Page61, Page62 } from '../pages/capitulos/capitulo5/pages';
import { Page63, Page64, Page65, Page66, Page67, Page68, Page69, Page70, Page71, Page72, Page73, Page74, Page75, Page76, Page77, Page78, Page79 } from '../pages/capitulos/capitulo6/pages';
import { Page80, Page81, Page82, Page83, Page84, Page85, Page86, Page87, Page88, Page89, Page90, Page91 } from '../pages/capitulos/capitulo7/pages';
import { Page92, Page93, Page94, Page95, Page96, Page97, Page98, Page99 } from '../pages/capitulos/capitulo8/pages';
import { Page100, Page101, Page102, Page103, Page104, Page105, Page106, Page107, Page108, Page109, Page110, Page111, Page112 } from '../pages/capitulos/capitulo9/pages';

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
    path: 'capitulo/1',
    children: [
      {
        path: '',
        element: <Capitulo1 />,
      },
      {
        path: 'pagina//1',
        element: <Page1 />,
      },
      {
        path: 'pagina/2',
        element: <Page2 />,
      },
      {
        path: 'pagina/3',
        element: <Page3 />,
      },
      {
        path: 'pagina/4',
        element: <Page4 />,
      },
      {
        path: 'pagina/5',
        element: <Page5 />,
      },
      {
        path: 'pagina/6',
        element: <Page6 />,
      },
      {
        path: 'pagina/7',
        element: <Page7 />,
      },
      {
        path: 'pagina/8',
        element: <Page8 />,
      },
      {
        path: 'pagina/9',
        element: <Page9 />,
      },
      {
        path: 'pagina/10',
        element: <Page10 />,
      },
      {
        path: 'pagina/11',
        element: <Page11 />,
      },
      {
        path: 'pagina/12',
        element: <Page12 />,
      },
      {
        path: 'pagina/13',
        element: <Page13 />,
      },
    ],
  },
  {
    path: 'capitulo/2',
    children: [
      {
        path: '',
        element: <Capitulo2 />,
      },
      {
        path: 'pagina/14',
        element: <Page14 />,
      },
      {
        path: 'pagina/15',
        element: <Page15 />,
      },
      {
        path: 'pagina/16',
        element: <Page16 />,
      },
      {
        path: 'pagina/17',
        element: <Page17 />,
      },
      {
        path: 'pagina/18',
        element: <Page18 />,
      },
      {
        path: 'pagina/19',
        element: <Page19 />,
      },
      {
        path: 'pagina/20',
        element: <Page20 />,
      },
      {
        path: 'pagina/21',
        element: <Page21 />,
      },
      {
        path: 'pagina/22',
        element: <Page22 />,
      },
    ],
  },
  {
    path: 'capitulo/3',
    children: [
      {
        path: '',
        element: <Capitulo3 />,
      },
      {
        path: 'pagina/24',
        element: <Page24 />,
      },
      {
        path: 'pagina/25',
        element: <Page25 />,
      },
      {
        path: 'pagina/26',
        element: <Page26 />,
      },
      {
        path: 'pagina/27',
        element: <Page27 />,
      },
      {
        path: 'pagina/28',
        element: <Page28 />,
      },
      {
        path: 'pagina/29',
        element: <Page29 />,
      },
      {
        path: 'pagina/30',
        element: <Page30 />,
      },
      {
        path: 'pagina/31',
        element: <Page31 />,
      },
      {
        path: 'pagina/32',
        element: <Page32 />,
      },
      {
        path: 'pagina/33',
        element: <Page33 />,
      },
    ],
  },
  {
    path: 'capitulo/4',
    children: [
      {
        path: '',
        element: <Capitulo4 />,
      },
      {
        path: 'pagina/35',
        element: <Page35 />,
      },
      {
        path: 'pagina/36',
        element: <Page36 />,
      },
      {
        path: 'pagina/37',
        element: <Page37 />,
      },
      {
        path: 'pagina/38',
        element: <Page38 />,
      },
      {
        path: 'pagina/39',
        element: <Page39 />,
      },
      {
        path: 'pagina/40',
        element: <Page40 />,
      },
      {
        path: 'pagina/41',
        element: <Page41 />,
      },
      {
        path: 'pagina/42',
        element: <Page42 />,
      },
      {
        path: 'pagina/43',
        element: <Page43 />,
      },
      {
        path: 'pagina/44',
        element: <Page44 />,
      },
    ],
  },
  {
    path: 'capitulo/5',
    children: [
      {
        path: '',
        element: <Capitulo5 />,
      },
      {
        path: 'pagina/45',
        element: <Page45 />,
      },
      {
        path: 'pagina/46',
        element: <Page46 />,
      },
      {
        path: 'pagina/47',
        element: <Page47 />,
      },
      {
        path: 'pagina/48',
        element: <Page48 />,
      },
      {
        path: 'pagina/49',
        element: <Page49 />,
      },
      {
        path: 'pagina/50',
        element: <Page50 />,
      },
      {
        path: 'pagina/51',
        element: <Page51 />,
      },
      {
        path: 'pagina/52',
        element: <Page52 />,
      },
      {
        path: 'pagina/53',
        element: <Page53 />,
      },
      {
        path: 'pagina/54',
        element: <Page54 />,
      },
      {
        path: 'pagina/55',
        element: <Page55 />,
      },
      {
        path: 'pagina/56',
        element: <Page56 />,
      },
      {
        path: 'pagina/57',
        element: <Page57 />,
      },
      {
        path: 'pagina/58',
        element: <Page58 />,
      },
      {
        path: 'pagina/59',
        element: <Page59 />,
      },
      {
        path: 'pagina/60',
        element: <Page60 />,
      },
      {
        path: 'pagina/61',
        element: <Page61 />,
      },
      {
        path: 'pagina/62',
        element: <Page62 />,
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
      {
        path: 'page63',
        element: <Page63 />,
      },
      {
        path: 'page64',
        element: <Page64 />,
      },
      {
        path: 'page65',
        element: <Page65 />,
      },
      {
        path: 'page66',
        element: <Page66 />,
      },
      {
        path: 'page67',
        element: <Page67 />,
      },
      {
        path: 'page68',
        element: <Page68 />,
      },
      {
        path: 'page69',
        element: <Page69 />,
      },
      {
        path: 'page70',
        element: <Page70 />,
      },
      {
        path: 'page71',
        element: <Page71 />,
      },
      {
        path: 'page72',
        element: <Page72 />,
      },
      {
        path: 'page73',
        element: <Page73 />,
      },
      {
        path: 'page74',
        element: <Page74 />,
      },
      {
        path: 'page75',
        element: <Page75 />,
      },
      {
        path: 'page76',
        element: <Page76 />,
      },
      {
        path: 'page77',
        element: <Page77 />,
      },
      {
        path: 'page78',
        element: <Page78 />,
      },
      {
        path: 'page79',
        element: <Page79 />,
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
      {
        path: 'page80',
        element: <Page80 />,
      },
      {
        path: 'page81',
        element: <Page81 />,
      },
      {
        path: 'page82',
        element: <Page82 />,
      },
      {
        path: 'page83',
        element: <Page83 />,
      },
      {
        path: 'page84',
        element: <Page84 />,
      },
      {
        path: 'page85',
        element: <Page85 />,
      },
      {
        path: 'page86',
        element: <Page86 />,
      },
      {
        path: 'page87',
        element: <Page87 />,
      },
      {
        path: 'page88',
        element: <Page88 />,
      },
      {
        path: 'page89',
        element: <Page89 />,
      },
      {
        path: 'page90',
        element: <Page90 />,
      },
      {
        path: 'page91',
        element: <Page91 />,
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
      {
        path: 'page92',
        element: <Page92 />,
      },
      {
        path: 'page93',
        element: <Page93 />,
      },
      {
        path: 'page94',
        element: <Page94 />,
      },
      {
        path: 'page95',
        element: <Page95 />,
      },
      {
        path: 'page96',
        element: <Page96 />,
      },
      {
        path: 'page97',
        element: <Page97 />,
      },
      {
        path: 'page98',
        element: <Page98 />,
      },
      {
        path: 'page99',
        element: <Page99 />,
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
      {
        path: 'page100',
        element: <Page100 />,
      },
      {
        path: 'page101',
        element: <Page101 />,
      },
      {
        path: 'page102',
        element: <Page102 />,
      },
      {
        path: 'page103',
        element: <Page103 />,
      },
      {
        path: 'page104',
        element: <Page104 />,
      },
      {
        path: 'page105',
        element: <Page105 />,
      },
      {
        path: 'page106',
        element: <Page106 />,
      },
      {
        path: 'page107',
        element: <Page107 />,
      },
      {
        path: 'page108',
        element: <Page108 />,
      },
      {
        path: 'page109',
        element: <Page109 />,
      },
      {
        path: 'page110',
        element: <Page110 />,
      },
      {
        path: 'page111',
        element: <Page111 />,
      },
      {
        path: 'page112',
        element: <Page112 />,
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
