import React, { useEffect, useState } from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { getEventsDetails } from '../EventPageAPI';
import get from 'lodash/get';

const EventDetailPage: React.FC = ({ match }: any) => {
    const [eventData, setEventData] = useState({});

    useEffect(() => {
        getEventsDetails(match.params.id).then(newEventData => {
            setEventData(newEventData);
        });
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/tab1" />
                    </IonButtons>
                    <IonTitle>TEST</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <p>{get(eventData, 'name', '')}</p>
                ----------------------------------
                <p> eventDetails</p>
            </IonContent>
        </IonPage>
    );
};

export default EventDetailPage;
