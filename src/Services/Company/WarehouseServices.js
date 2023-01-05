import RootServices from '../RootServices';

const api = RootServices('warehouse');
// const api = {
//     getAll: () => {
//         return axios.get("/warehouse")
//     },
//     getById: (id) => {
//         return axios.get(`/warehouse/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/warehouse/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/warehouse", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/warehouse/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/warehouse/${id}`)
//     },
// }
export default api;