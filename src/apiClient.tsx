import axios from 'axios';

const pageId = '125714602044';

const accessToken =
    'EAAF7O5WNwOcBAIZCeMZCIymksGVmAwCDgMk5IDJfWe8mD6wz9LZBwttBA1EPWt0PnPXRSWUvor20b3iJZAClYtM76coigSGbFy5chZAbOjPRMyMzX11SgaXMZC7WbDlhmPZAlkxdZBa7FceGRmJwvMhXzhlZBaZAADcRAQ0kHHJdIsKsQJ9W6AdQoXViTReVEBbxmqhVZBfLPoVkgZDZD';

const eventFields = 'cover%2Cstart_time%2Cend_time%2Cname%2Cdescription%2Cplace';

const apiClient = axios.create({
    baseURL: `https://graph.facebook.com/v6.0/${pageId}/`,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const createGETrequest = async (endpointType: string) => {
    let request = '';
    try {
        //todo: possibly change to switch
        if (endpointType === 'events') {
            request = `events?fields=${eventFields}&access_token=${accessToken}`;
        }
        const response = await apiClient.get<Record<string, any>>(request);
        return response.data;
    } catch (err) {
        if (err && err.response) {
            return err;
        }

        throw err;
    }
};
