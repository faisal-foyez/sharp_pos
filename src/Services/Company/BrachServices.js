import RootServices from '../RootServices';

const api = RootServices('branch');

// const api = {
//     getAll: () => {
//         return axios.get("/branch")
//     },
//     getById: (id) => {
//         return axios.get(`/branch/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/branch/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/branch", { ...data })
//     },
//     update: (id, data) => { 
//         return axios.put(`/branch/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/branch/${id}`)
//     },
// }
export default api;