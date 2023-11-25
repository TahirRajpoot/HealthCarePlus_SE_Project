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
    <DashBoardLayout type={"hospital"} menuData={userMenuData}>
      <DashBoardContentWrapper>
        <GoBackButtonContainer>
          <Link to={`/${id}/userDashboard/hospitals/`}>
            <GoBackButton>Go Back to Hospitals Page</GoBackButton>
          </Link>
        </GoBackButtonContainer>
        {error && <div>Error Loading Data</div>}
        {loading && <div>Loading Data...</div>}
        {hospitalData && (
          <>
            <Container>
              <HospitalDescriptionPublic hospitalData={hospitalData} />
            </Container>
            <Container>
              <HospitalEventsPublic hospitalData={hospitalData} />
            </Container>
            <Container>
              <HospitalServicesPublic hospitalData={hospitalData} />
            </Container>
            <Container>
              <HospitalDoctorsPublic hospitalData={hospitalData} />
            </Container>
          </>
        )}
      </DashBoardContentWrapper>
    </DashBoardLayout>
  );
};

export default HospitalProfile;
