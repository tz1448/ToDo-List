import axios from 'axios';

const apiUrl = "http://localhost:5094"
axios.defaults.baseURL  = 'http://localhost:5094';



axios.interceptors.response.use(
  response => response,
  error => {
     console.log(error)
     return error
  }
);


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
    console.log(result)
    return {};
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
     const result = await axios.put(`/${id}`,JSON.stringify({
      isComplete
    }))
    console.log(result)
    return {};
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
 
    console.log('setCompleted', {id, isComplete})
    const result = await axios.delete(`/${id}`)
  
   console.log(result)
   return {};

 
  }
};
