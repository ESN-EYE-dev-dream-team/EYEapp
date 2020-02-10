import React, { Component } from 'react';
import { getAllEvents } from '../EventPageAPI';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonList } from '@ionic/react';
import { get } from 'lodash';

type EventListState = {
    eventList: Array<Record<string, any>>;
};

const createEventElement = (eventData: any): JSX.Element => (
    <IonItem routerLink={`/eventDetail/${eventData.id}`}>
        <IonCard className="welcome-card">
            <img src={eventData.cover.source} alt="" />
            <IonCardHeader>
                <IonCardTitle>{eventData.name}</IonCardTitle>
                <IonCardSubtitle>Place: {get(eventData, 'place.name', '-')}</IonCardSubtitle>
            </IonCardHeader>
            event id: {eventData.id}
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