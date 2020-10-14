import axios from 'axios'

export default  class http {
    axiosHttpGet(url:any){
        return new Promise((resolve:any, reject:any) => {
            axios.get(url).then((res:any) => {
                resolve(res.data)
            }).catch((err:any) => {
                reject(err)
            })
        })
    }

    axiosHttpPost(url:any,params:any){
        return new Promise((resolve:any, reject:any) => {
            axios.post(url,params).then((res:any) => {
                resolve(res.data)
            }).catch((err:any) => {
                reject(err)
            })
        })
    }
}