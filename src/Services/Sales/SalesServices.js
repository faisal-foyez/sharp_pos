import RootServices from '../RootServices';

const api = RootServices('sales');
// const api = {
//     getAll: () => {
//         return axios.get("/sales")
//     },
//     getById: (id) => {
//         return axios.get(`/sales/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/sales/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/sales", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/sales/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/sales/${id}`)
//     },
// }
export default api;