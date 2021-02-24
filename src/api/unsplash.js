import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID KJjbl1x98G2MlmjjIvlkArSta3TWqFgwkxTe4MUOs4M'
    }
})