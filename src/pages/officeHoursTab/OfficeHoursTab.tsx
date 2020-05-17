import React from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol} from '@ionic/react';
import OfficeHoursSheet from './OfficeHoursSheet';
import '../../theme/styles.css';

const OfficeHoursTab: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size="12">
                            <h1 className="ion-text-center">Office Hours</h1>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12">
                            <OfficeHoursSheet />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default OfficeHoursTab;
