import { CHAT_MESSAGE_USER } from "@/lib/apiEndpoints";

export async function fetchMessagesGroup(group_id: string) {
    const res = await fetch(CHAT_MESSAGE_USER + `/${group_id}`, {
        cache: "no-cache",
    });

    if (!res.ok) {
        throw new Error("Failed to get data");
    }

    const response = await res.json();

    if (response?.data) {
        return response?.messages
    }

    return [];
}