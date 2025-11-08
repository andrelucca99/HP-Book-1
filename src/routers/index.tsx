import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { lazy, Suspense, createElement } from 'react';
import NotFound from '../pages/NotFound';
import LoadingScreen from '../components/LoadingScreen';

// Rotas principais
const Capa = lazy(() => import('../pages/Capa'));
const Autora = lazy(() => import('../pages/Autora'));

// Wrapper de carregamento
const withSuspense = (element: React.ReactNode) => (
  <Suspense fallback={<LoadingScreen />}>{element}</Suspense>
);

function generateChapterRoutes(): RouteObject[] {
  // Importa todos os capítulos e páginas automaticamente
  const modules = import.meta.glob('../pages/capitulos/**/*.{tsx,ts}');

  const chaptersMap = new Map<
    number,
    {
      main?: React.LazyExoticComponent<React.FC>;
      pages: { index: number; component: React.LazyExoticComponent<React.FC> }[];
    }
  >();

  for (const path in modules) {
    // capitulo1/index.tsx
    const matchMain = path.match(/capitulo(\d+)\/index\.(tsx|ts)$/);
    // capitulo1/pages/page1.tsx
    const matchPage = path.match(/capitulo(\d+)\/pages\/page(\d+)\.(tsx|ts)$/);

    if (matchMain) {
      const chapterId = Number(matchMain[1]);
      const component = lazy(modules[path] as any);
      if (!chaptersMap.has(chapterId)) chaptersMap.set(chapterId, { pages: [] });
      chaptersMap.get(chapterId)!.main = component;
    }

    if (matchPage) {
      const chapterId = Number(matchPage[1]);
      const pageId = Number(matchPage[2]);
      const component = lazy(modules[path] as any);
      if (!chaptersMap.has(chapterId)) chaptersMap.set(chapterId, { pages: [] });
      chaptersMap.get(chapterId)!.pages.push({ index: pageId, component });
    }
  }

  // Cria as rotas dinâmicas de capítulos e páginas
  return Array.from(chaptersMap.entries()).map(([chapterId, { main, pages }]) => ({
    path: `capitulo/${chapterId}`,
    children: [
      main
        ? { path: '', element: withSuspense(createElement(main)) }
        : { path: '', element: <NotFound /> },
      ...pages
        .sort((a, b) => a.index - b.index)
        .map(({ index, component }) => ({
          path: `pagina/${index}`,
          element: withSuspense(createElement(component)),
        })),
    ],
  }));
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: withSuspense(<Capa />),
    errorElement: <NotFound />,
  },
  {
    path: '/autora',
    element: withSuspense(<Autora />),
  },
  ...generateChapterRoutes(),
  {
    path: '*',
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
