import { userLogin } from '@/services/index'
import { message } from 'antd'

export default {
    namespace:'user',
    
    state: {
        userInfo:{}
    },

    subscription:{

    },

    reducers: {
        updateState(state: any, {payload}: any){
            return {
                ...state,
                ...payload
            }
        }
    },
    
    effects: {
        *userLogin({ payload, callback }, { call, put }) {
            const response = yield call(userLogin,payload)
            if (response && response.code === '1') {
                const res = response.data
                yield put({
                    type: 'updateState',
                    payload: {
                        userInfo:res
                    }
                })
                callback && callback(res)
            } else {
                message.error(response.msg)
            }
        }
    }
}