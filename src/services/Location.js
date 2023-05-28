import { get } from './apiClient';

const base = '/location'

const Location = {

    all: () => {
        return get(`${base}/all`);
    },

}

export default Location;