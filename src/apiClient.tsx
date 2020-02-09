import axios from 'axios';

const pageId = '125714602044';

const accessToken =
    'EAAF7O5WNwOcBAFgLRKfZBK44F21IpvSzxhZCmfL19HdF9WtbkCu33q0GgwsaX1L6Wlk92TonP6RNDc4hnJU0iw5OF6sCAKvZAR4FsdY65639hzDBaaniXBLvmHJFIXVFOtjlAxZCWp6fZAwzfgxBPGPQEGC6SboFAOnIZBXF7lL4V4hD5V3lCt';

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
