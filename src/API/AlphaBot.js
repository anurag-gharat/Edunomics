import axios from "axios";

export const sendMessage=async(msg,j)=>{
    let token =localStorage.getItem('token')
      const headers={
        Accept:"application/json",
        "Content-Type":"application/json",
        "x-access-token":token
    }
    var store=0
    // return fetch(`https://alphabot.pythonanywhere.com/get?msg=${msg}&j=${j}&store=${store}`,requestOptions)
    // .then(response=>{ console.log(response.json())})
    // .catch(error=>{return error})
    try{
      const res=await axios.get(`https://alphabot.pythonanywhere.com/get?msg=${msg}&j=${j}&store=${store}`,{headers:headers})
      return res.data
    }catch(error){
      return error
    }

    
}

