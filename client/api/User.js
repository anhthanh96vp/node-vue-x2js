import Api from '@/api/Api'
export default {
    register(data) {
        return Api().post('/user/register', data)
    }
}
