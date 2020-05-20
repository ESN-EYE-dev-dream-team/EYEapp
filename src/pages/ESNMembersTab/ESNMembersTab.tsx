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
              <p className="ion-text-justify color-text-white paragraph-white">Eat an easter feather as if it were a bird then burp victoriously, but tender. If it smells like fish eat as much as you wish who's the baby, or hiss and stare at nothing then run suddenly away asdflkjaertvlkjasntvkjn (sits on keyboard).</p>
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
