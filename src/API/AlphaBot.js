export const sendMessage=(msg,j)=>{
    var requestOptions = {
        method: 'GET',
      }; 
    return fetch('http://alphabot.pythonanywhere.com/get?msg=hi&j=1',requestOptions)
    .then(response=>{ return response})
    .catch(error=>{return error})

}

