import React, { useState, useEffect } from 'react';
import { getAllEvents } from '../EventPageAPI';
import { IonItem, IonItemGroup, IonList, IonText } from '@ionic/react';
import moment from 'moment';

const createParsedDate = (dateString: any): string => {
    if (!dateString) return '';
    const parsedDate = moment(dateString);
    return parsedDate.format('dddd, MMMM Do YYYY, h:mm a');
};

//todo desctructure props
const EventItem = ({ eventData }: any): JSX.Element => (
    <IonItem className="event-list-item event-item-box" routerLink={`/eventDetail/${eventData.id}`}>
        <img alt="Event" className="event-thumbnail" src={eventData.cover.source} />
        <p>
            <strong>{eventData.name}</strong>
            <br /> {createParsedDate(eventData.start_time)}
        </p>
    </IonItem>
    //TODO: Delete it after tests
    // <IonItem className="event-list-item event-item-box">
    //     <img alt="Event" className="event-thumbnail" src="assets/beer_pong.jpg" />
    //     <p>
    //         <strong>
    //             Beer pong with ESN-EYE
    //         </strong>
    //         <br /> Monday 17:00
    //     </p>
    // </IonItem>
);

interface Event {
    id: any;
}

function EventList() {
    const [eventList, setEventList] = useState<Event[]>([]);
    //TODO: filter by date
    const todayEvents = eventList.map(event => <EventItem key={event.id} eventData={event} />);
    const futureEvents = eventList.map(event => <EventItem key={event.id} eventData={event} />);

    useEffect(() => {
        getAllEvents().then(({ data }) => {
            if (data) setEventList(data);
        });
    }, []);

    if (!eventList || eventList === []) return <IonText> No events </IonText>;

    return (
        <IonList lines="none">
            <IonItemGroup>
                <h2 className="event-group-label ion-text-center">Today</h2>
                {todayEvents}
            </IonItemGroup>
            <IonItemGroup>
                <h2 className="event-group-label ion-text-center">Coming soon</h2>
                {futureEvents}
            </IonItemGroup>
        </IonList>
    );
}

export default EventList;
