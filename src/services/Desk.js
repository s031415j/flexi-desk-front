import { get } from './apiClient';

const base = '/desks'

const Desk = {

    all: () => {
        return get(`${base}/all`);
    },

    getByFloorLevel: (floor) => {
        return get(`${base}/floor/${floor}`);
    },
    
    getDeskByIdBankAndFloor: (id, bank, floor) => {
        return get(`${base}/id/${id}/bank/${bank}/floor/${floor}`);
    },

    getDeskByLocationTowerAndFloor: (location, tower, floor) => {
        return get(`${base}/location/${location}/tower/${tower}/floor/${floor}`)
    },

    getDeskByLocationTowerFloorAndBank: (location, tower, floor, bank) => {
        return get(`${base}/location/${location}/tower/${tower}/floor/${floor}/bank/${bank}`);
    }

}

export default Desk;