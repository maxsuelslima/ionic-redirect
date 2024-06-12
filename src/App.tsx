import React, { useContext, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import GlobalContext from './context/global';
import Login from './pages/Login';
import Page2 from './pages/Page2';
import Page1 from './pages/page1';

setupIonicReact();

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  async function signIn() {
    await new Promise((resolve) => {
      setTimeout(() => {
        setIsAuth(true);
        resolve(true);
      }, 300);
    })
    return 
    
  }
  async function signOut() {
    setIsAuth(false);
    return 
  }

  return (
      <GlobalContext.Provider value={{
        isAuth,
        signIn,
        signOut,
          }}>
    <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
            <Route exact path={'/login'} >
              <Login />
            </Route>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/1" component={Page1} />
            <PrivateRoute exact path="/2" component={Page2} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
    </GlobalContext.Provider>
  )
}
const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { isAuth } = useContext(GlobalContext);

  return <Route {...rest} render={(props) => {
    return isAuth ? <Component {...props} /> : <Redirect to="/login" />
  }} />
}
export default App;
