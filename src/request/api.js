import service from "./index";
export function LoginAPI(data) {
    return service.request({
        //根据接口写
        // url:"/devApi/login",
        url: "/",
        method: "post",
        data: data         //请求类型为 post 时
        //params:data       请求类型为 get 时
    })
}


//export const ProductCartAPI = () => service.get("/home",params)