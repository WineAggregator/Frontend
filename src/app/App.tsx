import { RouterProvider } from 'react-router-dom';
import {Wrapper} from '../components/Wrapper';
import  router  from '../router/router';

const App = () => {
    return (
      <RouterProvider router={router}/>
    );
};

export default App;