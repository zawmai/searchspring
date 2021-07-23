import * as React from 'react';
import Pagination from '@material-ui/lab/Pagination'

function PageNav(props) {
  
  return (
    <React.Fragment>
      <Pagination 
        onChange={props.onPageChange} 
        page={props.data && props.data.currentPage ? props.data.currentPage : 1} 
        count={props.data && props.data.totalPages ? props.data.totalPages : 1} 
        size='large' shape='rounded' />
    </React.Fragment>
  );
}

export default PageNav;