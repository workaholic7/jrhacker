// export const BASE_URL = "http://192.168.1.91:8080";
// export const DATE_FORMAT = "DD/MM/YYYY";
export const CONSTANTS = {
    USER_HEADER_TEXT: "Logged in user profile",

}

export const BASE_URL="http://ocalhost:8080";

export const REST_API={
    GET_USER_BY_ID:{
        url:"/user/{id}",
        method: "GET"
    },
    GET_USERS_LIST:{
        url:"/user",
        method:"GET"
    }
}