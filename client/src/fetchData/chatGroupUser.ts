import { CHAT_GROUP_USER } from "@/lib/apiEndpoints";


export async function fetchChatGroupUser(id: string) {
    const res = await fetch(CHAT_GROUP_USER + `?group_id=${id}`, {
        next: {
            tags: ["user"]
        }
    });

    console.log(res);

    if (!res.ok) {
        throw new Error("Failed to get data");
    }

    const response = await res.json();

    if (response?.data) {
        return response?.data
    }

    return [];
}