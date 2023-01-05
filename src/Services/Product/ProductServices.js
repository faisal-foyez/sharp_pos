import RootServices from '../RootServices';

const api = RootServices('product');
// const api = {
//     getAll: () => {
//         return axios.get("/product")
//     },
//     getById: (id) => {
//         return axios.get(`/product/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/product/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/product", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/product/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/product/${id}`)
//     },
// }
export default api;