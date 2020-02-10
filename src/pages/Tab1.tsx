import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import EventList from './eventPage/eventList/EventList';

import './Tab1.css';

const Tab1: React.FC = () => {
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

export default Tab1;
