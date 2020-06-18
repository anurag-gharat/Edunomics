import axios from "axios";

export const sendMessage=async(msg,j)=>{
    let token =localStorage.getItem('token')
      const headers={
        Accept:"application/json",
        "Content-Type":"application/json",
        "x-access-token":token
    }
    var store=0
    try{
      const res=await axios.get(`http://alphabot.edunomics.in/get?msg=${msg}&j=${j}&store=${store}`,{headers:headers})
      //const res=await axios.get(`https://alphabot.pythonanywhere.com/get?msg=${msg}&j=${j}&store=${store}`,{headers:headers})
      console.log(res.data)
      return res.data
    }catch(error){
      return error
    }

    
}

