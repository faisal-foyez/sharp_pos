import axios from '../axios';
const rootSercies = (routeName) =>{
    const services={
        getAll: () => {
            return axios.get(`/${routeName}`)
        },
        getById: (id) => {
            return axios.get(`/${routeName}/${id}`)
        },
        getByPage: (pageSize, pageNo) => {
            return axios.get(`/${routeName}/${pageSize}/${pageNo}`)
        },
        getByQuery: (query, fields) => {
            return axios.get(`/${routeName}/query`,{params:{query,fields}})
        },
        getBySearch: (columns) => {
            return axios.get(`/${routeName}/search`, { params: {columns} })
        },
        count:()=>{
            return axios.get(`/${routeName}/count`)
        },
        add: (data) => {
            return axios.post(`/${routeName}`, data)
        },
        update: (id, data) => {
            return axios.put(`/${routeName}/${id}`, data)
        },
        delete: (id) => {
            return axios.delete(`/${routeName}/${id}`)
        }
    }
    return services;
}

export default rootSercies;