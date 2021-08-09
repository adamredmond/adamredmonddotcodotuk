import styled from 'styled-components';

export const ContactContainer = styled.div `
height: 800px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: black;

@media screen and (max-width: 768px) {
    height: 1200px;
}

@media screen and (max-width: 480px) {
    height: 1300px;
}
`;

export const ContactWrapper = styled.div `
max-width: 1000px;
margin: 0 auto;
display: grid;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
    
}

@media screen and (max-width: 768px) {

}
`;

export const ContactH1 = styled.h1 `
font-size: 2.5rem;
color: white;
margin-bottom: 64px;

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`;

export const ContactH2 = styled.h2 `
font-size: 1rem;
text-align: center;
align-items: center;
color: white;
margin-bottom: 10px;
`;

export const ContactP = styled.p `
font-size: 1rem;
color: black;
text-align: center;;
`;