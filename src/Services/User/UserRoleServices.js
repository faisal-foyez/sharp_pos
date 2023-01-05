import RootServices from '../RootServices';

const api = RootServices('userrole');
// const api = {
//     getAll: () => {
//         return axios.get("/userrole")
//     },
//     getById: (id) => {
//         return axios.get(`/userrole/${id}`)
//     },
//     getByPage: (pageSize, pageNo) => {
//         return axios.get(`/userrole/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/userrole", { ...data })
//     },
//     update: (id, data) => {
//         return axios.put(`/userrole/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/userrole/${id}`)
//     },
// }
export default api;