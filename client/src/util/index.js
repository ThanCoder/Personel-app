import user from './user'


function setZero(num){

   return num < 10 ? '0'+num : num;
}

function parseDate(time,is24=true){
   let date = new Date(time)
   let hours = setZero(date.getHours());
   let minutes = setZero(date.getMinutes());
   
   date = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}-${hours}:${minutes}`
   return date;
}


export default {
   user,
   parseDate
}