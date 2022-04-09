import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import logo from '@assets/logo.svg';

export const ContainerWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  background-color: ${({ theme }) => theme.mainbg};
`;

export const Container = styled.div`
  width: 100%;
  color: #ffffff;
  padding-top: calc(8vh + 60px);
`;

export const Logo = styled(ReactSVG).attrs(() => {
  return {
    beforeInjection: (svg: HTMLElement) => {
      svg.setAttribute('style', 'width: 112px;height: 112px;');
    },
    src: logo,
  };
})``;
