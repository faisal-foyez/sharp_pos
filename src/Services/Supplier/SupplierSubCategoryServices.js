import RootServices from '../RootServices';

const api = RootServices('suppliersubcategory');
// const api = {
//     getAll: () => {
//         return axios.get("/suppliersubcategory")
//     },
//     getById: (id) => {
//         return axios.get(`/suppliersubcategory/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/suppliersubcategory/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/suppliersubcategory", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/suppliersubcategory/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/suppliersubcategory/${id}`)
//     },
// }
export default api;