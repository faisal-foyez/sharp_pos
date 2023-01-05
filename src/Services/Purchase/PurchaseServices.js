import RootServices from '../RootServices';

const api = RootServices('purchase');
// const api = {
//     getAll: () => {
//         return axios.get("/purchase")
//     },
//     getById: (id) => {
//         return axios.get(`/purchase/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/purchase/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/purchase", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/purchase/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/purchase/${id}`)
//     },
// }
export default api;