import axios from 'axios'

const api = (rota) => axios({
    baseURL: 'http://localhost:3000/' + rota
})

export default api