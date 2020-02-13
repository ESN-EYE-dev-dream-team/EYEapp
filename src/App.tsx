import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { list, alarm, people, document } from 'ionicons/icons';
import EventsListPage from './pages/eventsListPage/EventsListPage';
import OfficeHoursTab from './pages/officeHoursTab/OfficeHoursTab';
import ESNMembersTab from './pages/ESNMembersTab/ESNMembersTab';
import EventDetailPage from './pages/eventsListPage/eventDetailPage/EventDetailPage';
import PracticalGuideTab from './pages/practicalGuideTab/PracticalGuideTab';

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

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/eventdetail/:id" component={EventDetailPage} exact={true} />
                    <Route path="/eventslist" component={EventsListPage} exact={true} />
                    <Route path="/officehours" component={OfficeHoursTab} exact={true} />
                    <Route path="/esnmembers" component={ESNMembersTab} exact={true} />
                    <Route path="/practicalGuide" component={PracticalGuideTab} exact={true} />
                    <Route path="/" render={(): JSX.Element => <Redirect to="/eventslist" />} exact={true} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="eventsist" href="/eventsList">
                        <IonIcon icon={list} />
                        <IonLabel>Event list</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="officehours" href="/officehours">
                        <IonIcon icon={alarm} />
                        <IonLabel>Office Hours</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="esnmembers" href="/esnmembers">
                        <IonIcon icon={people} />
                        <IonLabel>ESN members</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="practicalGuide" href="/practicalGuide">
                        <IonIcon icon={document} />
                        <IonLabel>Practical Guide</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
