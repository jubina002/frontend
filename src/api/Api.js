import axios from "axios";

const Api=axios.create({
    baseURL:"https://flybuy-backend-tcq2.onrender.com",
    withCredentials:true,
    headers:{
        'Content-Type':'multipart/form-data'
    }

});
const config = {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
    }
}

//test /route

export const testApi=()=> Api.get("/");

// register route
export const registerApi= (data) =>Api.post("/api/users/register",data);

// login route
export const loginApi= (data) => Api.post("api/users/login/", data);

//product create route
export const productCreateApi = (data) => Api.post("/api/products/create", data, config)

export const getAllProductsApi = () => Api.get("/api/products/get_products")

export const getSingleProductApi = (id) => Api.get(`/api/products/get_product/${id}`)

export const updateProductApi = (id, data) => Api.put(`/api/products/update_product/${id}`, data, config)
//delete product route
export const deleteProductApi = (id) => Api.delete(`/api/products/delete_product/${id}`, config)

export const createOrderApi = (data) => Api.post("/api/orders/create", data, config)

export const getMyOrdersApi = () => Api.get("/api/orders/myorders", config)

export const getAllOrdersApi = () => Api.get("/api/orders/allorders", config)

//update order status route
export const updateOrderStatusApi = (id, data) => Api.put(`/api/orders/change_status/${id}`, config)

//search produtc route
export const searchProductsApi = (query) => Api.get(`/api/products/search/${query}`)

//count products
export const countProductsApi = () => Api.get("/api/products/get_count")

//forgot password
export const forgotPasswordApi = (data) => Api.post("/api/users/forgot_password", data)









