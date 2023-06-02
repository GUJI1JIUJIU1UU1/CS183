import React from "react"
import axios from "axios"
import { ProductCartAPI } from "../../request/api"

export default class Index extends React.Component {
    state = {
        //购物车内商品数据
        cartProduct:[]
    }

    //获取购物车内商品数据的方法
    async getCartProduct(){
        const res = await axios.get("http://localhost:3000/Home")
        //console.log("购物车内商品：", res)
        this.setState(() => {
            return {
                cartProduct: res.data.body 
            }
        })
    }
    componentDidMount() {
        this.getCartProduct()
        ProductCartAPI().then(result =>{
            console.log("购物车内商品：", result)
        })

    }
    
    render() {
        return (
            <div className="index">
                <button></button>
            </div>
        )
    }
}