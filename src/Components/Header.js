import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = styled.header``;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const Item = styled.li``;

const Slink = styled(Link)``;

export default () => (
  <Header>
    <List>
      <Item>
        <Slink href="/">Movies</Slink>
      </Item>
      <Item>
        <Slink href="/TV">TV</Slink>
      </Item>
      <Item>
        <Slink href="/Search">Search</Slink>
      </Item>
    </List>
  </Header>
);
