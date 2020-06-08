import React from 'react';
import { IonPage } from '@ionic/react';

import './PracticalGuideTab.scss';

const guideUrl = 'https://eye.esn.pl/sites/default/files/news/erasmus_practical_guide_winter_19-20.pdf';

//TODO: do sth legal instad of this hack :)
const PracticalGuideTab: React.FC = () => {
    return (
        <IonPage className="iframe-container">
            <iframe
                title="practical-guide-viewer"
                src={`https://docs.google.com/viewer?url=${guideUrl}&embedded=true`}
            />
        </IonPage>
    );
};

export default PracticalGuideTab;
