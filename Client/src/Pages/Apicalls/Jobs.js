import { axiosinstance } from  "../index"


export const Addjobs=async(payload)=>{


    try {
        const response= await axiosinstance.post("http://localhost:7777/jobs/add-jobs",payload)
        return response.data

    } catch (error) {
        
        return error
    }

}

export const GetAlljobs =async()=>{

    try {
        const response =await axiosinstance.get("http://localhost:7777/jobs/get-jobs")
        return response.data
        
    } catch (error) {
        
        
        return error
    }
}

export const Deletejobs =async(id)=>{

    try {
        const response =await axiosinstance.post("http://localhost:7777/jobs/delete-jobs",id)
        return response.data
        
    } catch (error) {
        
        return error
    }
}


export const UpdatejobsList =async(payload)=>{

    try {
        const response=await axiosinstance.post("http://localhost:7777/jobs/Edit-jobs",payload)
        return response.data

    } catch (error) {
        return error
    }
} 


// get particular Id


export const GetjobsById = async (id) => {
    try {
        const response = await axiosinstance.get(`http://localhost:7777/jobs/get-jobs-by-id/${id}`)
  
        return response.data;
        
    } catch (error) {
        return error.response;
    }
  }
