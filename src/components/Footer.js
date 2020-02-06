import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
   position:fixed;
   display:flex;
   justify-content:center;
   align-items:center;
   width:100%;
   height:3vh;
   font-size:.8rem;
   font-weight:300;
   left:0;
   bottom:0;
   box-shadow:0 -.5px 5px black;
`;

const Footer = () => (
   <StyledFooter>
      2020 © Robert Chojnacki
   </StyledFooter>
)

export default Footer;