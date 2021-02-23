import styled, { css } from 'styled-components/native';
import { isTablet } from '../../../../utils/constants';

export const ViewButton = styled.View`
  width: 100%;

  ${!isTablet &&
  css`
    position: absolute;
    bottom: -25px;
    width: auto;
  `};

  margin-top: 20px;
`;
