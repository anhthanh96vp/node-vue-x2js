import Api from '@/api/Api'
export default {
    register(credentials) {
        console.log('credentials :', credentials);
        return Api().post('/register', credentials)
    }
    
}
