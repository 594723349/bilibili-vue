import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/v1/me',
    method: 'get',
    response: () => {
      return {
        id: 1,
        name: 'Niki'
      }
    }
  }
] as MockMethod[]

