import React, { useEffect, useState } from 'react';
import { apiGoogleSheetsClient } from '../../apiClient';
import { IonItem, IonItemGroup, IonLabel, IonList, IonModal} from '@ionic/react';

const MEMBER_BOARD = 'B';
const MEMBER_COORDINATOR = 'C';
const MEMBER_ORDINARY = 'Z';

//indicator that this is a column description row (first row)
const ID_COLUMN_IDENTIFIER = 'id';

interface ESNer {
    id: number;
    name: string;
    surname: string;
    memberType: string;
    position: string;
    picture: string;
    email: string;
    facebook: string;
    phone: string;
}

const createEsner = (rawEntry: string[]) => {
    return {
        id: parseInt(rawEntry[0]),
        name: rawEntry[1],
        surname: rawEntry[2],
        memberType: rawEntry[3],
        position: rawEntry[4],
        picture: rawEntry[5],
        email: rawEntry[6],
        facebook: rawEntry[7],
        phone: rawEntry[8],
    };
};

function MemberDetails({ data }: { data: ESNer }){
    return (
        <div>
            <img alt="ESN Member" className="member-thumbnail" width="100" height="100" src={data.picture} />
            <h1>{data.name} {data.surname}</h1>
            <p>{data.position}</p>
            <p>{data.phone}</p>
            <p>{data.facebook}</p>
            <p>{data.email}</p>
        </div>
    );
}

function Member({ data }: { data: ESNer }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <IonItem key={data.id} button onClick={() => setShowModal(true)}>
            <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
                <MemberDetails data={data} />
            </IonModal>
            <img alt="ESN Member" className="member-thumbnail" width="60" height="60" src={data.picture} />
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

            const newEsners = values.filter((rawEntry: string[]) => rawEntry[0] !== ID_COLUMN_IDENTIFIER)
                .reduce((newEsners: ESNer[], rawEntry: string[]) => {
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
        <IonList>
            <IonItemGroup>
                <IonLabel>Board</IonLabel>
                {boardMembers}
            </IonItemGroup>
            <IonItemGroup>
                <IonLabel>Coordinators</IonLabel>
                {coordinators}
            </IonItemGroup>
            <IonItemGroup>
                <IonLabel>Ordinary Members</IonLabel>
                {ordinaryMembers}
            </IonItemGroup>
        </IonList>
    );
}

export default EsnersSheet;
