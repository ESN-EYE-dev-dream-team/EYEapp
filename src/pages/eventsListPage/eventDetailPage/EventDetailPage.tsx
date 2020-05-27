import React, { useEffect, useState } from 'react';
import {
    IonBackButton,
    IonButtons,
    IonHeader,
    IonPage,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
} from '@ionic/react';
import { getEventsDetails } from '../EventPageAPI';
import moment from 'moment';
import './EventDetailPage.css';
import { calendar, pin, text, time } from "ionicons/icons";

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
    const startTimeArray = createParsedDate(start_time).split(',');
    const endTimeArray = createParsedDate(end_time).split(',');

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/eventsList" />
                    </IonButtons>
                    <IonTitle>Event detail</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="event-details-container">
                    <h2>{name}</h2>
                    <img className="event-details-photo" src={cover.source} alt="" />
                    <p className="ion-text-justify">
                        <IonIcon icon={calendar} /> <strong>Date: </strong>{startTimeArray[0] + ', ' + startTimeArray[1]}
                    </p>
                    <p className="ion-text-justify">
                        <IonIcon icon={time} /> <strong>Hour: </strong>{startTimeArray[startTimeArray.length - 1] + ' - ' + endTimeArray[endTimeArray.length - 1]}
                    </p>
                    <p className="ion-text-justify">
                        <IonIcon icon={pin} /> <strong>Place: </strong>{place.name}
                    </p>
                    <p className="ion-text-justify">
                        <IonIcon icon={text} /> <strong>Description:</strong><br/> {formattedDesciption}
                    </p>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default EventDetailPage;
