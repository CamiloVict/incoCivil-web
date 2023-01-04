import styled from 'styled-components';

export const BannerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(5,1,45, 0.9);
`;

export const Image = styled.img`
  width: 40vw;
  height: 700px;
  object-fit: cover;
`;

export const ContainerText = styled.div`
  width: 60%;
  margin-right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const Text = styled.h2`
  width: 80%;
  padding: 15px;
`;
