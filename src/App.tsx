import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { happy, sad, pulse } from 'ionicons/icons';
import GoodMemories from './pages/GoodMemories';
import BadMemories from './pages/BadMemories';
import NewMemories from './pages/NewMemories';

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
import './style/variables.css';
import './style/theme.scss';
//main style
import './style/gloabal.scss';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/good-memories">
            <GoodMemories />
          </Route>
          <Route  path="/new-memories">
            <NewMemories />
          </Route>
          <Route exact path="/bad-memories">
            <BadMemories />
          </Route>
          <Route exact path="/">
            <Redirect to="/good-memories" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
      
          <IonTabButton tab="tab2" href="/good-memories">
            <IonIcon aria-hidden="true" icon={happy} />
            <IonLabel>Good Memories</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/bad-memories">
            <IonIcon aria-hidden="true" icon={sad} />
            <IonLabel>Bad Memories</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
