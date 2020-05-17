import React, { useEffect, useState } from 'react';
import { apiGoogleSheetsClient } from '../../apiClient';
import { IonItem, IonList } from '@ionic/react';

interface ESNer {
    id: number;
    name: string;
    surname: string;
    isBoard: boolean;
    position: string;
    picture: string;
}

const createEsner = (rawEntry: string[]) => {
    return {
        id: parseInt(rawEntry[0]),
        name: rawEntry[1],
        surname: rawEntry[2],
        isBoard: Boolean(rawEntry[3]),
        position: rawEntry[4],
        picture: rawEntry[5],
    };
};

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

    if (esners === []) return <div> NO ESNERS FOUND </div>;
    return (
        <IonList>
            {esners.map((data: ESNer) => (
                <IonItem key={data.id} button onClick={() => alert('Wybrałeś ' + data.surname)}>
                    <img className="member-thumbnail" width="60" height="60" src={data.picture} />
                    <p>
                        <strong>{data.name} {data.surname}</strong> <br /> {data.position}
                    </p>
                </IonItem>
            ))}
        </IonList>
    );
}

export default EsnersSheet;
