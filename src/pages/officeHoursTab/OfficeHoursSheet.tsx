import React, { useState, useEffect } from 'react';
import { apiGoogleSheetsClient } from '../../apiClient';

//indicator that this is a column description row (first row)
const ID_COLUMN_IDENTIFIER = 'id';

interface OfficeHoursEntry {
    id: number;
    day: string;
    hour: string;
    who: string;
}

const createOHEntry = (rawEntry: string[]) => {
    return {
        id: parseInt(rawEntry[0]),
        day: rawEntry[1],
        hour: rawEntry[2],
        who: rawEntry[3],
    };
};

function OfficeHoursSheet() {
    const [officeHours, setOfficeHours] = useState<any>([]);

    useEffect(() => {
        apiGoogleSheetsClient.getOfficeHoursData().then(respose => {
            //TODO: make 'a little more' smart error handling
            if (respose && respose.status !== 200) return;

            const {
                data: { values },
            } = respose;

            const newOfficeHours = values.filter((rawEntry: string[]) => rawEntry[0] !== ID_COLUMN_IDENTIFIER)
                .reduce((newOfficeHours: OfficeHoursEntry[], rawEntry: string[]) => {
                    newOfficeHours.push(createOHEntry(rawEntry));
                    return newOfficeHours;
                }, []);
            setOfficeHours(newOfficeHours);
        });
    }, []);

    if (officeHours === []) return <div> NO OH DATA FOUND </div>;
    return (
        <div>
            {officeHours.map((data: any) => (
                <span key={data.id}>
                    <p>
                        {data.day} {data.hour} <strong>{data.who}</strong>
                    </p>
                </span>
            ))}
        </div>
    );
}

export default OfficeHoursSheet;
