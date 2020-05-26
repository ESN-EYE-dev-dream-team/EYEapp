import React, { useState, useEffect } from 'react';
import { getAllEvents } from '../EventPageAPI';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonList, IonText } from '@ionic/react';

import { get } from 'lodash';
import moment from 'moment';

const createParsedDate = (dateString: any): string => {
    if (!dateString) return '';
    const parsedDate = moment(dateString);
    return parsedDate.format('dddd, MMMM Do YYYY, h:mm a');
};

//todo desctructure props
const EventItem = ({ eventData }: any): JSX.Element => (
    <IonItem routerLink={`/eventDetail/${eventData.id}`}>
        <IonCard className="welcome-card">
            <img src={eventData.cover.source} alt="" />
            <IonCardHeader>
                <IonCardTitle>{eventData.name}</IonCardTitle>
                <IonCardSubtitle>
                    Place: {get(eventData, 'place.name', '-')} @ {createParsedDate(eventData.start_time)}
                </IonCardSubtitle>
            </IonCardHeader>
        </IonCard>
    </IonItem>
);

interface Event {
    id: any;
}

function EventList() {
    const [eventList, setEventList] = useState<Event[]>([]);

    useEffect(() => {
        getAllEvents().then(({ data }) => {
            if (data) setEventList(data);
        });
    }, []);

    if (!eventList || eventList === []) return <IonText> No events </IonText>;

    return (
        <IonList>
            {eventList.map(event => (
                <EventItem key={event.id} eventData={event} />
            ))}
        </IonList>
    );
}

export default EventList;
