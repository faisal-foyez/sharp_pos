import RootServices from '../RootServices';

const api = RootServices('purchasereturn');
// const api = {
//     getAll: () => {
//         return axios.get("/purchasereturn")
//     },
//     getById: (id) => {
//         return axios.get(`/purchasereturn/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/purchasereturn/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/purchasereturn", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/purchasereturn/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/purchasereturn/${id}`)
//     },
// }
export default api;