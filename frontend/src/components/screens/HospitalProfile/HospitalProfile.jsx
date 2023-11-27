import React from "react";
import { Link } from "react-router-dom";
import DashBoardLayout from "../../DashboardShared/DashBoardLayout/DashBoardLayout";
import styled from "styled-components";
import Button from "../../Global/components/Button/Button";
import DashBoardContentWrapper from "../../DashboardShared/DashBoardContentWrapper/DashBoardContentWrapper";

const GoBackButton = styled(Button)`
  border-radius: 0px;
  margin-bottom: 15px;
`;

const GoBackButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Container = styled.div`
  margin-bottom: 70px;
`;

const HospitalProfile = () => {
  return (
    <DashBoardLayout>
      <DashBoardContentWrapper>
        <GoBackButtonContainer>
          <Link to="">
            <GoBackButton>Go Back to Hospitals Page</GoBackButton>
          </Link>
        </GoBackButtonContainer>

        <Container>
          <HospitalDescriptionPublic hospitalData="" />
        </Container>
        <Container>
          <HospitalEventsPublic hospitalData="" />
        </Container>
        <Container>
          <HospitalServicesPublic hospitalData="" />
        </Container>
        <Container>
          <HospitalDoctorsPublic hospitalData="" />
        </Container>
      </DashBoardContentWrapper>
    </DashBoardLayout>
  );
};

export default HospitalProfile;
