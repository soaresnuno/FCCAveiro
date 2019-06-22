import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { gray10, darkGreen } from '../../utilities';

const Menu = (props) => {
  const { x } = useSpring({
    x: props.toggle.navbarOpen ? 0 : 100,
  });

  return (
    <MenuWrapper style={{ pointerEvents: props.toggle.navbarOpen ? 'all' : 'none' }}>
      <CheckoutLeft style={{ transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`) }}>
        <LinkWrapper>
          <li><h1>Link 1</h1></li>
          <li><h1>Link 2</h1></li>
          <li><h1>Link 3</h1></li>
          <li><h1>Link 4</h1></li>
        </LinkWrapper>
      </CheckoutLeft>
      <CheckoutRight style={{ transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`) }} />
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
`;

const CheckoutLeft = styled(animated.div)`
  position: relative;
  width: 30%;
  height: 100%;
  background: ${gray10};
  z-index: 5;
`;


const CheckoutRight = styled(animated.div)`
  position: relative;
  width: 70%;
  height: 100%;
  background: ${darkGreen};
  z-index: 5;
`;

const LinkWrapper = styled.ul`
  margin-top: 50%;
  margin-left: 90px;

  & li {
    list-style-type: none;
    color: ${darkGreen};

    & h1 {
      line-height: 90px;
    }
  }
`;
