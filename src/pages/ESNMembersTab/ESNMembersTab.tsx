import React from 'react';
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import EsnersSheet from './EsnersSheet';
import '../../theme/styles.css';

const ESNMembersTab: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size="12">
                            <h1 className="ion-text-center color-text-white heading-main">Members of ESN</h1>
                            <p className="ion-text-justify color-text-white paragraph-white">
                                We are very happy to introduce you our ESN members. If you want to contact any of them, you can enter their profile in order to get their contacts.
                            </p>
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
