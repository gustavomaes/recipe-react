import axios from 'axios'

const Api = base => {

    const client = axios.create({
        baseURL: base
    })

    
    const getAuthHeader = () => {
        const token = localStorage.getItem('token')
        return {
            headers: {
                'x-access-token': token
            }
        }
    }

    const get = endpoint => client.get(endpoint, getAuthHeader())
    const create = (endpoint, data) => client.post(endpoint, data, getAuthHeader())
    const update = (endpoint, data) => client.put(endpoint, data, getAuthHeader())
    const remove = endpoint => client.delete(endpoint, getAuthHeader())

    return {
        //User
        getUserById: id => get(`/user/${id}`),
        getUsers: () => get(`user`),
        updateUser: (id, data) => update(`user/${id}`, data),
        updatePasswd: (data) => update(`user/password`, data),
        removeUser: id => remove(`user/${id}`)
    }
}

export default Api