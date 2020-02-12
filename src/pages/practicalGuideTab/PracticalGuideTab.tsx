import React from 'react';
import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const PracticalGuideTab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Practical Guide</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>PracticalGuideTab</IonList>
            </IonContent>
        </IonPage>
    );
};

export default PracticalGuideTab;
