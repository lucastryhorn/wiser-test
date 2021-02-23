import styled, { css } from 'styled-components/native';
import { isTablet } from '../../../../utils/constants';

export const ContainerCardLogin = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  height: ${isTablet ? '100%' : '380px'};
  width: ${isTablet ? '60%' : '310px'};
  border-radius: 8px;
  padding: 25px;
  align-items: center;

  ${isTablet &&
  css`
    align-self: flex-end;
    justify-content: center;
    align-items: flex-start;
    padding: 75px;
    border-radius: 0px;
  `}
`;

export const SubTitle = styled.View`
  margin-top: 16px;
  margin-bottom: 16px;
`;
