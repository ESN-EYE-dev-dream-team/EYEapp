import React, { useEffect, useState } from 'react';
import {
    IonBackButton,
    IonButtons,
    IonHeader,
    IonPage,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
} from '@ionic/react';
import { getEventsDetails } from '../EventPageAPI';
import moment from 'moment';

const createParsedDate = (dateString: any): string => {
    if (!dateString) return '';
    const parsedDate = moment(dateString);
    return parsedDate.format('dddd, MMMM Do YYYY, h:mm a');
};

const EventDetailPage: React.FC = ({ match }: any) => {
    const [eventData, setEventData] = useState({
        description: '',
        cover: {
            source: '',
        },
        start_time: '',
        end_time: '',
        name: '',
        id: '',
        place: {
            name: '',
        },
    });

    const { description, cover, start_time, end_time, name, place = { name: '-' } } = eventData;
    const formattedDesciption = description.split('\n').map((item, key) => {
        return (
            <span key={key}>
                {item}
                <br />
            </span>
        );
    });

    useEffect(() => {
        getEventsDetails(match.params.id).then(newEventData => {
            setEventData(newEventData);
        });
    }, [match.params.id]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/tab1" />
                    </IonButtons>
                    <IonTitle>Event detail</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <img src={cover.source} alt="" />
                        <IonCardTitle> {name} </IonCardTitle>
                        <IonCardSubtitle>Start: {createParsedDate(start_time)}</IonCardSubtitle>
                        <IonCardSubtitle>End: {createParsedDate(end_time)}</IonCardSubtitle>
                        <IonCardSubtitle>Place: {place.name}</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>{formattedDesciption}</IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default EventDetailPage;
