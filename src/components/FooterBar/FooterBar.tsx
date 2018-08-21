import * as React from "react";
import { animateScroll as scroll } from "react-scroll";
import styled, { keyframes } from "../../theme";
import Div from "../Div";
import { RocketIcon } from "../icons";

const preLaunch = keyframes`
{
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  10% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  20% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  30% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  50% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  70% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  80% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  90% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
`;
const liftOff = keyframes`
{
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  5% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  10% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  15% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  20% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  25% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  30% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  35% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  45% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  50% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 1;
  }
}
`;

const RocketDiv = styled.div`
  &:hover {
    animation: ${preLaunch} 0.5s linear infinite both;
    cursor: pointer;
  }
`;

const RocketLaunchDiv = styled.div`
  animation: ${liftOff} 0.7s ease-in both;
`;

const BarItem = styled.div`
  align-self: flex-end;
  bottom: 1rem;
  padding-top: 100vh;
  position: sticky;
`;

const Bar = styled(Div)`
  align-items: flex-start;
  background: transparent;
  display: flex;
  height: 100%;
  justify-content: space-around;
  top: 0;
  width: 100%;
  z-index: 200;
`;

export interface IRocketProps {
  launch: boolean;
}

const Rocket: React.SFC<IRocketProps> = ({ launch }) => {
  if (launch) {
    return (
      <BarItem>
        <RocketLaunchDiv>
          <RocketIcon size={32} color="#0892D0" />
        </RocketLaunchDiv>
      </BarItem>
    );
  }
  return (
    <BarItem>
    <RocketDiv>
      <RocketIcon size={32} color="white" />
    </RocketDiv>
  </BarItem>
  );
};

export interface IState {
  launch: boolean;
}

export interface IScrollProps {
  delay: number;
  duration: number;
  smooth: boolean;
}



export default class FooterBar extends React.Component<
  {},
  IState
> {
  public state = {
    launch: false
  };
  public launchRocket = () => {
    this.setState({ launch: true });
    scroll.scrollToTop({
      delay: 700,
      duration: 1500,
      smooth: true
    });
  };
  public render() {
    return (
      <Bar>
        <a onClick={this.launchRocket}>
          <Rocket {...this.state} />
        </a>
      </Bar>
    );
  }
}