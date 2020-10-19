import http from './http'
const axiosHttp = new http

// 用户登录
export const userLogin = (params:any) => axiosHttp.axiosHttpPost("/api/user/login",params);


// 云顶之弈
// 所有英雄数据
export const getAllChess = () => axiosHttp.axiosHttpGet("http://game.gtimg.cn/images/lol/act/img/tft/js/chess.js")

// 所有英雄职业
export const getAllRace = () => axiosHttp.axiosHttpGet("http://game.gtimg.cn/images/lol/act/img/tft/js/race.js")

// 所有羁绊属性
export const getAllJob = () => axiosHttp.axiosHttpGet("http://game.gtimg.cn/images/lol/act/img/tft/js/job.js")

// 所有装备
export const getAllEquip = () => axiosHttp.axiosHttpGet("http://game.gtimg.cn/images/lol/act/img/tft/js/equip.js")