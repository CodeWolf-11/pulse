import ENV from "./env";

export const BASE_URL = ENV.BACKEND_URL;
export const API_URL = `${BASE_URL}/api`;
export const LOGIN_URL = `${API_URL}/auth/login`;
export const CHAT_GROUP_URL = `${API_URL}/chat-group`
export const CHAT_GROUP_USER = `${API_URL}/chat-group-users`
export const CHAT_MESSAGE_USER = `${API_URL}/messages`