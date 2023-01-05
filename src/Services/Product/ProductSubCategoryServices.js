import RootServices from '../RootServices';

const api = RootServices('productsubcategory');
// const api = {
//     getAll: () => {
//         return axios.get("/productsubcategory")
//     },
//     getById: (id) => {
//         return axios.get(`/productsubcategory/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/productsubcategory/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/productsubcategory", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/productsubcategory/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/productsubcategory/${id}`)
//     },
// }
export default api;