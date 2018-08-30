import Api from '@/helpers/rest/Api'
export default {
    register(data) {
        return Api().post('/auth/register', data)
    },
    login(data){
        return Api().post('/auth/login', data)
    }
}
