import axios, { AxiosInstance } from 'axios'

export const client: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const setTokenToClient = (token: string) => {
  client.defaults.headers.common['Authorization'] = token
}
