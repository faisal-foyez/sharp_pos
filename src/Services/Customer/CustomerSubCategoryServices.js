import RootServices from '../RootServices';

const api = RootServices('customersubcategory');
// const api = {
//     getAll: () => {
//         return axios.get("/customersubcategory")
//     },
//     getById: (id) => {
//         return axios.get(`/customersubcategory/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/customersubcategory/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/customersubcategory", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/customersubcategory/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/customersubcategory/${id}`)
//     },
// }
export default api;