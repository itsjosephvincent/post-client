import BaseAPIService from '@/api/BaseAPIService'

class FacebookPageService extends BaseAPIService {
    async getPages(params: object): Promise<any> {
        return await this.request(`/facebook-pages`, 'GET', params)
    }
}

export const facebookPageService = new FacebookPageService()