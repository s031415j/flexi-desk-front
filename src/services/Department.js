import { get } from './apiClient';

const base = '/department'

const Department = {
    all: () => {
        return get(`${base}/all`);
    },

    getFloorLevelByDepartment: (department) => {
        return get(`${base}/${department}`);
    }

}

export default Department;