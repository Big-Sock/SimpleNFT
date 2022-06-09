import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

export const ContractCard = ({name, description, tag}) => {

	const location = useLocation();
	return (
		<Container>
			<Row>
				<Column>
					<Title>{name ? name : "Default Name"}</Title>
					<Description>
						{description ? description : "No description"}
					</Description>
				</Column>
			</Row>
			<DataContainer>
				<HoveredSection>
					<ManageButton to={`contracts/1/${location.search}`}>
						View
					</ManageButton>
					{/* {isSaved && !isDeployed && (
            <ManageButton to={`contracts/${_id}/`}>Deploy</ManageButton>
          )} */}
				</HoveredSection>
				<NotHoveredSection>
					<Tag>{tag ? tag : "Custom"}</Tag>
				</NotHoveredSection>
			</DataContainer>
		</Container>
	);
};

const Container = styled.div`
	box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
	width: 30%;
	background-color: #ffffff;
	display: flex;
	overflow: hidden;
	flex-direction: column;
	justify-content: space-between;
	transition: all 0.2s ease-in-out;
	border: 1px solid #aaaaaa;
	&:hover {
		box-shadow: 0px 4px 12px 3px rgba(0, 0, 0, 0.2);
	}
`;

const HoveredSection = styled.div`
	display: none;
	flex: 1;
	${Container}:hover & {
		display: flex;
	}
`;

const NotHoveredSection = styled.div`
	display: flex;
	${Container}:hover & {
		display: none;
	}
`;
const Tag = styled.div`
	border: 1px solid #aaaaaa;
	padding: 8px;
	margin: 16px;
	border-radius: 3px;
	background-color: white;
	align-self: flex-start;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: center;
	margin-left: 16px;
    padding-top: 5px;
    gap: 8px;
`;

const DataContainer = styled.div`
	display: flex;
	background-color: #f1f1f1;
	height: 64px;
	transition: all 0.2s ease-in-out;
	${Container}:hover & {
		background-color: #fd3a25;
	}
`;

const Title = styled.div`
	font-size: 16px;
	font-weight: 700;
	color: black;
`;

const Description = styled.div`
	font-size: 14px;
	color: #707070;
    line-height: 24px;
`;

const Image = styled.img`
	height: 60px;
	width: 60px;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 24px;
`;

const ManageButton = styled(NavLink)`
	text-align: center;
	font-size: 16px;
	font-family: Spartan;
	font-weight: 500;
	color: #ffffff;
	width: 100%;
	cursor: pointer;
	text-decoration: none;
	transition: all 0.2s ease-in-out;
	background-color: #fd3a25;
	padding: 24px 0;
	opacity: 0.8;
	border: solid 1px #fcb5ad;
	&:hover {
		opacity: 1;
	}
`;
