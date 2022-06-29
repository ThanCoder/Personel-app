import { defineStore } from 'pinia'


const userStore = defineStore('user',{
    state:() => ({
        isLogin:false,
        user:null,
        token:null
    }),
    actions:{
        //
        setLogin(payload){
            this.isLogin = payload;
        },
        setUser(user){
            this.user = user;
        },
        setToken(data){
            this.token = data;
        }


        //
    }
})
export default userStore;