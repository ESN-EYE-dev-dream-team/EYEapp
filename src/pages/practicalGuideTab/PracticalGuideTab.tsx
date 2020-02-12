import React from 'react';
import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const fullScreen = {
      width: "100%",
      height: "100%"
    };

const PracticalGuideTab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle class="ion-text-center">Practical Guide</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <iframe style={fullScreen} src="assets/pg/erasmus_pg.pdf"></iframe>
            </IonContent>
        </IonPage>
    );
};

export default PracticalGuideTab;
