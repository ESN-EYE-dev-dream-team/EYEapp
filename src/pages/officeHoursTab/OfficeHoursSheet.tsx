import React, { useState, useEffect } from 'react';
import { apiGoogleSheetsClient } from '../../apiClient';

import iconDotFull from 'assets/ornaments/icon-dot-full.png';
import iconDotEmpty from 'assets/ornaments/icon-dot-empty.png';

//indicator that this is a column description row (first row)
const ID_COLUMN_IDENTIFIER = 'id';

interface OfficeHoursEntry {
    id: number;
    day: string;
    hour: string;
    week: string;
}

const createOHEntry = (rawEntry: string[]) => {
    return {
        id: parseInt(rawEntry[0]),
        day: rawEntry[1],
        hour: rawEntry[2],
        week: rawEntry[3],
    };
};

function OfficeHoursSheet(): JSX.Element {
    const [officeHours, setOfficeHours] = useState<any>([]);
    const officeAvailableDot = <img alt="Dot" className="dot-icon" src={iconDotFull} />;
    const officeUnavailableDot = <img alt="Dot" className="dot-icon" src={iconDotEmpty} />;
    const availabilityConditionString = '-';

    useEffect(() => {
        apiGoogleSheetsClient.getOfficeHoursData().then(respose => {
            //TODO: make 'a little more' smart error handling
            if (respose && respose.status !== 200) return;

            const {
                data: { values },
            } = respose;

            const newOfficeHours = values
                .filter((rawEntry: string[]) => rawEntry[0] !== ID_COLUMN_IDENTIFIER)
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
                    <h2 className="ion-text-center">{data.week}</h2>
                    <p className="officeHours-days">
                        {data.hour.includes(availabilityConditionString) ? officeAvailableDot : officeUnavailableDot}
                        {data.day} <span className="hour-right">{data.hour}</span>
                    </p>
                </span>
            ))}
        </div>
    );
}

export default OfficeHoursSheet;
