import RootServices from '../RootServices';

const api = RootServices('salesreturndetails');
// const api = {
//     getAll: () => {
//         return axios.get("/salesreturndetails")
//     },
//     getById: (id) => {
//         return axios.get(`/salesreturndetails/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/salesreturndetails/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/salesreturndetails", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/salesreturndetails/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/salesreturndetails/${id}`)
//     },
// }
export default api;