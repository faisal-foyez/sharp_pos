import RootServices from '../RootServices';

const api = RootServices('salesreturn');
// const api = {
//     getAll: () => {
//         return axios.get("/salesreturn")
//     },
//     getById: (id) => {
//         return axios.get(`/salesreturn/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/salesreturn/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/salesreturn", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/salesreturn/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/salesreturn/${id}`)
//     },
// }
export default api;