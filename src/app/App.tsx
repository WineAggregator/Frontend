import { RouterProvider, useSearchParams } from 'react-router-dom';
import {Wrapper} from '../components/Wrapper';
import { router, unauthorizedRouter }  from '../router/router';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '..';

const App = observer(() => {
    const store = useContext(AuthContext);
    const [currentRouter, setCurrentRouter] = useState(store.isAuth ? router : unauthorizedRouter);

    useEffect(() => {
      setCurrentRouter(store.isAuth ? router : unauthorizedRouter)
    }, [store.isAuth])
    return (
      <RouterProvider router={currentRouter}/>
    );
})

export default App;