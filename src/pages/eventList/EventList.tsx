import React, { Component } from 'react';
import { createGETrequest } from '../../apiClient';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonList } from '@ionic/react';

type EventListState = {
    eventList: Array<Record<string, any>>;
};

const createEventElement = (eventData: any): JSX.Element => (
    <IonItem>
        <IonCard className="welcome-card">
            <img src={eventData.cover.source} alt="" />
            <IonCardHeader>
                <IonCardTitle>{eventData.name}</IonCardTitle>
                <IonCardSubtitle>{eventData.place.name}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{eventData.description}</IonCardContent>
        </IonCard>
    </IonItem>
);

class EventList extends Component<{}, EventListState> {
    state: EventListState = {
        // optional second annotation for better type inference
        eventList: [],
    };

    componentDidMount(): void {
        createGETrequest('events').then(({ data }) => {
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

                    console.log('eventElement', eventElement);
                    console.log('listContent', listContent);
                    return listContent;
                }, [])}
            </IonList>
        );
    }
}

export default EventList;
