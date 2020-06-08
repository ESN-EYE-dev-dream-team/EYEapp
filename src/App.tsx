import React, { useEffect, useState } from 'react';
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

import iconCalendarFull from './assets/tabs/icon-calendar-full.svg';
import iconClockFull from './assets/tabs/icon-clock-full.svg';
import iconPersonFull from './assets/tabs/icon-person-full.svg';
import iconDocumentFull from './assets/tabs/icon-document-full.svg';

import iconCalendarEmpty from './assets/tabs/icon-calendar-empty.svg';
import iconClockEmpty from './assets/tabs/icon-clock-empty.svg';
import iconPersonEmpty from './assets/tabs/icon-person-empty.svg';
import iconDocumentEmpty from './assets/tabs/icon-document-empty.svg';

const App: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<String>('');

    return (
        <IonApp>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route path="/eventdetail/:id" component={EventDetailPage} exact={true} />
                        <Route path="/eventsList" component={EventsListPage} exact={true} />
                        <Route path="/officeHours" component={OfficeHoursTab} exact={true} />
                        <Route path="/esnMembers" component={ESNMembersTab} exact={true} />
                        <Route path="/practicalGuide" component={PracticalGuideTab} exact={true} />
                        <Route path="/" render={(): JSX.Element => <Redirect to="/eventslist" />} exact={true} />
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="eventsList" href="/eventsList" onClick={() => setSelectedTab('eventsList')}>
                            <IonIcon src={selectedTab === 'eventsList' ? iconCalendarEmpty : iconCalendarFull} />
                            <IonLabel>Events</IonLabel>
                        </IonTabButton>
                        <IonTabButton
                            tab="officeHours"
                            href="/officeHours"
                            onClick={() => setSelectedTab('officeHours')}
                        >
                            <IonIcon src={selectedTab === 'officeHours' ? iconClockEmpty : iconClockFull} />
                            <IonLabel>Office Hours</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="esnMembers" href="/esnMembers" onClick={() => setSelectedTab('esnMembers')}>
                            <IonIcon src={selectedTab === 'esnMembers' ? iconPersonEmpty : iconPersonFull} />
                            <IonLabel>ESN Members</IonLabel>
                        </IonTabButton>
                        <IonTabButton
                            tab="practicalGuide"
                            href="/practicalGuide"
                            onClick={() => setSelectedTab('practicalGuide')}
                        >
                            <IonIcon src={selectedTab === 'practicalGuide' ? iconDocumentEmpty : iconDocumentFull} />

                            <IonLabel>Practical Guide</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonApp>
    );
};

export default App;
