import Api from '@/services/Api'
export default {
    register(credentials) {
        console.log('credentials :', credentials);
        return Api().post('/register', credentials)
    }
    
}
