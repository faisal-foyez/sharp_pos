import RootServices from '../RootServices';

const api = RootServices('purchasereturndetails');
// const api = {
//     getAll: () => {
//         return axios.get("/purchasereturndetails")
//     },
//     getById: (id) => {
//         return axios.get(`/purchasereturndetails/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/purchasereturndetails/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/purchasereturndetails", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/purchasereturndetails/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/purchasereturndetails/${id}`)
//     },
// }
export default api;