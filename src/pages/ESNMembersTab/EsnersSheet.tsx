import React, { useEffect, useState } from 'react';
import { apiGoogleSheetsClient } from '../../apiClient';
import { IonItem, IonItemGroup, IonLabel, IonList, IonModal, IonButton } from '@ionic/react';

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

function MemberDetails({ data, onDismiss }: { data: ESNer; onDismiss: () => void }) {
    return (
        <div>
            <img alt="ESN Member" className="ESNmember-photo" width="100" height="100" src={data.picture} />
            <h1>
                {data.name} {data.surname}
            </h1>
            <p>{data.position}</p>
            <p>{data.phone}</p>
            <p>{data.facebook}</p>
            <p>{data.email}</p>
            <IonButton onClick={() => onDismiss()}>Click me</IonButton>
        </div>
    );
}

function Member({ data, openModal }: { data: ESNer; openModal: (data: ESNer) => void }) {
    return (
        <IonItem
            className="background-white-opacity ESNmember-box"
            color="whiteOpacity"
            key={data.id}
            button
            onClick={() => openModal(data)}
        >
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
    const [showModal, setShowModal] = useState(false);
    const [detailsMemberData, setDetailsMemberData] = useState<ESNer>({
        id: 0,
        name: '',
        surname: '',
        memberType: '',
        position: '',
        picture: '',
        email: '',
        facebook: '',
        phone: '',
    });

    const closeModal = () => {
        setShowModal(false);
    };
    const openModal = (esnerData: ESNer) => {
        setDetailsMemberData(esnerData);
        setShowModal(true);
    };

    useEffect(() => {
        apiGoogleSheetsClient.getESNersData().then(respose => {
            //TODO: make 'a little more' smart error handling
            if (respose && respose.status !== 200) return;

            const {
                data: { values },
            } = respose;

            const newEsners = values
                .filter((rawEntry: string[]) => rawEntry[0] !== ID_COLUMN_IDENTIFIER)
                .reduce((newEsners: ESNer[], rawEntry: string[]) => {
                    newEsners.push(createEsner(rawEntry));
                    return newEsners;
                }, []);
            setEsners(newEsners);
        });
    }, []);

    const boardMembers = esners
        .filter(member => member.memberType === MEMBER_BOARD)
        .map((data: ESNer) => <Member key={data.id} data={data} openModal={openModal} />);

    const coordinators = esners
        .filter(member => member.memberType === MEMBER_COORDINATOR)
        .map((data: ESNer) => <Member key={data.id} data={data} openModal={openModal} />);

    const ordinaryMembers = esners
        .filter(member => member.memberType === MEMBER_ORDINARY)
        .map((data: ESNer) => <Member key={data.id} data={data} openModal={openModal} />);

    if (esners === []) return <div> NO ESNERS FOUND </div>;
    return (
        <>
            <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
                <MemberDetails data={detailsMemberData} onDismiss={closeModal} />
            </IonModal>
            <IonList className="background-white-opacity">
                <IonItemGroup className="div-box-members">
                    <IonLabel className="background-white ion-text-center box-members" color="blackNormal">
                        <img className="hamburger-menu" src="assets/button.png" alt="Menu icon" /> Board
                    </IonLabel>
                    {boardMembers}
                </IonItemGroup>

                <IonItemGroup className="div-box-members">
                    <IonLabel className="background-white ion-text-center box-members" color="blackNormal">
                        <img className="hamburger-menu" src="assets/button.png" alt="Menu icon" />
                        Coordinators
                    </IonLabel>
                    {coordinators}
                </IonItemGroup>
                <IonItemGroup className="div-box-members">
                    <IonLabel className="background-white ion-text-center box-members" color="blackNormal">
                        <img className="hamburger-menu" src="assets/button.png" alt="Menu icon" />
                        Ordinary Members
                    </IonLabel>
                    {ordinaryMembers}
                </IonItemGroup>
            </IonList>
        </>
    );
}

export default EsnersSheet;
