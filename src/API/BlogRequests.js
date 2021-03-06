import axios from 'axios'

//fetch call to get all the blogs
export const getAllBlogs=()=>{
    return fetch("https://edunomics.in/api/blog",{
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
    return fetch("https://edunomics.in/api/category", requestOptions)
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
      
      return fetch(`https://edunomics.in/api/blog/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => {return result})
        .catch(error => console.log('error', error));
}


//api for getting a preferred blog
export const getArticle=(query,search)=>{
    console.log(query,search)
    var requestOptions={
        method: 'GET'
    }
    return fetch(`https://edunomics.in/api/core/categoryBlog/${query}/${search}`, requestOptions)
    .then(response =>response.json())
    .then(response =>{
        console.log(response)
        return response})
    .catch(error => {return error});

}
//api for suggestion of blogs
export const getSuggestions=()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      return fetch("https://edunomics.in/api/core/suggestions", requestOptions)
        .then(response => response.json())
        .then(result => {return result})
        .catch(error => {return error});
}


//api to get video link
export const getVideo=async()=>{
    try {
        const res =await axios.get('')
        return res
    } catch (error) {
        console.log(error)
    }
}