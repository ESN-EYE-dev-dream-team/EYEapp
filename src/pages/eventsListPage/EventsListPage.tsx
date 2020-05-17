import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import React from 'react';
import EventList from './eventList/EventList';

import './EventsListPage.css';

const EventsListPage: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size="12">
                            <h1 className="ion-text-center">Events</h1>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <EventList />
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default EventsListPage;
