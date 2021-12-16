import axios from "axios";

export type User = {
    "id": number,
    "email": string,
    "first_name": string,
    "last_name": string,
    "avatar": string
}

export type Users = User[]

export default class UserService {
    static async getAll(): Promise<Users> {
        const response = await axios.get('https://reqres.in/api/users?page=1')
        return response.data.data;
    }

    static async getById(id: number): Promise<User> {
        const response = await axios.get('https://reqres.in/api/users/' + id);
        return response.data.data;
    }
}
