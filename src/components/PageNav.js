import * as React from 'react';
import Pagination from '@mui/material/Pagination'
import useMediaQuery from '@mui/material/useMediaQuery';


/**
 * Controlled pagination component with previous-page and next-page buttons
 * Uses MaterialUI's pagination component and its onChange callback to lift
 * the state to parent component.
 * 
 * @param {
 *  data: {
 *    onPageChange: function,
 *    currentPage: number,
 *    totalPages: number,
 *  }
 * } props 
 * @returns React JSX Component
 */
function PageNav(props) {
  const isLarge = useMediaQuery('(min-width:460px)');
  const isMedium = useMediaQuery('(min-width:390px)');

  return (
    <React.Fragment>
      <Pagination 
        onChange={props.onPageChange} 
        page={props.data && props.data.currentPage ? props.data.currentPage : 1} 
        count={props.data && props.data.totalPages ? props.data.totalPages : 1} 
        size={isLarge ? 'large' : (isMedium ? 'medium' : 'small')}
        shape='rounded' 
      />
    </React.Fragment>
  );
}

export default PageNav;