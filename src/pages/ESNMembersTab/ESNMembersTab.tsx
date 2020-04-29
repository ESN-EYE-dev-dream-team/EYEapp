import React from 'react';
import GoogleSheetsProvider from '../../dist';
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
                <GoogleSheetsProvider>
                    <div className="container">
                        <div className="section">
                            <EsnersSheet />
                        </div>
                    </div>
                </GoogleSheetsProvider>
            </IonContent>
        </IonPage>
    );
};

export default ESNMembersTab;
