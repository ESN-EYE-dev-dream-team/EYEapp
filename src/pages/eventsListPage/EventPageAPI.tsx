import apiClient from '../../apiClient';

const pageId = '125714602044';

const accessToken =
    'EAAx3uROfxAEBADmdlw7AB0fcMokkNZAnbBU9qTBwVjW7hI4hrrNA3Oab3m5HfIGJotXepZC5QWcKaN4pGds8mJJBmuFBF02fLbU3iPugbB3tPtmWAiVobc5cqLCopJjximJ5LYefcA3GZAqm8u1rM2ZB19dd1c4xTCyq329DrwZDZD';

const eventFields = 'cover%2Cstart_time%2Cend_time%2Cname%2Cdescription%2Cplace';

const tokenWrapper = (content: string): string => `${content}access_token=${accessToken}`;

export const getAllEvents = async (): Promise<any> => {
    try {
        const request = tokenWrapper(`${pageId}/events?fields=${eventFields}&`);
        const response = await apiClient.get<Record<string, any>>(request);
        return response.data;
    } catch (err) {
        if (err && err.response) {
            return err;
        }

        throw err;
    }
};

export const getEventsDetails = async (eventId: string): Promise<any> => {
    try {
        const request = tokenWrapper(`${eventId}?fields=${eventFields}&`);
        const response = await apiClient.get<Record<string, any>>(request);
        return response.data;
    } catch (err) {
        if (err && err.response) {
            return err;
        }
        throw err;
    }
};
