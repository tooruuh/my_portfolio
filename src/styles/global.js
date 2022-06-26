import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing:border-box;
   outline: 0;
 }

 :root {
   --black:  #121214;
   --gray:   #343030;
   --white:  #FFFFFF; 
   --green:  #3E9278;
   --orange: #c85311;
   --gray2:  #666360;
 }
 
 body{
   background: var(--black);
   color: var(--white);
   background-image: url('../assets/wall1.gif');
 }

 body, input, button {
   font-family: 'PT Serif', serif;
   font-size: 1rem;
 }
    
 h1,h2,h3,h4,h5,h6 {
   font-family: 'Roboto Mono', monospace;
   font-weight: 700;
 }
    
 button {
   cursor: pointer;
 }

 a {
   text-decoration: none;
 }
`