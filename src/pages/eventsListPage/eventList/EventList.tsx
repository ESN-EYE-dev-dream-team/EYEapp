import React, { Component } from 'react';
import { getAllEvents } from '../EventPageAPI';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonList } from '@ionic/react';
import { get } from 'lodash';
import moment from 'moment';

type EventListState = {
    eventList: Array<Record<string, any>>;
};

const createParsedDate = (dateString: any): string => {
    if (!dateString) return '';
    const parsedDate = moment(dateString);
    return parsedDate.format('dddd, MMMM Do YYYY, h:mm a');
};

const createEventElement = (eventData: any): JSX.Element => (
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

class EventList extends Component<{}, EventListState> {
    state: EventListState = {
        // optional second annotation for better type inference
        eventList: [],
    };

    componentDidMount(): void {
        getAllEvents().then(({ data }) => {
            this.setState({
                eventList: data,
            });
        });
    }

    render(): JSX.Element {
        return (
            <IonList>
                {this.state.eventList.reduce((listContent: Array<JSX.Element>, eventObject) => {
                    const eventElement = createEventElement(eventObject);
                    listContent.push(eventElement);
                    return listContent;
                }, [])}
            </IonList>
        );
    }
}

export default EventList;
