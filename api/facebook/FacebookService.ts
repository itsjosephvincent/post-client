import BaseAPIService from '@/api/BaseAPIService'

class FacebookService extends BaseAPIService {
    async generateToken(params: object): Promise<any> {
        return await this.request(`/facebook`, 'GET', params)
    }
}

export const facebookService = new FacebookService()