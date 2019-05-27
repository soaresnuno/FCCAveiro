import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

import { darkWhite, green } from '../../utilities';

const Menu = (props) => {
  const { x } = useSpring({
    x: props.toggle.navbarOpen ? 0 : 100,
    config: config.default,
  });

  return (
    <MenuWrapper className="checkout" style={{ pointerEvents: props.toggle.navbarOpen ? 'all' : 'none' }}>
      <CheckoutLeft style={{ transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`) }}>
        <LinkWrapper>
          <li><h3>Link 1</h3></li>
          <li><h3>Link 2</h3></li>
          <li><h3>Link 3</h3></li>
          <li><h3>Link 4</h3></li>
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
  width: 30%;
  height: 100%;
  background: ${darkWhite};
`;


const CheckoutRight = styled(animated.div)`
  width: 70%;
  height: 100%;
  background: ${green};
`;

const LinkWrapper = styled.ul`
  margin-top: 50%;
  margin-left: 30%;

  & li {
    list-style-type: none;
    line-height: 2;
    color: ${green};
  }
`;