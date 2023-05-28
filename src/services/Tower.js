import { get } from './apiClient';

const base = '/tower'

const Tower = {

    all: () => {
        return get(`${base}/all`);
    },

    getByLocationName: (locationName) => {
        return get(`${base}/${locationName}`);
    }

}

export default Tower;