import RootServices from '../RootServices';

const api = RootServices('expensecategory');
// const api = {
//     getAll: () => {
//         return axios.get("/expensecategory")
//     },
//     getById: (id) => {
//         return axios.get(`/expensecategory/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/expensecategory/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/expensecategory", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/expensecategory/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/expensecategory/${id}`)
//     },
// }
export default api;