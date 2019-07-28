import styled, { keyframes } from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    height: 100vh;
    padding: 40px 20px;
`;

export const ModalRoot = styled.div``;

const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    animation: ${show} 0.2s ease-in-out;
`;

export const FeedContainer = styled.div`
    display: flex;
    max-width: 645px;
`;

export const CollectionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* max-height: 100vh;
    overflow: scroll; */
`;

export const IconContainer = styled.span`
    position: absolute;
    top: 15px;
    right: 30px;
    svg {
        stroke: black;
        fill: transparent;
        width: 24px;
        height: 24px;
    }
`;
