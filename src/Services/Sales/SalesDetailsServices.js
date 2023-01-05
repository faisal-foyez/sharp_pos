import RootServices from '../RootServices';

const api = RootServices('salesdetails');
// const api = {
//     getAll: () => {
//         return axios.get("/salesdetails")
//     },
//     getById: (id) => {
//         return axios.get(`/salesdetails/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/salesdetails/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/salesdetails", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/salesdetails/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/salesdetails/${id}`)
//     },
// }
export default api;