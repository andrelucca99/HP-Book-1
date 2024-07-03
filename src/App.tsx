import { RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import { router } from './routers';
import PagesContext from './context/PagesContext';
import pages from './utils/paginas.json';

function App() {
  const [pageObjects, _setPageObjects] = useState(pages);
  return (
    <PagesContext.Provider value={ { paginas: pageObjects } }>
      <RouterProvider router={ router } />
    </PagesContext.Provider>
  );
}

export default App;
