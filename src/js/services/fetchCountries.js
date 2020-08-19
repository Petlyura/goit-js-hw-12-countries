const baseUrl = 'https://restcountries.eu/rest/v2/';

export default {
  query: '',
  fetchCountries() {
    const requestParameters = `name/${this.query}`;

    return fetch(baseUrl + requestParameters)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(
          `Error ${response.status} while fetching "${this.query}"`,
        );
      })
      .catch(error => console.log(error));
  },

  get searchQuery() {
    return this.query;
  },

  set searchQuery(string) {
    this.query = string;
  },
};
