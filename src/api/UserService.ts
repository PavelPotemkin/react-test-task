import axios from "axios";

export default class UserService {
    static async getAll() {
        return await axios.get('https://reqres.in/api/users?page=1');
    }

    static async getById(id: number) {
        return await axios.get('https://reqres.in/api/users/' + id);
    }
}
