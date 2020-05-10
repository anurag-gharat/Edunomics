// export const getAllBlogs=()=>{
//     var requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//       };
      
//       return fetch("http://wenestor.rachitpahwa.codes/api/blog", requestOptions)
//         .then(response => response.json())
//         .then(result => {return result})
//         .catch(error => console.log('error', error));
// }


export const getAllBlogs=()=>{
    return fetch("http://wenestor.rachitpahwa.codes/api/blog",{
        method:"GET"
    }).then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err);
        
    })
}


export const getAllCategories=()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };    
    return fetch("http://wenestor.rachitpahwa.codes/api/category", requestOptions)
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}
