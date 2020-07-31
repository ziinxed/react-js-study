import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) =>
      props.current ? "#3498db" : "transparent"};
  transition: border-bottom 0.5s ease-in-out;
`;

const Slink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//gets props from withRouter
//props are history location match
//using props with spread - find the match in the props
export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <Slink to="/">Movies</Slink>
      </Item>
      <Item current={pathname === "/tv"}>
        <Slink to="/tv">TV</Slink>
      </Item>
      <Item current={pathname === "/search"}>
        <Slink to="/search">Search</Slink>
      </Item>
    </List>
  </Header>
));
