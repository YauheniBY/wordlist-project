class ApiService{
   constructor(baseUrl) {
      this.url = baseUrl
   }
   async createPost(word) {
      try {
         const request = new Request(this.url + '/posts.json', {
            method: 'post',
            body: JSON.stringify(word)
         })
         
         return useRequest(request)
      } catch (error) {
         console.error(error);
      }      
   }

   async fetchPosts(){
      try {
         const request = new Request(`${this.url}/posts.json`,{
            method: 'get'
         });          
         return useRequest(request)

      } catch(error) {
         console.log(error);
      }
   }

   async fetchPostsById(id) {
      try {
         const request = new Request(`${this.url}/posts/${id}.json`,{
            method: 'get'
         });          
         return useRequest(request)

      } catch(error) {
         console.log(error);
      }

   }
}

async function useRequest(request) {
   const response = await fetch(request);
   return await response.json();
}

export const apiService = new ApiService('https://wl-yauheni-default-rtdb.firebaseio.com');