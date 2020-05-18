import React, { useEffect, useState } from 'react';
import { apiGoogleSheetsClient } from '../../apiClient';
import { IonItem, IonItemGroup, IonLabel, IonList } from '@ionic/react';

const MEMBER_BOARD = 'B';
const MEMBER_COORDINATOR = 'C';
const MEMBER_ORDINARY = 'Z';

interface ESNer {
    id: number;
    name: string;
    surname: string;
    memberType: string;
    position: string;
    picture: string;
}

const createEsner = (rawEntry: string[]) => {
    return {
        id: parseInt(rawEntry[0]),
        name: rawEntry[1],
        surname: rawEntry[2],
        memberType: rawEntry[3],
        position: rawEntry[4],
        picture: rawEntry[5],
    };
};


function Member({ data }: { data: ESNer }) {
    return (
        <IonItem className="background-white-opacity ESNmember-box" color="whiteOpacity"  key={data.id} >
            <img alt="ESN Member" className="ESNmember-photo" src={data.picture} />
            <p>
                <strong>
                    {data.name} {data.surname}
                </strong>
                <br /> {data.position}
            </p>
        </IonItem>

    );
}



function EsnersSheet() {
    const [esners, setEsners] = useState<ESNer[]>([]);

    useEffect(() => {
        apiGoogleSheetsClient.getESNersData().then(respose => {
            //TODO: make 'a little more' smart error handling
            if (respose && respose.status !== 200) return;

            const {
                data: { values },
            } = respose;

            const newEsners = values.reduce((newEsners: ESNer[], rawEntry: string[]) => {
                newEsners.push(createEsner(rawEntry));
                return newEsners;
            }, []);
            setEsners(newEsners);
        });
    }, []);

    const boardMembers = esners
        .filter(member => member.memberType === MEMBER_BOARD)
        .map((data: ESNer) => <Member key={data.id} data={data} />);

    const coordinators = esners
        .filter(member => member.memberType === MEMBER_COORDINATOR)
        .map((data: ESNer) => <Member key={data.id} data={data} />);

    const ordinaryMembers = esners
        .filter(member => member.memberType === MEMBER_ORDINARY)
        .map((data: ESNer) => <Member key={data.id} data={data} />);

    if (esners === []) return <div> NO ESNERS FOUND </div>;
    return (
        <IonList  className="background-white-opacity">
            <IonItemGroup className="div-box-members">

                <IonLabel className="background-white ion-text-center box - members" color="blackNormal"><img className="hamburger-menu" src="assets/button.png" alt="Menu icon"/> Board</IonLabel>
                {boardMembers}

            </IonItemGroup>

            <IonItemGroup>
                <IonLabel className="background-white ion-text-center box-members" color="blackNormal"><img className="hamburger-menu" src="assets/button.png" alt="Menu icon"/>Coordinators</IonLabel>
                {coordinators}
            </IonItemGroup>
            <IonItemGroup>
                <IonLabel className="background-white ion-text-center box-members" color="blackNormal"><img className="hamburger-menu" src="assets/button.png" alt="Menu icon"/>Ordinary Members</IonLabel>
                {ordinaryMembers}
            </IonItemGroup>
        </IonList>
    );
}

export default EsnersSheet;
