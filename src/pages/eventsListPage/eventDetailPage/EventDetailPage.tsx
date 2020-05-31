import React from 'react';
import { IonIcon } from '@ionic/react';
import moment from 'moment';
import { calendar, pin, text, time } from 'ionicons/icons';

import ModalHeader from 'utils/modalHeader/ModalHeader';
import './EventDetailPage.scss';

const createParsedDate = (dateString: any): string => {
    if (!dateString) return '';
    const parsedDate = moment(dateString);
    return parsedDate.format('dddd, MMMM Do YYYY, h:mm a');
};

export default function EventDetailPage({ data, onDismiss }: { data: any; onDismiss: any }) {
    const { description, cover, start_time, end_time, name, place = { name: '-' } } = data;
    const formattedDesciption = description.split('\n').map((item: any, key: any) => {
        return (
            <span key={key}>
                {item}
                <br />
            </span>
        );
    });

    const startTimeArray = createParsedDate(start_time).split(',');
    const endTimeArray = createParsedDate(end_time).split(',');

    return (
        <div className="event-details-container">
            <ModalHeader onClickHandler={onDismiss} />
            <img className="event-details-photo" src={cover.source} alt="Event cover photo" />
            <h2>{name}</h2>
            <p className="ion-text-justify">
                <IonIcon icon={calendar} /> <strong>Date: </strong>
                {startTimeArray[0] + ', ' + startTimeArray[1]}
            </p>
            <p className="ion-text-justify">
                <IonIcon icon={time} /> <strong>Hour: </strong>
                {startTimeArray[startTimeArray.length - 1] + ' - ' + endTimeArray[endTimeArray.length - 1]}
            </p>
            <p className="ion-text-justify">
                <IonIcon icon={pin} /> <strong>Place: </strong>
                {place.name}
            </p>
            <p className="ion-text-justify">
                <IonIcon icon={text} /> <strong>Description:</strong>
                <br /> {formattedDesciption}
            </p>
        </div>
    );
}
