import RootServices from '../RootServices';

const api = RootServices('expense');
// const api = {
//     getAll: () => {
//         return axios.get("/expense")
//     },
//     getById: (id) => {
//         return axios.get(`/expense/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/expense/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/expense", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/expense/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/expense/${id}`)
//     },
// }
export default api;