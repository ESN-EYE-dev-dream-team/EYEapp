import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import EsnersSheet from './EsnersSheet';

const ESNMembersTab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>ESN Members</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="container">
                    <EsnersSheet />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ESNMembersTab;
