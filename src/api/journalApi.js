import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-journalapp-ca424-default-rtdb.europe-west1.firebasedatabase.app'
})

export default journalApi