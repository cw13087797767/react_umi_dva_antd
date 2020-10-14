import http from './http'
const axiosHttp = new http

// 用户登录
export const userLogin = (params:any) => axiosHttp.axiosHttpPost("/api/user/login",params);

