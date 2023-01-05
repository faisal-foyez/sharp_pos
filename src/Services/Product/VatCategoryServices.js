import RootServices from '../RootServices';

const api = RootServices('vatcategory');
// const api = {
//     getAll: () => {
//         return axios.get("/vatcategory")
//     },
//     getById: (id) => {
//         return axios.get(`/vatcategory/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/vatcategory/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/vatcategory", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/vatcategory/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/vatcategory/${id}`)
//     },
// }
export default api;