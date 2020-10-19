import { getAllChess, getAllEquip, getAllJob, getAllRace } from '@/services'
import { message } from 'antd'

export default {

    namespace:'ydzy',

    state: {
        allChess:[],
        allEquip:[],
        allJob:[],
        allRace:[]
    },

    reducers: {
        updateState(state: any, { payload }: any){
            return {
                ...state,
                ...payload
            }
        }
    },

    effects: {
        *getAllChess({ payload, callback }:any, { call, put }: any){
            const response = yield call(getAllChess)
            if (response) {
                yield put({
                    type: 'updateState',
                    payload: {
                        allChess:response.data
                    }
                })
                callback && callback(response.data)
            } else {
                message.error("获取数据失败，请稍后再试！")
            }
        },
        *getAllEquip({ payload, callback }:any, { call, put }: any){
            const response = yield call(getAllEquip)
            if (response) {
                yield put({
                    type: 'updateState',
                    payload: {
                        allEquip:response
                    }
                })
                callback && callback(response)
            } else {
                message.error("获取数据失败，请稍后再试！")
            }
        },
        *getAllJob({ payload, callback }:any, { call, put }: any){
            const response = yield call(getAllJob)
            if (response) {
                yield put({
                    type: 'updateState',
                    payload: {
                        allJob:response
                    }
                })
                callback && callback(response)
            } else {
                message.error("获取数据失败，请稍后再试！")
            }
        },
        *getAllRace({ payload, callback }:any, { call, put }: any){
            const response = yield call(getAllRace)
            if (response) {
                yield put({
                    type: 'updateState',
                    payload: {
                        allRace:response
                    }
                })
                callback && callback(response)
            } else {
                message.error("获取数据失败，请稍后再试！")
            }
        },

    }
}