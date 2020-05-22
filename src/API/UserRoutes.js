export const signupuser=user=>{

    var requestOptions = {
        method: 'POST',
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
      },
        body:JSON.stringify(user),
        redirect: 'follow'
      };
      return fetch("http://wenestor.rachitpahwa.codes/api/user/signup", requestOptions)
        .then(response =>response.json())
        .then(result =>{return result})
        .catch(error => console.log('error', error));
}


export const login = user =>{

var requestOptions = {
  method: 'POST',
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json"
},
  body: JSON.stringify(user),
};
  return fetch("http://wenestor.rachitpahwa.codes/api/user/login", requestOptions)
  .then(response =>response.json())
  .then(result => {return result})
  .catch(error => console.log('error', error));
}



export const applyNow=userDetails=>{
  
  var myHeaders = new Headers();

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(userDetails),
    redirect: 'follow'
  }
  fetch("localhost:3000/api/core/careerApplicant", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}