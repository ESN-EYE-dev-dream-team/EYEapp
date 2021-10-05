import apiClient from '../../apiClient';

const pageId = '125714602044';

const accessToken =
    'EAAx3uROfxAEBAKVyhUJMNzLuPFON2GvG9pbEdnh5bvS6FNm5O0yVtdvm4PcZASru2BZABVUkIKDyw8rViwnHAgZAPezh4HRoFcpRYYUM6cXRxVBVKKZAj6bNJd0jpz6UMb77RvXXhAjlZBRpT9pQ0sOeJHHrC1O5M8UZAP4WP49ZAWpe2B2UmCg';

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
