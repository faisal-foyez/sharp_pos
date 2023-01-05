import RootServices from '../RootServices';

const api = RootServices('customer');
// const api = {
//     getAll: () => {
//         return axios.get("/customer")
//     },
//     getById: (id) => {
//         return axios.get(`/customer/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/customer/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/customer", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/customer/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/customer/${id}`)
//     },
// }
export default api;