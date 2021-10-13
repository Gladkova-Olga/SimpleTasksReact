import axios, {AxiosResponse} from "axios";

type ResponseType = {
    yourBody: {success: boolean},
    errorText: string
    info: string
}

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})


export const requestsAPI = {
    postRequest(success: boolean) {
        return instance.post<{success: boolean}, AxiosResponse<ResponseType>>(`auth/test`, {success})
        // return instance.post<ResponseType>(`auth/test`, {success} as any)
    }
}


//auth/test, body: {success: true},