import * as React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Section from '../components/Section';
import SearchBar from '../components/SearchBar';
import Gallery from '../components/Gallery';
import PageNav from '../components/PageNav';

/** MaterialUI style hook to make CSS rules object */
const useStyles = makeStyles({
  root: {
    padding: '40px 20px 40px 20px',
  }
});

/**
 * Search page component with search bar, product gallery and pagination.
 * 
 * @state {
 *  data: object
 *  params: ojbect
 * } 
 * @param {*} props 
 * @returns React JSX Component
 */
function Search(props) {

  /** State: API response body data */
  const [data, setData] = useState({}); 
  /** State: API request url parameters object */
  const [params, setParams] = useState({ 
    "siteId": "scmq7n",
    "resultsFormat": "native",
    "q": "",
    "page": "1"
  })

  /** Effect Hook: Perform GET request when parameters object changes */
  useEffect(() =>{
    const base = "https://" + params.siteId + ".a.searchspring.io/api/search/search.json?";
    const reqUrl = base + (new URLSearchParams(params)).toString();
    fetch(reqUrl)
      .then(res => res.json())
      .then((jsonData) => {
        setData(jsonData);
      });
  }, [params]);

  /** Callback function: Set q property in parameters object on valid submit event */
  const handleSubmit = (inputs, event) => {
    setParams({
      ...params,
      "page": 1,
      "q": inputs.searchText,
    });
  };

  /** Callback function: Set page property in parameters object on page change */
  const handlePageChange = (event, page) => {
    setParams({
      ...params,
      "page": page,
    })
  };

  /** Create CSS style strings with MaterialUI CSS rules */
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Section>
        <SearchBar onValidSubmit={handleSubmit} onInvalidSubmit={null} />
      </Section>
      <Section>
        <Gallery products={data.results}/>
      </Section>
      <Section>
        <PageNav data={data.pagination} onPageChange={handlePageChange}/>
      </Section>
    </Container>
  );
}

export default Search;