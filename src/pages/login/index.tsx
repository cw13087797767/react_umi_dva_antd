import React from 'react';
import { connect } from 'dva'
import style from './index.less'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import { router } from 'umi'

const Login: React.FC = (props:any) => {
    const { form, dispatch } = props
    const { getFieldDecorator } = form
    
    const handleSubmit = () => {
        form.validateFields((err:any,fieldsValue:any) => {
            if (err) {
                message.warning("请输入正确的登录信息！")
                return
            }
            const { username, password } = fieldsValue
            const params = {
                username,
                password
            }
            dispatch({
                type:'user/userLogin',
                payload:params,
                callback: (data:any) => {
                    message.success("登陆成功！")
                    router.replace("/")
                }
            })
        })
    }

    return(
        <div className={ style.bgImg }>
            <div className={style.content}>
                <p className={style.contentTitle}>React实验系统</p>
                <Form>
                    <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入登录账号！' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="登录账号"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入登录密码！' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="登录密码"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住账号</Checkbox>)}
                    <a className={style.loginFormForgot} href="">
                        忘记密码
                    </a>
                    <br/>
                    <Button type="primary" onClick={handleSubmit} className={style.loginFormButton}>
                        登录
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default  connect(({ user, loading }:any) => ({
    userInfo:user.userInfo,
    loginLoading:loading.effects['user/userLogin']
}))(Form.create()(Login))