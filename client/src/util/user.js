import axios from 'axios'

function userSuccess(cb){
    let token = window.localStorage.getItem('user-token')
    
    if(token !== undefined && token !== '' && token !== null){
        axios
            .get('/api/v2/user/token-user',{
                headers:{
                    'token':token
                }
            })
            .then(res =>{
                cb(false,{...res.data,token})
            })
            .catch(error => {
                console.log(error.response);
                window.localStorage.removeItem('user-token')
                cb(true,null)
            })
    }else{
        cb("user-token error",null)
    }
}



export default {
    userSuccess
}