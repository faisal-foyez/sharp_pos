import RootServices from '../RootServices';

const api = RootServices('customercategory');
// const api = {
//     getAll: () => {
//         return axios.get("/customercategory")
//     },
//     getById: (id) => {
//         return axios.get(`/customercategory/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/customercategory/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/customercategory", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/customercategory/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/customercategory/${id}`)
//     },
// }
export default api;