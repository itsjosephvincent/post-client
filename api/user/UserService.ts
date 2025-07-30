import BaseAPIService from '@/api/BaseAPIService'

class UserService extends BaseAPIService {
    async getUser(uuid: string): Promise<any> {
        return await this.request(`/users/${uuid}`, 'GET')
    }

    async getCurrentUser(): Promise<any> {
        return await this.request(`/users/current/user`, 'GET')
    }

    async createUser(params: object): Promise<any> {
        return await this.request(`/users`, 'POST', params)
    }

    async updateUser(params: object, uuid: string): Promise<any> {
        return await this.request(`/users/${uuid}`, 'PUT', params)
    }

    async updateUserPassword(params: object, uuid: string): Promise<any> {
        return await this.request(`/users/${uuid}/update-password`, 'PUT', params)
    }
}

export const userService = new UserService()