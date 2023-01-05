import RootServices from '../RootServices';

const api = RootServices('productcategory');
// const api = {
//     getAll: () => {
//         return axios.get("/productcategory")
//     },
//     getById: (id) => {
//         return axios.get(`/productcategory/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/productcategory/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/productcategory", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/productcategory/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/productcategory/${id}`)
//     },
// }
export default api;