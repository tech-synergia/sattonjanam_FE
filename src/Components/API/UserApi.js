import axios from 'axios'
const axiosIns = axios.create({
    baseURL: 'https://sattonjanam-be.onrender.com/'
})
const UserApi = {
    create: (user) => {
        return axiosIns.request({
            url: '/api/v1/register',
            method: "POST",
            data: user
        })
    },
    getAll: () => {
        return axiosIns.request({
            url: "/api/v1/user/all",
            method: "GET"
        })
    },
    getSingle: (id) => {
        return axiosIns.request({
            url: `/api/v1/user/single/${id}`,
            method:'GET'
        })
    },
    delete: (id) => {
        return axiosIns.request({
            url: `/api/v1/delete/${id}`,
            method: "DELETE"
        })
    },
    update: (id) => {
        return axiosIns.request({
            url:`/api/v1/update/${id}`,
            method: "PATCH"
        })
    }
}
export default UserApi