import axios from "axios"

export const getDataRequest = async (
    method,
    resourceUrl,
    reqData
) => {
    try{
        const response = await axios({
            method:`${method}`,
            url:`${resourceUrl}`,
            headers:{
                "content-type":"application/json",
            },
            ...(reqData && {data: reqData})
        });
        return Promise.resolve(response.data)
    }
    catch(error){
        return Promise.reject(error)
    }
}