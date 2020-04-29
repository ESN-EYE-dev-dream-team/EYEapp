import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import OfficeHoursSheet from './OfficeHoursSheet';
import GoogleSheetsProvider from '../../dist';

const OfficeHoursTab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Office Hours</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <GoogleSheetsProvider>
                    <OfficeHoursSheet />
                </GoogleSheetsProvider>
            </IonContent>
        </IonPage>
    );
};

export default OfficeHoursTab;
