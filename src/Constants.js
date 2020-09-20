export const CONSTANTS = {
    USER_HEADER_TEXT: "Logged in user profile",
}

export const BASE_URL = "http://15.206.106.35/";

export const REST_API = {
    GET_USER_BY_ID: {
        url: "user/{id}"
    },
    GET_USERS_LIST: {
        url: "user",
        method: "GET"
    },
    CREATE_USER: {
        url: "user",
        method: "POST"
    },
    CHANGE_ROLE:{
        url:"user/updaterole",
        method:"POST",
    }
}