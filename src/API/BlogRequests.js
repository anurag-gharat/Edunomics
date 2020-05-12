//fetch call to get all the blogs
export const getAllBlogs=()=>{
    return fetch("http://wenestor.rachitpahwa.codes/api/blog",{
        method:"GET"
    }).then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log("erris",err);
        
    })
}

//get request to get all categories
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


//post request to create
export const createABlog=(blog)=>{

    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(blog),
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        redirect: 'follow'
    };

return fetch("http://wenestor.rachitpahwa.codes/api/blog", requestOptions)
  .then(response => response.json())
  .then(result => {return result})
  .catch(error => console.log('error', error));
}


export const getAllCategorizedBlogs=(id)=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      return fetch(`http://wenestor.rachitpahwa.codes/api/blog/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => {return result})
        .catch(error => console.log('error', error));
}