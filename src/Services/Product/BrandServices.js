import RootServices from '../RootServices';

const api = RootServices('brand');
// const api = {
//     getAll: () => {
//         return axios.get("/brand")
//     },
//     getById: (id) => {
//         return axios.get(`/brand/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/brand/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/brand", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/brand/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/brand/${id}`)
//     },
// }
export default api;