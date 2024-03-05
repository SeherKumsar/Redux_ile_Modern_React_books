import { createContext, useState } from 'react';

const BooksContext = createContext();

function Provider({ children }) {

  return (
    <BooksContext.Provider value={{}}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider};
export default BooksContext;

// import { Provider } from '/./a.sdf'; // only provider
// import BooksContext  from '/./a.sdf'; // only context 