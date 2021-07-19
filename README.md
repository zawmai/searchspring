# SearchSpring Interview Assigment

Made with create-react-app. Read more on how to run the app [here](https://github.com/facebook/create-react-app#create-react-app--).

**Objective:** Build a Search Page with Pagination with [SearchSpring's API](https://searchspring.zendesk.com/hc/en-us/sections/115000119223-Search-API).  

**Sample Request URL for the Search API:**  
http://scmq7n.a.searchspring.io/api/search/search.json?siteId=scmq7n&q=jeans&resultsFormat=native&page=2  

**Request Query Parameters to Use:** "siteId", "q", "resultsFormat", and "page"  

**Note**:  

- Look at full-integration sample [here](http://try.searchspring.com/search?q=jeans)
- Filter and sorting features not required.
- Use "resultFormat=native" query parameter to get response body as JSON.

## UI Requirements

### Components

- TextInput Box w/ a Search button next to it
- Grid Container of Product Cards
- Each Product Card Contains the following Elements:
  - Product Name
  - Product ThumnailImage
  - Product Price
  - Product MSRP
- Pagination
  - Previous Page Button
  - 1,2,3...N Pages Buttons
  - Next Page Button

### Logic

- If on the first page, then hide or disable the previous-page button
- If on the last page, then hide or disable the next-page button.
- When N-Page is clicked, then make a request with "page" parameter for the desired page.

### Wireframe

![Made with Inkscape software.](https://user-images.githubusercontent.com/10764631/126089561-aaf13810-0a44-405a-bbca-e98d43e9389b.png)
