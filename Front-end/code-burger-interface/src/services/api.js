import axios from 'axios'

const apiCodeBurger = axios.create({
    baseURL: 'http://localhost:7000'
})

export default apiCodeBurger