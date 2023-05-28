import { get, post } from './apiClient';

const Authorisation = {
    validate: (username, password) => {
        return post(`/validate`, username, password);
    },
}
export default Authorisation;