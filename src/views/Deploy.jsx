import React, { useState, useRef } from "react";
import styled from "styled-components";

import uploadImg from "../assets/UploadImage.svg";
import { TopBar } from "../components/TopBar";
import { CreateCandyMachine } from './CreateCandyMachine'

export const Deploy = () => {
	const [imageUrl, setImageUrl] = useState(uploadImg);
	const [image, setImage] = useState(null);
	const fileInput = useRef(null);
	const [formFields, setFormFields] = useState({
		name: "",
		symbol: "",
		description: "",
		saleRecipient: "",
		royaltyRecipient: "",
		percentage: 0,
		imageUrl: "",
		price: 0,
		supply: 0,
	});

	const setSave = (e) => {
		setFormFields({ ...formFields, [e.target.name]: e.target.value })
		localStorage.setItem('formFields', JSON.stringify(formFields))
	}

	const Submit = (e, name) => {
		alert(`${name} was clicked`);
	};
	return (
		<>
			<TopBar />
			<Container>
				<FlexColumn>
					<Top>
						<Title>
							<TitleText>Deploy Contract </TitleText>
						</Title>
						<FlexColumn2>
							<FlexRow>
								<NameInput>
									<InputText>Name</InputText>
									<Input
										name="name"
										type="text"
										onChange={(e) =>
											setSave(e)
										}
									/>
								</NameInput>
								<SymbolInput>
									<InputText>Symbol</InputText>
									<Input
										name="symbol"
										type="text"
										onChange={(e) =>
											setSave(e)
										}
									/>
								</SymbolInput>
							</FlexRow>
							<DescriptionInput>
								<InputText>Description</InputText>
								<InputArea
									name="description"
									onChange={(e) =>
										setSave(e)
									}
								/>
							</DescriptionInput>

							<PayoutRecipientInput>
								<InputText>Image URL</InputText>
								<Input
									name="imageUrl"
									type="text"
									onChange={(e) =>
										setSave(e)
									}
								/>
							</PayoutRecipientInput>
						</FlexColumn2>
					</Top>
					<Bottom>
						<SubTitle>Primary Sales</SubTitle>
						<FlexRow>
							<PaymentInput>
								<InputText>Price</InputText>
								<Input
									name="price"
									type="text"
									onChange={(e) =>
										setSave(e)
									}
								/>
							</PaymentInput>
							<PaymentInput>
								<InputText>Total Supply</InputText>
								<Input
									supply="supply"
									type="text"
									onChange={(e) =>
										setSave(e)
									}
								/>
							</PaymentInput>
						</FlexRow>
						<FlexRow>
							<CreateCandyMachine />
						</FlexRow>
					</Bottom>
				</FlexColumn>
			</Container>
		</>
	);
};
const Container = styled.div`
	background-color: #f9f9f9;
	display: flex;
	overflow: hidden;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: flex-start;
	gap: 10px;

	input {
		box-sizing: border-box;
	}
`;

const NftImage = styled.img`
	display: flex;
	max-height: 300px;
`;

const PercentageText = styled.div`
	font-size: 14px;
	font-family: Spartan;
	font-weight: 500;
`;

const SeparateRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const Top = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;
const TitleText = styled.div`
	font-size: 24px;
	font-family: Spartan;
	font-weight: 700;
	color: #06005b;
`;
const SubText = styled.div`
	font-size: 14px;
	font-family: Spartan;
	font-weight: 500;
`;
const FlexColumn2 = styled.div`
	display: flex;
	align-self: center;
	flex-direction: column;
	gap: 16px;
	justify-content: space-between;
	align-items: center;
`;
const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	gap: 40px;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
`;
const NameInput = styled.div`
	width: 70%;
	display: flex;
	height: 74px;
	position: relative;
	justify-content: flex-start;
	flex-direction: column;
`;

const PayoutRecipientInput = styled.div`
	width: 100%;
	display: flex;
	height: 74px;
	margin-top: 16px;
	position: relative;
	justify-content: flex-start;
	flex-direction: column;
`;

const RoyaltiesRecipientInput = styled.div`
	width: 70%;
	display: flex;
	height: 74px;
	position: relative;
	justify-content: flex-start;
	flex-direction: column;
`;

const PercentageInput = styled.div`
	width: 30%;
	display: flex;
	height: 74px;
	position: relative;
	justify-content: flex-start;
	flex-direction: column;
`;

const PaymentInput = styled.div`
	width: 50%;
	display: flex;
	height: 74px;
	position: relative;
	justify-content: flex-start;
	flex-direction: column;
`;

const SymbolInput = styled.div`
	width: 30%;
	display: flex;
	height: 74px;
	position: relative;
	justify-content: flex-start;
	flex-direction: column;
`;
const DescriptionInput = styled.div`
	width: 100%;
	height: 111px;
	position: relative;
`;

const ImageInput = styled.div`
	width: 100%;
	position: relative;
	margin-top: 18px;
`;
const WhiteFlexRow = styled.div`
	border-width: 1px;
	border-color: #aaaaaa;
	border-style: solid;
	width: 100%;
	background-color: #ffffff;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 15px 0px;
`;

const Bottom = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 15px;
	width: 100%;
`;

const Title = styled.div`
	display: flex;
	align-self: flex-start;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin-bottom: 24px;
`;

const BottomTitle = styled.div`
	display: flex;
	align-self: flex-start;
	flex-direction: column;
	gap: 16px;
	justify-content: center;
	align-items: flex-start;
	margin: 0px 0px 33px 0px;
`;

const DeployButton = styled.div`
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
	margin-bottom: 20px;
	&:hover {
		box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
	}
`;
const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 32px;
`;
const InputText = styled.div`
	font-size: 14px;
	font-family: Spartan;
	font-weight: 500;
	width: 100%;
	padding-bottom: 5px;
`;
const Input = styled.input`
	border: 1px solid #aaaaaa;
	height: 48px;
	background-color: #ffffff;
	width: 100%;
	padding-left: 10px;
	font-size: 17px;
`;

const InputArea = styled.textarea`
	border: 1px solid #aaaaaa;
	height: 48px;
	background-color: #ffffff;
	width: calc(100% - 20px);
	padding: 10px;
	font-size: 17px;
	height: 85px;
`;
const SubTitle = styled.div`
	font-size: 16px;
	font-family: Spartan;
	font-weight: 700;
	color: #06005b;
`;
