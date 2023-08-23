import axios from 'axios'

const axiosIns = axios.create({
    baseURL: 'http://localhost:4500'
})

const UserApi = {
    create: (user) => {
        return axiosIns.request({
            url: '/api/v1/register',
            method: "POST",
            data: user
        })
    }
}

export default UserApi