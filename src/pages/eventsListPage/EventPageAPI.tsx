import apiClient from '../../apiClient';

const pageId = '125714602044';

const accessToken =
    'EAAcV8FsMAVUBAFJuLeZCa5kHyCqVTXZB038hVZCw1ZB9e7AqOi8bs3Du81u3INZBeum6M5TCwJRM56P2Ai7RWroIg1wPhlQp5DBGMAHoEh37AqZCSDetZAKZBJ62CgNk9AK2oqwVsT5f0TtZBOSocjd6YI07BzViSrNXkaYiEKRZCkD5U2pl1d6XOI';

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
