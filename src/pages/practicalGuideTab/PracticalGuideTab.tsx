import React from 'react';
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';

const PracticalGuideTab: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size="12">
                            <h1 className="ion-text-center">Practical Guide</h1>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default PracticalGuideTab;
