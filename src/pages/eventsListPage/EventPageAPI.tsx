import apiClient from '../../apiClient';

const pageId = '125714602044';

const accessToken =
    'EAAcV8FsMAVUBAE7vSNs2nZCxloGfvDtvIZBVamaAQ242TRIEeTa6o1wZCffZCOZB9yukbp1XctyqNd9ZAThkBSUuMHCQbujphVLzie3OmfbFa918oTru1wYZADpZBAZC77NBoDgpN8EaPXAfSsPjdp6wQUYWxWLllinJ6Jvo1rzDTu1ZCx5AjkZBOIG';

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
