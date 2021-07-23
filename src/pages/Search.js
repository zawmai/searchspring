import * as React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Section from '../components/Section';
import SearchBar from '../components/SearchBar';
import Gallery from '../components/Gallery';
import PageNav from '../components/PageNav';


const useStyles = makeStyles({
  root: {
    padding: '40px 20px 40px 20px',
  }
});

function Search(props) {

  // Create ProductCard components with data
  const [data, setData] = useState({});
  const [params, setParams] = useState({
    "siteId": "scmq7n",
    "resultsFormat": "native",
    "q": "",
    "page": "1"
  })

  useEffect(() =>{
    const base = "https://" + params.siteId + ".a.searchspring.io/api/search/search.json?";
    const reqUrl = base + (new URLSearchParams(params)).toString();
    fetch(reqUrl)
      .then(res => res.json())
      .then((jsonData) => {
        setData(jsonData);
        console.log(jsonData);
      });
  }, [params]);

  const handleSubmit = (inputs, event) => {
    setParams({
      ...params,
      "q": inputs.searchText,
    });
  };

  const handlePageChange = (event, page) => {
    setParams({
      ...params,
      "page": page,
    })
  };

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