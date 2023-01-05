import RootServices from '../RootServices';

const api = RootServices('group');
// const api = {
//     getAll: () => {
//         return axios.get("/group")
//     },
//     getById: (id) => {
//         return axios.get(`/group/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/group/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/group", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/group/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/group/${id}`)
//     },
// }
export default api;