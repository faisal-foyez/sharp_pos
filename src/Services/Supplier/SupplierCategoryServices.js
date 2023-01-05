import RootServices from '../RootServices';

const api = RootServices('suppliercategory');
// const api = {
//     getAll: () => {
//         return axios.get("/suppliercategory")
//     },
//     getById: (id) => {
//         return axios.get(`/suppliercategory/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/suppliercategory/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/suppliercategory", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/suppliercategory/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/suppliercategory/${id}`)
//     },
// }
export default api;