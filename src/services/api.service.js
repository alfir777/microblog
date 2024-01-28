import { firebaseUrl } from '../../settings'

class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl
    }
    async createPost(post) {
        try {
            const requet = new Request(`${this.url}/posts.json`, {
                method: 'post',
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return useRequests(request)
        } catch (error) {
            console.log(error)
        }

    }

    async fetchPosts() {
        try {
            const request = new Request(`${this.url}/posts.json`, {
                method: 'get'
            })
            return useRequests(request)
        } catch (error) {
            console.log(error)
        }
    }

    async fetchPostById(id) {
        try {
            const request = new Request(`${this.url}/posts/${id}.json`, {
                method: 'get'
            })
            return useRequests(request)
        } catch (error) {
            console.log(error)
        }
    }
}

async function useRequests(request) {
    const response = await fetch(request)
    return await response.json()
}


export const apiService = new ApiService(firebaseUrl)
