import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #D4D4FF;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {

    animation-name: ${rotate};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

export const Content = styled.div`
  background-color: #fff;
  width: 50%;
  border-radius: 5px;
  box-shadow: 5px 5px 5px gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
