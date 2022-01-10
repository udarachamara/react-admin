import { Service } from "./Service";

class TagService extends Service {

    public getAllTags = async () => {
        return await this.createRequest('tags')
    }

    public getTagById = async (id: number) => {
        return await this.createRequest('tags/' + id)
    }

}

export {TagService}