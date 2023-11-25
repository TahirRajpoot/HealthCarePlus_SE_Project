import React from "react";
import styled from "styled-components";
import GeneralInformation from "../DashBoardGeneralInformation/GeneralInformation";
import HospitalsNearYou from "../HospitalsNearYou/HospitalsNearYou";
import EventsNearYou from "../EventsNearYou/EventsNearYou";
import DashboardContentWrapper from "../../DashboardShared/DashBoardContentWrapper/DashBoardContentWrapper";

const Container = styled.div`
  margin-bottom: 70px;
`;

function HospitalDetails() {
  return (
    <DashboardContentWrapper>
      <Container>
        <GeneralInformation />
      </Container>
      <Container>
        <HospitalsNearYou />
      </Container>
      <Container>
        <EventsNearYou />
      </Container>
    </DashboardContentWrapper>
  );
}

export default HospitalDetails;
