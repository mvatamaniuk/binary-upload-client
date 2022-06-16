import { IAxiosFilesGet } from '../types/responses/IAxiosFilesGet'
import { api } from './axios.instance'

export const filesApi = () => {
  return {
    upload: async (formData: FormData) =>
      await api.post('/files', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }),

    get: async () => await api.get<IAxiosFilesGet>('/files/get'),
  }
}
