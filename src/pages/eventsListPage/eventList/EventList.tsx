import React, { useState, useEffect } from 'react';
import { getAllEvents } from '../EventPageAPI';
import { IonItem, IonModal, IonItemGroup, IonList, IonText } from '@ionic/react';
import moment from 'moment';

import EventDetailPage from '../eventDetailPage/EventDetailPage';

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
                'https://scontent.flcj1-1.fna.fbcdn.net/v/t1.0-9/95025791_2875932712443582_6125784864986759168_o.jpg?_nc_cat=101&_nc_sid=340051&_nc_ohc=A4QQ93KjWvMAX9NIUlF&_nc_ht=scontent.flcj1-1.fna&oh=591cc0915199a61f856de3dca7aa848c&oe=5F41C09B',
            id: '10157197298652045',
        },
        start_time: moment().toString(),
        end_time: moment().toString(),
        name: 'FIND YOUR MATCH | Online Dating',
        description:
            'Hello darlings! 😄\n' +
            'Your Erasmus has just started and you have to stay home, right? For sure you wanted to meet more new people during your Erasmus time, but you had only few opportunities to meet them...\n' +
            'You dreamed of meeting the love of your life 💘 or making friendship for many years 😇 but how to do it, while you stuck at home?\n' +
            'Well, if you answered YES, we have a perfect event for you! 🥰\n' +
            'The dream team of Erasmus Student Network UKSW, ESN-EYE Lodz, ESN PB, and ESN UJ Cracow would like to invite you to find your match! All you have to do is to fill the form till Thursday (30/04/2020) till 23:59 and that’s all - just wait for an email with information about your online date. ❤️\n' +
            '👉 LINK TO THE FORM: https://tiny.pl/7mgfq\n' +
            'We hope we will help you to meet your perfect match and in a few years some of you will inform us about your Erasmus Reunion or, we hope, with an invitation for your wedding! 😍',
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
                'https://scontent.flcj1-1.fna.fbcdn.net/v/t1.0-9/90937780_10157029698577045_8740215106845016064_o.jpg?_nc_cat=109&_nc_sid=340051&_nc_ohc=maZRQhuZKhwAX9lkKIs&_nc_ht=scontent.flcj1-1.fna&oh=8693abff5e0da37554d6fe7b03c94d1d&oe=5F44F99E',
            id: '10157174563917045',
        },
        start_time: moment()
            .add(1, 'month')
            .toString(),
        end_time: moment()
            .add(1, 'month')
            .toString(),
        name: 'Game Tournament with ESN-EYE',
        description: `Hello guys!
After analysing your answers regarding online game tournament, we decided to give it a try!
We have selected for now two, the most popular games according to your responses:
🌴 League of Legends
🔫 Counter Strike GO
❔ What do you have to do to take part in this tournament?
Firstly, you have to register in the link given below till Monday (30.03), 5pm.:
https://forms.gle/qM8rXgNaXgGCE74V7
Thanks to that, we will be able to create a group for participants and select a proper date and hour for playing so that it fits for everybody. We will try to contact you on Monday, 30th. We will start playing as soon as possible and we can play even during the whole semester (not only till 11th like on the event) , depending on you 🙂
❔ How the tournament will look like?
🔫 When it comes to Counter Strike, we will be playing 5 vs 5, however, each person will collect points for his/her own. We will be changing squads and playing within those teams. It is not going to be only a one-time event, we can play every second day, every Wednesday and Friday - it is up to you. We will adjust this event to your needs.
🌴 With League of Legends, the situation is a bit complicated. Currently, there are 2 options, depending on number of participants. Either, similarly to CS, each person will be gathering points for his/her own and we will be mixing teams or we will have enough teams to make a proper tournament when you will be staying in one team. We will choose an option based on number of responses.
We can’t wait to start the tournament so tell your friends about that event and let’s play!`,
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

function EventList(): JSX.Element {
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

    const closeModal = (): void => {
        setShowModal(false);
    };
    const openModal = (eventData: Event): void => {
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
            <p className="small-padding-event">
                {' '}
                <span className="event-box-big">
                    <strong>{eventData.name}</strong>{' '}
                </span>
                <br /> <span className="event-box-small">{createParsedDate(eventData.start_time)}</span>
            </p>
        </IonItem>
    );

    const mockData = false;

    useEffect(() => {
        if (mockData) setEventList(mockEvents);
        else
            getAllEvents().then(({ data }) => {
                if (data) setEventList(data);
            });
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
                    {mockEvents.map(event => (
                        <EventItem key={event.id} eventData={event} />
                    ))}
                </IonItemGroup>
                <IonItemGroup>
                    <h2 className="event-group-label ion-text-center">Coming soon</h2>
                    {mockEvents.map(event => (
                        <EventItem key={event.id} eventData={event} />
                    ))}
                </IonItemGroup>
            </IonList>
        </>
    );
}

export default EventList;
