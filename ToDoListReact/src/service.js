
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API;

axios.interceptors.response.use(function (response) {
  console.log(`intercaption ${response.statusText}`);
  return response;
}, function (error) {
  console.log(`intercaption ${error}`)
  return Promise.reject(error);
});

export default {
  getTasks: async () => {
    const result = await axios.get(`/`)    
    return result.data;
  },
  addTask: async(name,id)=>{
    console.log('addTask', name)
    //TODO
    const result = await axios.post(`/`,JSON.stringify({
      id:id,
      name: name,
      isComplete: false
    }))
    
    return result;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
     const result = await axios.put(`/${id}`,JSON.stringify({
      isComplete
    }))
    console.log(result)
    return result;
  }, 
    
    deleteTask:async(id)=>{
    console.log('deleteTask')
 

    const result = await axios.delete(`/${id}`)
  
   console.log(result)
   return {};
  } 
};






















