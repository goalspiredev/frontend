import { API_URL } from "$goalspire/global";
import { storedToken } from "$stores/token.store";
import Axios from "axios";
import { get } from "svelte/store";

export default async function getGoals(): Promise<any> {
    let goals: any[] = [];
    goals = await Axios.get(API_URL + '/goals', {
        headers: {
            Authorization: `Bearer ${get(storedToken)}`
        }
    }).then((res) => {
        console.log(res.data);
        return res.data;
    });

    return goals;
}