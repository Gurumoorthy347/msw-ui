import axios from 'axios';
const globalUrl = "http://localhost:8091/";

export const saveWebSite = async (payload) =>{
    const reqUrl = "http://localhost:8091/webSite/save";
    // return await axios.post({url: reqUrl, data: payload});

    return await fetch(reqUrl, {
        method:'POST',
        body:  JSON.stringify(payload),
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "*/*"
          }
    })
};