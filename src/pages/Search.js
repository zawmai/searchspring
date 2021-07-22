import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Section from '../components/Section';
import Container from '@material-ui/core/Container';
import SearchBar from '../components/SearchBar';
import Gallery from '../components/Gallery';
import { useEffect } from 'react';


const useStyles = makeStyles({
  root: {
    padding: '40px 20px 40px 20px',
  }
});

function Search(props) {

  // Create ProductCard components with data
  const [data, setData] = useState({});

  const handleSubmit = (inputs, event) => {
    var  siteId = "scmq7n";
    const base = "https://" + siteId + ".a.searchspring.io/api/search/search.json?";
    const params = {
      "siteId": siteId,
      "resultsFormat": "native",
      "q": inputs.searchText
    } 

    var reqUrl = base + (new URLSearchParams(params)).toString();
    fetch(reqUrl)
      .then(res => res.json())
      .then((jsonData) => {
        setData(jsonData);
        console.log(jsonData);
      });
    console.log(inputs);
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
    </Container>
  );
}

export default Search;