import BaseAPIService from '@/api/BaseAPIService'

class FacebookPageService extends BaseAPIService {
    async getPages(params: object): Promise<any> {
        return await this.request(`/facebook-pages`, 'GET', params)
    }

    async getPagePosts(uuid: string): Promise<any> {
        return await this.request(`/facebook-pages/${uuid}/posts`, 'GET')
    }

    async getNextPagePosts(params: object): Promise<any> {
        return await this.request(`/facebook-pages/next/new/posts`, 'GET', params)
    }

    async getPreviousPagePosts(params: object): Promise<any> {
        return await this.request(`/facebook-pages/previous/old/posts`, 'GET', params)
    }
}

export const facebookPageService = new FacebookPageService()