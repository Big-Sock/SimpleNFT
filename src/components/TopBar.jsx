import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TopBar = () => {
	return (
        <Container>
            <Title to='/'>SimpleNFT</Title>
            <Right>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/'>Test</Link>
            </Right>
        </Container>
    )
};

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  padding-right: 10%;
`

const Link = styled(NavLink)`
  font-size: 16px;
  font-weight: 700;
  color: #06005b;
  margin: 0px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`

const Title = styled(NavLink)`
  font-size: 16px;
  font-weight: 700;
  color: #06005b;
  margin: 0px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  padding-left: 10%;
`

const Container = styled.div`
	box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
	width: 100%;
	height: 20px;
	background-color: #ffffff;
	display: flex;
	overflow: hidden;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 20px 0px;
  margin-bottom: 40px;
`;
