import React, { useState, useEffect } from 'react';
import { getAllEvents } from '../EventPageAPI';
import { IonItem, IonModal, IonItemGroup, IonList, IonText } from '@ionic/react';
import moment from 'moment';

import EventDetailPage from '../eventDetailPage/EventDetailPage';
import { SpawnSyncOptionsWithStringEncoding } from 'child_process';

const createParsedDate = (dateString: any): string => {
    if (!dateString) return '';
    const parsedDate = moment(dateString);
    return parsedDate.format('dddd, MMMM Do YYYY, h:mm a');
};

const mockEvents = [
    {
        cover: {
            offset_x: 50,
            offset_y: 50,
            source:
                'https://scontent.flcj1-1.fna.fbcdn.net/v/t1.0-9/s720x720/98807612_10157197298662045_106465646493040640_o.jpg?_nc_cat=108&_nc_sid=b386c4&_nc_ohc=WzngCfSvfUcAX8vc1jt&_nc_ht=scontent.flcj1-1.fna&_nc_tp=7&oh=5191d2b172d08bf8bf75c7aa85f93a8c&oe=5EF78431',
            id: '10157197298652045',
        },
        start_time: '2020-05-30T10:30:00+0200',
        end_time: '2020-05-30T18:00:00+0200',
        name: 'ESNday with ESN-EYE & ESN UŁ',
        description:
            'Semestr ESNowych aktywności zbliża się ku końcowi, zatem zakończmy go z przytupem! Niezależnie od tego, czy jesteś Świeżynką, czy ESNową Starą Wygą, z pewnością wyciągniesz wiele wartościowych informacji ze szkoleń z Causes of ESN i Struktur ESNu. <3 To co, widzimy się?',
        place: {
            name: 'Łódź',
            location: {
                city: 'Łódź',
                country: 'Poland',
                latitude: 51.7602,
                longitude: 19.4688,
            },
            id: '111112818913904',
        },
        id: '176174387065687',
    },
    {
        cover: {
            offset_x: 50,
            offset_y: 50,
            source:
                'https://scontent.flcj1-1.fna.fbcdn.net/v/t1.0-9/s720x720/97943414_10157174563927045_559961592486166528_o.jpg?_nc_cat=105&_nc_sid=b386c4&_nc_ohc=_CPb0xRTzHEAX8xvoKc&_nc_ht=scontent.flcj1-1.fna&_nc_tp=7&oh=a1614f4273511e7d270fc31f841e6a40&oe=5EF63149',
            id: '10157174563917045',
        },
        start_time: '2020-06-30T18:00:00+0200',
        end_time: '2020-06-30T20:00:00+0200',
        name: 'Online Cooking with ESN-EYE',
        description: `Gluten.
  A word that provokes either fear or excitement. There is nothig in between... But now you have a perfect chance to tame this beast in your own kitchen! 🐻👩🏽‍🍳👨🏼‍🍳
  If you love freshly baked, beautiful golden bread 🍞and the taske of flavorful traditional Polish pierogi🥟 you cannot miss this on-line event!
  One of our ESN-EYE friends will guide you through the process of baking cripsy bread, forming your own beautiful pierogi and making a quick and tasty coleslaw salad. 🥗😋
  Here you can find a shopping list with an addition of useful tools. Yes, you will be making all those delicious dishes yourself too, if you want 😀🍾
  See you on Saturday 16.05 at 6pm!
  Let’s get cooking! 🥨❤️`,
        place: {
            name: 'ESN-EYE Lodz',
            location: {
                city: 'Łódź',
                country: 'Poland',
                latitude: 51.7699203851,
                longitude: 19.4442459053,
                street: 'International Faculty of Engineering, ul. Żwirki 36',
                zip: '90-924',
            },
            id: '125714602044',
        },
        id: '189712602077176',
    },
];

interface Event {
    id: string;
    start_time: string;
    end_time: string;
    description: string;
    cover: {
        source: string;
    };
    name: string;
    place: {};
}

function EventList() {
    const [eventList, setEventList] = useState<Event[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [eventDetailsData, setEventDetailsData] = useState<Event>({
        id: '-1',
        description: '',
        cover: {
            source: '',
        },
        start_time: '',
        end_time: '',
        name: '-',
        place: {},
    });

    const closeModal = () => {
        setShowModal(false);
    };
    const openModal = (eventData: Event) => {
        setEventDetailsData(eventData);
        setShowModal(true);
    };

    const todayEvents = eventList.filter(({ start_time }: Event) => {
        return moment(start_time).format('L') === moment().format('L');
    });
    const futureEvents = eventList.filter(({ start_time }: Event) => {
        return moment(start_time).format('L') > moment().format('L');
    });

    const EventItem = ({ eventData }: any): JSX.Element => (
        <IonItem className="event-list-item event-item-box" onClick={() => openModal(eventData)}>
            <img alt="Event" className="event-thumbnail" src={eventData.cover.source} />
            <p>
                <strong>{eventData.name}</strong>
                <br /> {createParsedDate(eventData.start_time)}
            </p>
        </IonItem>
    );

    useEffect(() => {
        // getAllEvents().then(({ data }) => {
        //     if (data) setEventList(data);
        // });

        // MOCK EVENTS
        setEventList(mockEvents);
    }, []);

    if (!eventList || eventList === []) return <IonText> No events </IonText>;

    return (
        <>
            <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
                <EventDetailPage data={eventDetailsData} onDismiss={closeModal} />
            </IonModal>
            <IonList lines="none">
                <IonItemGroup>
                    <h2 className="event-group-label ion-text-center">Today</h2>
                    {todayEvents.map(event => (
                        <EventItem key={event.id} eventData={event} />
                    ))}
                </IonItemGroup>
                <IonItemGroup>
                    <h2 className="event-group-label ion-text-center">Coming soon</h2>
                    {futureEvents.map(event => (
                        <EventItem key={event.id} eventData={event} />
                    ))}
                </IonItemGroup>
            </IonList>
        </>
    );
}

export default EventList;
