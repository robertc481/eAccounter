import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
      width:100%;
      max-width:1000px;
      min-height:8vh;
      display:flex;
      flex-direction:column;
      justify-content:flex-start;
      align-items:center;
      box-shadow:0 0 15px -5px black;
      border-bottom-right-radius:10px;
      border-bottom-left-radius:10px;

   `;
const StyledHeader = styled.h1`
    display:flex;
    justify-content:center;
    align-items:center;
   font-size:1.8rem;
   font-weight:300;
   margin:0;
   height:60%;
   margin-bottom:3px;
   @media (max-width:360px){
      font-size:1.3rem;
   }
   @media (max-width:480px){
      font-size:1.2rem;
   }
   @media(min-width:750px){

   }
`;
const StyledDescription = styled.div`
   box-shadow:0 -5px 5px -5px black;
   margin:0;
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;



`;
const StyledParagraph = styled.p`
      margin:0;
      padding:0;
      font-size:.8rem;
      margin:0 0 5px 3px;
      font-weight:${({ bold }) => bold ? 600 : 300};
`;

const Header = () => (
   <StyledWrapper>
      <StyledHeader>eAccounter</StyledHeader>
      <StyledDescription><StyledParagraph bold>Quicky&Easy</StyledParagraph><StyledParagraph>Income review</StyledParagraph></StyledDescription>
   </StyledWrapper>
)

export default Header