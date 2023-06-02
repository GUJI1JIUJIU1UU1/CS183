import React, { Component } from 'react'
import { Login } from './Login'
import { LoginAPI } from '../../request/api'
export default class Login extends Component {
    componentDidMount() {
        //完整的网络请求
        onFinish = values => {
            // console.log('数据：'+JSON.stringify(values))
            LoginAPI({
                name: values.name,
                password: values.password
            }).then(res => {
                //用res（服务器）里的数据
                console.log('服务器', res)
                if (res.status === 200) {
                    if (res.data.code === 0) {
                        // console.log('服务器内用户信息',res.data.data.name)

                        //设置存储,把用户名存储在key中
                        localStorage.setItem("key", res.data.data.name);

                        //把用户名存储在key中
                        // console.log(localStorage.setItem("key", values.name))
                        //路由跳转
                        this.props.history.push('/admin');
                    } else {
                        message.error('服务器错误', res.data.message)
                    }
                } else {
                    message.info("网络错误")
                }
            }).catch(err => {
                console.log(err)
            })

    }
    }
    render() {
        return (
            <div className='index'>
                
            </div>
        )
    }

}