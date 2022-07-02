import * as React from 'react';
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { styled } from '@mui/system'

/** Make styled component w/ emotion styling engine to insert CSS rules */
const StyledPaper = styled(Paper, {
  name: "searchBar__form",
  slot: "wrapper"
})({
  display: "flex",
  alignItems: "center",
  padding: "0 0 0 10px",
  maxWidth: 500,
  minWidth: 260,
  width: "100%",
});

const StyledInputBase = styled(InputBase, {
  name: "searchBar__InputContainer",
  slot: "wrapper"
})({
  flex: 1
});

const StyledButton = styled(Button, {
  name: "searchBar__BtnSubmit",
  slot: "wrapper"
})({
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
})

const StyledParagrah = styled('p', {
  name: "searchBar__txtError",
  slot: "wrapper"
})({
  flexBasis: '100%',
  textAlign: 'center',
  color: 'red'
});


/**
 * Searchbar form component using react-hook-form library. Contains text input and submit button.
 * 
 * @param {
 *  onValidSubmit: function,
 *  onInvalidSubmit: function,
 * } props 
 * @returns React JSX Component
 */
function SearchBar(props) {

  /** 
   * Use react-hook-form hook to create form methods to register inputs, 
   * handle form submission, clear validation errors, and grab errors state.
   * Inputs validation set to perform only on form submit.
   */
  const { 
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({ reValidateMode: "onSubmit" });

  /** 
   * Search bar text input configuation and its error messages when input is invalid:
   * - set input as required for submission
   * - validation regex patter
   */
  const inputOptions = {
    required: 'Required: Please enter one or more keywords to search.',
    pattern: {
      value: /^[A-Za-z0-9]+[A-Za-z0-9\s/-]*$/,
      message: 'Invalid Keywords(s): Letters and Digits only'
    }
  };

  /** Created input with name 'searchText and its options. */
  const searchText = register("searchText", inputOptions);

  /** Input onChange Callback: Use registered input callback. Then, clear errors from previous form submission. */
  const onChangeCb = (event) => {
    searchText.onChange(event);
    clearErrors('searchText');
  };

  return (
    <React.Fragment>
      <StyledPaper component="form" elevation={3} noValidate autoComplete="off" onSubmit={handleSubmit(props.onValidSubmit, props.onInvalidSubmit)}>
        <StyledInputBase  
          {...searchText} 
          id="searchTextField"
          onChange={onChangeCb}
          name="searchText"
          placeholder="Search Product Keywords"
          variant="outlined"
          inputProps={{ 'aria-label': 'search product keywords' }}
        />
        <StyledButton  
          variant="contained" 
          color="primary" 
          type="submit" 
          name="searchButton" 
          aria-label="search">Search
        </StyledButton>
      </StyledPaper>
      {errors.searchText && errors.searchText.message && <StyledParagrah>{errors.searchText.message}</StyledParagrah>}
    </React.Fragment>
  );
}

export default SearchBar;