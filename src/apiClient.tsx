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

const createUrl = (sheetName: string) => {
    return `${baseGoogleSheetsURL}${DOC_ID}/values/${sheetName}?key=${API_KEY}`;
};

const getESNersData = () => {
    const sheetName = 'esners';
    const url = createUrl(sheetName);
    return axios.get(url);
};

const getOfficeHoursData = () => {
    const sheetName = 'officeHours';
    const url = createUrl(sheetName);
    return axios.get(url);
};

export const apiGoogleSheetsClient = { getESNersData, getOfficeHoursData };

export default apiClient;
