import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

import { gray10, darkGreen } from "../../utilities";

const Menu = (props) => {
  const { x } = useSpring({
    x: props.toggle.navbarOpen ? 0 : 100,
    config: config.default,
  });

  return (
    <MenuWrapper className="checkout" style={{ pointerEvents: props.toggle.navbarOpen ? 'all' : 'none' }}>
      <CheckoutLeft style={{ transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`) }}>
        <LinkWrapper>
          <li><p>Próximo Meet</p></li>
          <li><p>Quem Somos  </p></li>
          <li><p>Meetups</p></li>
          <li><p>Junta-te a nós</p></li>
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
  background: ${gray10};
`;


const CheckoutRight = styled(animated.div)`
  width: 70%;
  height: 100%;
  background: ${darkGreen};
`;

const LinkWrapper = styled.ul`
  margin-top: 50%;

  & li {
    list-style-type: none;
    line-height: 1;
    color: ${darkGreen};
  }
`;