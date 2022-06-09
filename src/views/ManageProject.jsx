import React, { useState, useRef } from "react";
import styled from "styled-components";

import uploadImg from "../assets/UploadImage.svg";
import { TopBar } from "../components/TopBar";
import { ProjectCard } from "../components/ProjectCard";
import { NavLink } from "react-router-dom";
import { ContractCard } from "../components/ContractCard";

export const ManageProject = () => {
	const [projectName, setProjectName] = useState(null);
	const [projectDescription, setProjectDescription] = useState(null);
	const [projectOwner, setProjectOwner] = useState(null);
	const apiKey = "0c68187b1af03c2df2cd79ae5eb441f6";

	const copyKey = () => {
		navigator.clipboard.writeText(apiKey);
	};

	const storeProjectInfo = () => {
		localStorage.setItem("project_name", projectName);
		localStorage.setItem("project_description", projectDescription);
		localStorage.setItem("project_owner", projectOwner);
	};

	return (
		<>
			<TopBar />
			<Container>
				<Inner>
					<Row>
						<Header>
							<Title>{localStorage.getItem("project_name")}</Title>
							<br />
							<DescriptionHeader>Description</DescriptionHeader>
							<DescriptionText style={{maxWidth: '80%'}}>
								{localStorage.getItem("project_description")}
							</DescriptionText>
						</Header>
						<ApiKey
							onClick={() => {
								copyKey();
							}}
						>
							API Key: -----
						</ApiKey>
					</Row>
					<Row>
						<div>
							<DescriptionHeader>Owner</DescriptionHeader>
							<DescriptionText>
								{localStorage.getItem("project_owner")}
							</DescriptionText>
						</div>
						<div style={{ textAlign: "center" }}>
							<DescriptionHeader>Main Chain</DescriptionHeader>
							<DescriptionText>Solana</DescriptionText>
						</div>
						<div style={{ textAlign: "right" }}>
							<DescriptionHeader>Test Chain</DescriptionHeader>
							<DescriptionText>Devnet</DescriptionText>
						</div>
					</Row>
					<Divider />
					<Row>
						<Title>Saved Contracts</Title>
                        <NewContract to='/deploy'>
							New Contract
						</NewContract>
					</Row>
                    <Row>
                    <ContractCard name={'NFT Contract'} description={'Mint your very own NFT collections!'} tag={'NFT'}/>
                    <ContractCard name={'Token Contract'} description={`This contract allows creation of tokens.`} tag={'Token'}/>
                    <ContractCard name={'Marketplace Contract'} description={'A marketplace contract, based on OpenSea.'} tag={'Marketplace'}/>

                    </Row>
					
				</Inner>
			</Container>
		</>
	);
};

const Header = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const ApiKey = styled.div`
	font-size: 14px;
	border: 1px #aaaaaa solid;
	padding: 18px;
	height: 12px;
	cursor: pointer;
	&:hover {
		background-color: white;
	}
`;

const Owner = styled.div`
	color: #aaa;
	font-size: 12px;
`;

const DescriptionHeader = styled.div`
	color: #333;
	font-size: 12px;
	line-height: 30px;
`;

const DescriptionText = styled.div`
	color: #aaa;
	font-size: 12px;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
`;

const NewContract = styled(NavLink)`
	width: 120px;
	height: 40px;
	background-color: #ed3724;
	color: #fff;
	cursor: pointer;
	font-size: 12px;
	font-weight: 600;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
`;

const SubmitButton = styled.div`
	width: 100px;
	height: 40px;
	background-color: #ed3724;
	color: #fff;
	cursor: pointer;
	font-size: 12px;
	font-weight: 600;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 24px;
`;

const Container = styled.div`
	background-color: #f9f9f9;
	display: flex;
	overflow: hidden;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
	width: 100%;
	font-weight: 500;
`;

const Title = styled.div`
	font-size: 24px;
	color: #06005b;
	font-weight: 600;
    padding-top: 10px;
`;

const InputLabel = styled.div`
	margin-top: 24px;
	font-size: 12px;
	color: #06005b;
	font-weight: 600;
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	gap: 35px;
`;

const ProjectNameInput = styled.input`
	width: calc(100% - 24px);
	padding: 12px;

	border: 1px solid #333;
	font-family: "Spartan";
`;

const ProjectDescriptionInput = styled.textarea`
	width: calc(100% - 24px);
	padding: 12px;
	height: 150px;
	border: 1px solid #333;
	font-family: "Spartan";
`;

const Divider = styled.div`
	height: 1px;
	background-color: #c4c4c4;
`;
