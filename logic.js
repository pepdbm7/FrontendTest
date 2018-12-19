const logic = {
    url: "https://api.github.com",

    /**
    * Searches for user information 
    * @param {String} username or username/repos 
    * @returns {Promise <Array> of 2 objects} 
    */
  
    async callToAPI (query) {
        
        let response = await fetch( `${this.url}/users/${query}`, {
            method: 'GET'
        })
        let json = await response.json();

        return json;
    },

    async getUser (query) {

        if (typeof query !== "string") throw TypeError(query + " is not a string");

        if (!query.trim().length) throw Error("query is empty or blank");
 
        let userQuery = await this.callToAPI(query);

        if (userQuery.message === 'Not Found') throw Error(`User ${query} was not found`);

        return userQuery;
    },

    async getRepositories (query) {

        if (typeof query !== "string") throw TypeError(query + " is not a string");

        if (!query.trim().length) throw Error("query is empty or blank");

        const route = `${query}/repos`;
  
        let repoQuery = await this.callToAPI(route);

        return repoQuery;
    }
  }
  