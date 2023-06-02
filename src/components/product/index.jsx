import React, { Component,useEffect } from 'react'
import { ProductCartAPI } from '../../request/api'
export default class ProductCart extends Component {
    componentDidMount() {
        this.getCartProduct()
        // Axios 中的 GET
        
    }
    //获取购物车内商品
    async getCartProduct(){
        axios.get('/home').then((res) => {
            console.log("购物车内商品：",res)
        })
        
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}