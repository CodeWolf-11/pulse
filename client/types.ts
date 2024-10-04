type ChatGroupType = {
    id: string,
    user_id: number,
    title: string,
    passcode: string,
    created_at: string
}

type GroupChatUserType = {
    id: number,
    name: string,
    group_id: string
    created_at: string
}

type GroupUserPayloadType = {
    name: string,
    passcode: string,
}

type MessageType = {
    id: string,
    name: string,
    message: string,
    created_at: string,
    group_id: string
}