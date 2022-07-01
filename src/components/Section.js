import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

/** MaterialUI styled component w/ emotion styling engine to make CSS rules object */
const StyledGrid = styled(Grid)({
  margin: '0 0 40px 0',
})

/**
 * Container wrapper component using CSS Flex
 * 
 * @param {
 *  children: JSX Component
 * } props 
 * @returns React JSX Component
 */
function Section(props) {
  return (
    <StyledGrid container justifyContent="space-around" alignContent="space-between">
        {props.children}
    </StyledGrid>
  );
}

export default Section;