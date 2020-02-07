import React from 'react';
import styled from 'styled-components';

const StyledContainter = styled.div`
   width:100%;
   height:50%;
   display:flex;
   flex-direction:row;
   margin:3rem 0  1rem 0;
   `;

const Content = ({ children }) => (
   <StyledContainter>
      {children}
   </StyledContainter>

)

export default Content;