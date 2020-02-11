import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import EventList from './eventList/EventList';

import './EventsListPage.css';

const EventsListPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Events list</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <EventList />
            </IonContent>
        </IonPage>
    );
};

export default EventsListPage;
