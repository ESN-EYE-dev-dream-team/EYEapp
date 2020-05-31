import React from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/react';
import OfficeHoursSheet from './OfficeHoursSheet';
import '../../theme/styles.css';

const OfficeHoursTab: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size="12">
                            <h1 className="ion-text-center color-text-white heading-main">Office Hours</h1>
                            <p className="ion-text-justify color-text-white paragraph-white">
                                If you want to meet with us, sign up for an event or maybe pay for it, you can always
                                visit our ESN-EYE office. Below, you can find the opening hours. Please keep in mind,
                                that we study or work so we cannot be all the time available in the office.
                            </p>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12">
                            <OfficeHoursSheet />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12">
                            <p className="ion-text-justify color-text-white paragraph-white">
                                Our office is located at the International Faculty of Engineering at Lodz University of Technology. You can find us at the first floor, next to AULA. The room number is 52.
                            </p>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <div className="ornament-box">
                    <img alt="Ornament waves" src="assets/ornaments/icon-ornament-very-short.png" />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default OfficeHoursTab;
