import { Config } from "../common/Config";

class Service {

    private axios = require('axios');
    private config = new Config({lang: 'si'})

    protected createRequest = async (url:string, data: any = null, method:string = "get", isLangReqest: boolean = true) => {
        let requestUrl = this.config.BASE_URL;
        if (isLangReqest) {
            requestUrl += this.config.getLanguage() + url; 
        } else {
            requestUrl += url;
        }
        
        let response = null;
        let headers = {'Authorization': 'Bearer ' + this.config.getToken()}

        response = await this.axios({
            method: method,
            url: requestUrl,
            data: data,
            headers: headers
          });
          
        return await this.formatResponse(response)
    }

    private formatResponse = (data: any) => {
        if (data) {
            return data.data
        } else {
            return []
        }
    } 
}

export {Service}