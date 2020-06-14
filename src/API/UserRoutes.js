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
  console.log(userDetails)
  var requestOptions = {
    method: 'POST',
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
  },
    body: JSON.stringify(userDetails),
    redirect: 'follow'
  };
  
  return fetch("https://edunomics.herokuapp.com/api/core/careerApplicant", requestOptions)
    .then(response =>console.log(response.json()))
    .then(result => {return result})
    .catch(error => {return error})
}

//all the routes for resume

export const getResume=(userId)=>{
  var requestOptions = {
    method: 'GET',
  };
  console.log(userId)
  return fetch(`https://edunomics.in/api/resume/${userId}`, requestOptions)
    .then(response => response.json())
    .then(result =>{return result})
    .catch(error =>{return error});
}

export const updateResume=(profile)=>{
  console.log(profile)
  const userId='5ed369bd296a7f283050dc1e'

  var requestOptions = {
    method: 'PUT',
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
  },
    body:JSON.stringify(profile),
  };

  return fetch(`https://edunomics.in/api/resume/${userId}`, requestOptions)
  .then(response => response.json())
  .then(result => {return result})
  .catch(error => {return error});
}