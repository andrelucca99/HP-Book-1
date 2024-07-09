import { createContext } from 'react';

type PageContent = {
  left: string[];
  right: string[];
  imagem?: string;
};

type PagesContextType = {
  paginas: {
    [pageKey: string]: PageContent;
  };
};

const PagesContext = createContext({} as PagesContextType);

export default PagesContext;
