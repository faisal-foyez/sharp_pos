import RootServices from '../RootServices';

const api = RootServices('user');
// const api = {
//     getAll: () => {
//         return axios.get("/user")
//     },
//     getById: (id) => {
//         return axios.get(`/user/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/user/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/user", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/user/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/user/${id}`)
//     },
// }
export default api;