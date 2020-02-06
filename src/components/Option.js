import React from 'react';

import styled from 'styled-components';

const StyledDiv = styled.div`
  
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 1.5px solid #818181;
      cursor: pointer;
      margin-right: 2px;
      
  
`;
const StyledLabel = styled.label`
   position: relative;
   display: inline-flex;
   align-items: center;
   font-weight: 700;
   flex-wrap: wrap;
   cursor: pointer;
   margin-right: 15px;
   color: #818181;
   

   >label{
      font-weight:300;
      transition:.25s linear;
   }
   >div{
      transition:.25s linear;
   }
`;
const StyledInput = styled.input`
      opacity: 0;
      position: absolute;
      cursor: pointer;
      
      :checked +div {
         background-color: black;
         border-color: black;
         box-shadow: inset 0 0 0 4px white;
      }
      :checked~label {
         box-shadow: 0 4.5px 2px -3.5px black;
         color: black;
         font-weight:600;
      }
`;







const Option = ({ children, checkFn, checked, id }) => (
   <StyledLabel
      htmlFor={id}>
      <StyledInput

         type="radio"
         id={id}
         checked={checked}
         onChange={checkFn}
      />
      <StyledDiv />
      <label>{children}</label>
   </StyledLabel>
)
export default Option