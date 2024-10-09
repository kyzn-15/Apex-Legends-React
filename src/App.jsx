// src/App.jsx
import './App.css';
import './index.css';
import './blogs.css';
import { GlobalContext } from './context';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  const user = {
    username: 'kevin',
  };

  return (
    <>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
