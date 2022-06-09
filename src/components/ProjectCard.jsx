import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const ProjectCard = () => {
  const link = '/';
  const projectId = 1;

  return (
    <Container>
      <Row>
        <Column>
          <Title>{localStorage.getItem('project_name')}</Title>
          <Description>{localStorage.getItem('project_description')}</Description>
        </Column>
      </Row>
      <BottomRow>
        <HoveredSection>
          <ManageButton to='/manage-project'>
            Manage Project
          </ManageButton>
        </HoveredSection>
        <NotHoveredSection>
          <Owner>Owner: {localStorage.getItem('project_owner')}</Owner>
        </NotHoveredSection>
      </BottomRow>
    </Container>
  )
}

const Owner = styled.span`
text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
`

const Container = styled.div`
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  width: 400px;
  height: 300px;
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
`

const HoveredSection = styled.div`
  display: none;
  flex: 1;
  ${Container}:hover & {
    display: flex;
  }
`

const NotHoveredSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 18px 24px;
  width: calc(100% - 48px);
  ${Container}:hover & {
    display: none;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  margin-left: 16px;
`

const BottomRow = styled.div`
  display: flex;
  background-color: #f1f1f1;
  height: 55px;
  transition: all 0.2s ease-in-out;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: black;
  margin-top: 16px;
`

const Description = styled.div`
  font-size: 14px;
  color: #707070;
  padding-top: 12px;
  line-height: 30px;
`

const ProjectLink = styled.a`
  display: flex;
  font-size: 12px;
  color: #aaaaaa;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px;
`

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
  padding: 18px 0;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`
