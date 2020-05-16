import axios from 'axios';

const API_KEY = 'AIzaSyAPmCnDLhm3xgQxypFi4g7Db6uUznjGai8';
const DOC_ID = '1jSCZTQmEyb9oUscoOQz9hSbQ_U9x6qjoAZ9uAGpjfO4';
const baseGoogleSheetsURL = 'https://sheets.googleapis.com/v4/spreadsheets/';

const apiClient = axios.create({
    baseURL: 'https://graph.facebook.com/v6.0/',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
});

const createUrl = (sheetName: string, range: string) => {
    return `${baseGoogleSheetsURL}${DOC_ID}/values/${sheetName}!${range}?key=${API_KEY}`;
};

const getESNersData = () => {
    const sheetName = 'esners';
    const range = 'A2:F6'; //TODO: automate range to take only rows with some value
    const url = createUrl(sheetName, range);
    return axios.get(url);
};

const getOfficeHoursData = () => {
    const sheetName = 'officeHours';
    const range = 'A2:D7'; //TODO: automate range to take only rows with some value
    const url = createUrl(sheetName, range);

    return axios.get(url);
};

export const apiGoogleSheetsClient = { getESNersData, getOfficeHoursData };

export default apiClient;
