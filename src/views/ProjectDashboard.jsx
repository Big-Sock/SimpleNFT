import React, { useState, useRef } from "react";
import styled from "styled-components";

import uploadImg from "../assets/UploadImage.svg";
import { TopBar } from "../components/TopBar";
import { ProjectCard } from "../components/ProjectCard";
import { NavLink } from "react-router-dom";

export const ProjectDashboard = () => {
	const [projectName, setProjectName] = useState(null);
	const [projectDescription, setProjectDescription] = useState(null);
	const [projectOwner, setProjectOwner] = useState(null);

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
					<TopRow>
						<Title>My Projects</Title>
						<NewProject to='/'>
							New Project
						</NewProject>
					</TopRow>
					<ProjectCard />
				</Inner>
			</Container>
		</>
	);
};

const TopRow = styled.div`
	display: flex;
	justify-content: space-between;
`;

const NewProject = styled(NavLink)`
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

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 80%;
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
