import RootServices from '../RootServices';

const api = RootServices('expensesubcategory');
// const api = {
//     getAll: () => {
//         return axios.get("/expensesubcategory")
//     },
//     getById: (id) => {
//         return axios.get(`/expensesubcategory/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/expensesubcategory/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/expensesubcategory", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/expensesubcategory/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/expensesubcategory/${id}`)
//     },
// }
export default api;