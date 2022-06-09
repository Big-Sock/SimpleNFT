import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as CopyIcon } from "../assets/copy-solid.svg";
import { TopBar } from "../components/TopBar";

export const ViewContract = () => {
  let formFields = localStorage.getItem('formFields')

  if (formFields) {
    formFields = JSON.parse(formFields)
  }

  return (
    <>
      <TopBar />
      <Container>
        <FlexColumn>
          <Top>
            <Title>
              <TitleText>View Deployed Contract</TitleText>
            </Title>
          </Top>
          <Mid>
            <Divider />
            <FlexRow>
              <InputText>Image</InputText>
              <Image src={formFields?.imageUrl} />
            </FlexRow>
            <Divider />
            <FlexRow>
              <Row>
                <Item>
                  <InputText>NFT name:</InputText>
                  <Text>{formFields?.name}</Text>
                </Item>
                <Item>
                  <InputText>NFT Quantity:</InputText>
                  <Text>{formFields?.supply}</Text>
                </Item>
                <Item>
                  <InputText>NFT symbol:</InputText>
                  <Text>{formFields?.symbol}</Text>
                </Item>
              </Row>
            </FlexRow>
            <Divider />
            <FlexRow>
              <Item>
                <InputText>NFT owner:</InputText>
                <Row>
                  <Text>GJzjoKWuqvBerMCVg9itJVLH1y6ZAqGgPsXkXd954xLB</Text>
                  <CopyIcon style={{ height: "15px" }} />
                </Row>
              </Item>
            </FlexRow>
            <Divider />
          </Mid>
        </FlexColumn>
      </Container>
    </>
  );
};

const Image = styled.img`
width: 200px;
height: 200px;
object-fit: cover;
`

const Container = styled.div`
  background-color: #f9f9f9;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 60px;
  gap: 10px;

  input {
    box-sizing: border-box;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

const FlexRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid lightgrey;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  svg {
    :hover {
      cursor: pointer;
    }
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Mid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

const TitleText = styled.div`
  font-size: 24px;
  font-family: Spartan;
  font-weight: 700;
  color: #06005b;
`;

const Title = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 0px 48px 0px;
`;

const InputText = styled.div`
  font-size: 14px;
  font-family: Spartan;
  font-weight: 500;
  width: 100%;
  padding-bottom: 5px;
`;

const Text = styled.div`
  font-family: Spartan;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 13px;
  color: #000000;
`;
