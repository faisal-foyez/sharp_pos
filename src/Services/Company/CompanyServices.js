import RootServices from '../RootServices';

const api = RootServices('company');
// const api = {
//     getAll: () => {
//         return axios.get("/company")
//     },
//     getById:(id)=>{
//         return axios.get(`/company/${id}`)
//     },
//     getByPage: (pageSize,pageNo) => {
//         return axios.get(`/company/${pageSize}/${pageNo}`)
//     },
//     add: (data) => {
//         return axios.post("/company", {...data})
//     }, 
//     update: (id,data) => {
//         return axios.put(`/company/${id}`, { ...data })
//     },
//     delete: (id) => {
//         return axios.delete(`/company/${id}`)
//     },
// }
export default api;