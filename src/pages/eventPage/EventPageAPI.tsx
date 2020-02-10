import apiClient from '../../apiClient';

const pageId = '125714602044';

const accessToken =
    'EAAF7O5WNwOcBAFgLRKfZBK44F21IpvSzxhZCmfL19HdF9WtbkCu33q0GgwsaX1L6Wlk92TonP6RNDc4hnJU0iw5OF6sCAKvZAR4FsdY65639hzDBaaniXBLvmHJFIXVFOtjlAxZCWp6fZAwzfgxBPGPQEGC6SboFAOnIZBXF7lL4V4hD5V3lCt';

const eventFields = 'cover%2Cstart_time%2Cend_time%2Cname%2Cdescription%2Cplace';

export const getAllEvents = async () => {
    try {
        const request = `${pageId}/events?fields=${eventFields}&access_token=${accessToken}`;
        const response = await apiClient.get<Record<string, any>>(request);
        return response.data;
    } catch (err) {
        if (err && err.response) {
            return err;
        }

        throw err;
    }
};
