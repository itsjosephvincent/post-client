import BaseAPIService from '@/api/BaseAPIService'

class FacebookPageService extends BaseAPIService {
    async getPages(params: object): Promise<any> {
        return await this.request(`/facebook-pages`, 'GET', params)
    }

    async getPagePosts(uuid: string): Promise<any> {
        return await this.request(`/facebook-pages/${uuid}`, 'GET')
    }

    async getNextPagePosts(params: object): Promise<any> {
        return await this.request(`/facebook-pages/next/post`, 'GET', params)
    }

    async getPostInsights(params: object): Promise<any> {
        return await this.request(`/facebook-pages/post/insights`, 'GET', params)
    }

    async getPostReactInsights(params: object): Promise<any> {
        return await this.request(`/facebook-pages/post/react/insights`, 'GET', params)
    }
}

export const facebookPageService = new FacebookPageService()