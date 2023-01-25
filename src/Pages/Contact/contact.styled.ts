import styled from 'styled-components';
import { sizes } from '../../../utils/screenSizes';

export const ContactContainer = styled.div`
  display: flex;
  margin-top: 20px;
  @media screen and (max-width: ${sizes.tablet}) {
    flex-direction: column;
  }
`;

export const ServiceFormContainer = styled.div`
  width: 50%;
  @media screen and (max-width: ${sizes.tablet}) {
    width: 100%;
  }
`;

export const MapContainer = styled.div`
  width: 50%;
  @media screen and (max-width: ${sizes.tablet}) {
    width: 80%;
    margin: auto;
    height: 300px;
  }
`;
