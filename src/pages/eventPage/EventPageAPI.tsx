import apiClient from '../../apiClient';

const pageId = '125714602044';

const accessToken =
    'EAAF7O5WNwOcBAFgLRKfZBK44F21IpvSzxhZCmfL19HdF9WtbkCu33q0GgwsaX1L6Wlk92TonP6RNDc4hnJU0iw5OF6sCAKvZAR4FsdY65639hzDBaaniXBLvmHJFIXVFOtjlAxZCWp6fZAwzfgxBPGPQEGC6SboFAOnIZBXF7lL4V4hD5V3lCt';

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
