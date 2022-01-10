class Config {
    // public BASE_URL = "http://127.0.0.1:8000/news/api/v1/";
    public BASE_URL = "https://api.news.uchdevelopment.com/v1/";
    private language = 'en';
    private token = null;

    constructor (config: any) {
        if (config.lang) {
            this.setLanguage(config.lang);
        }
    }

    public setLanguage = (lang: string) => {
        this.language = lang;
    }

    public getLanguage = () => {
        return this.language + '/';
    }

    public setToken = (token: any) => {
        this.token = token;
    }

    public getToken = () => {
        this.setToken(localStorage.getItem('_token'))
        return this.token
    }

}

export { Config }