import axios, { AxiosResponse } from "axios"

export const fetchData = (): Promise<AxiosResponse<any, any>> =>
    axios.get("https://mipaginaweb.com/json").then((res) => res.data)
