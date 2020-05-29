export const sendMessage=(msg,j)=>{
    var requestOptions = {
        method: 'GET',
      };
    return fetch(`http://alphabot.pythonanywhere.com/get?msg=${msg}&j=${j}`,requestOptions)
    .then(response=>{ return response.text()})
    .catch(error=>{return error})

}

