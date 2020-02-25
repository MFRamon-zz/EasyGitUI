import styled from 'styled-components';

export const CardWrap = styled.div`
    display: block;
    border-radius: 12px;
    background: #FBFBFB;
    width: 200px;
    height: 200px;
    margin: 20px;

    &:hover {
      box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.12);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      border: 1px solid #cccccc;
      background-color: white;
    }
     
`;

export const H3 = styled.h3`
  padding:20px
`