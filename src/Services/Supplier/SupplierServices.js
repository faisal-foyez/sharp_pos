import RootServices from '../RootServices';

const api = RootServices('supplier');
// const api = {
//     getAll: () => {
//         return axios.get("/supplier")
//     },
//     getById: (id) => {
//         return axios.get(`/supplier/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/supplier/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/supplier", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/supplier/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/supplier/${id}`)
//     },
// }
export default api;