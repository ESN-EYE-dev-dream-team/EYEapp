import React from 'react';
import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const OfficeHoursTab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab Two</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>Office Hours</IonList>
            </IonContent>
        </IonPage>
    );
};

export default OfficeHoursTab;
