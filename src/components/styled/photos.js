import styled from "styled-components";

export const FakeThumbnail = styled.div`
    width: 150px;
    height: 150px;
    margin-right: 15px;
    margin-bottom: 15px;
    &:nth-child(4n) {
        margin-right: 0;
    }
    background: lightgrey;
`;

export const FakePhoto = styled(FakeThumbnail)`
    box-sizing: border-box;
    width: 600px;
    height: 600px;
    margin-right: 15px;
    margin-bottom: 15px;
    &:nth-child(4n) {
        margin-right: 0;
    }
    background: lightgrey;
`;

export const ThumbnailWrapper = styled(FakeThumbnail)`
    background: lightgrey;
    background-size: cover;
  background-position: center;
  box-shadow: 0 5px 10px -5px rgba(0,0,0,0.25) ;
  background-image: url("${props => props.photoUrl}");
  transition: all 0.15s ease-in-out;
  &:hover {
      transform: scale(1.05);
  }
`;

export const PhotoWrapper = styled(FakePhoto)`
    background-size: cover; 
    background-position: center;
    box-shadow: 0 5px 10px -5px rgba(0,0,0,0.25) ;
    background-image: url("${props => props.photoUrl}");
`;
