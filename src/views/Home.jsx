import React, { useState, useRef } from "react";
import styled from "styled-components";
import { TopBar } from "../components/TopBar";
import { useHistory } from "react-router-dom";

export const Home = () => {
	const [projectName, setProjectName] = useState(null);
	const [projectDescription, setProjectDescription] = useState(null);
	const [projectOwner, setProjectOwner] = useState(null);
  const history = useHistory();

	const storeProjectInfo = () => {
		localStorage.setItem("project_name", projectName);
		localStorage.setItem("project_description", projectDescription);
		localStorage.setItem("project_owner", projectOwner);
    history.push('/dashboard')
	};

	return (
		<>
			<TopBar />
			<Container>
				<ProjectForm>
					<Title>New Project</Title>
					<InputLabel>Project Name</InputLabel>
					<ProjectNameInput
						placeholder="Project Name"
						onChange={(e) => setProjectName(e.target.value)}
					/>

					<InputLabel>Project Description</InputLabel>
					<ProjectDescriptionInput
						placeholder="Project Description"
						onChange={(e) => setProjectDescription(e.target.value)}
					/>

					<InputLabel>Owner (address)</InputLabel>
					<ProjectNameInput
						placeholder="Wallet address"
						onChange={(e) => setProjectOwner(e.target.value)}
					/>

					<SubmitButton
						onClick={() => {
							storeProjectInfo();
						}}
					>
						Submit
					</SubmitButton>
				</ProjectForm>
			</Container>
		</>
	);
};

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
`;

const Title = styled.div`
	font-size: 24px;
	color: #06005b;
	font-weight: 600;
`;

const InputLabel = styled.div`
	margin-top: 24px;
	font-size: 12px;
	color: #06005b;
	font-weight: 600;
`;

const ProjectForm = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 500px;
	max-width: 80%;
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
