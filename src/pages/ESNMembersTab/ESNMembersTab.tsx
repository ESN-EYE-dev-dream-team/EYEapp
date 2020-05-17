import React from 'react';
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import EsnersSheet from './EsnersSheet';

const ESNMembersTab: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size="12">
                            <h1 className="ion-text-center">Members of ESN</h1>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12">
                            <EsnersSheet />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ESNMembersTab;
