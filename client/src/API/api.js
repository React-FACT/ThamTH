const API_BASE_ADDRESS = 'http://localhost:3300/api/v1/user';

export default class Api {
    static getUsers() {
        const uri = API_BASE_ADDRESS + "/get-all";

        return fetch(uri, {
            method: 'GET'
        });
    }
}