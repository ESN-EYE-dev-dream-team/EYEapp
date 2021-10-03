import apiClient from '../../apiClient';

const pageId = '125714602044';

const accessToken =
    'EAAx3uROfxAEBAPsxwseQzrbmCUknSPCO5BhtZBU7HG6RCOLefz0qcZA4eZCCZB9qLyLH9PNp7Ty3PHe2XcHUZBCfBZBEytTHZCZBzCMS93um7Tr9jIGi1z2ZABoiqKAfT2ZCxrMNDqsEsRrbb2AlgBAq2xP35wkX7ZBJ185ZBw297snMbVn0oT36ipnR';

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
