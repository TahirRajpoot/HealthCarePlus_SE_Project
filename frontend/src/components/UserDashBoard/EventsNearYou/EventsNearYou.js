import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { colors } from "../../../colors";
import Card from "../../DashboardShared/CardLayout/Card";
import { fonts } from "../../../fonts";
import styled from "styled-components";
import returnURLFromObjectOfStrings from "../../../utils/returnURLFromObjectOfStrings";

const Title = styled.div`
  font-size: 28px;
  font-weight: ${fonts.bold};
`;

const CardHeader = styled.div`
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Line = styled.div`
  margin: 30px 0;
  height: 1px;
  width: 100%;
  background: ${colors.primaryYellow};
`;

const CardBody = styled.div`
  padding: 0 50px;
  display: flex;
  gap: 230px;
`;

const ChildCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 65px;
`;

const ChildCard = styled.div`
  background: #fbfbfb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  overflow: hidden;
`;
const ChildCardHeader = styled.div``;

const ChildCardBody = styled.div`
  padding: 14px;
`;

const ChildCardTitle = styled.h4`
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: ${fonts.medium};
  line-height: 1.1;
`;

const ChildCardImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ChildCardParagraph = styled.p`
  margin-bottom: 20px;
`;
const StyledLink = styled(Link)`
  display: block;
`;

const EventsNearYou = () => {
  const [loading, setLoading] = useState(false);
  const [hospitals, setHospitals] = useState([]);
  const [error, setError] = useState("");
  const params = useParams();

  return (
    <Card>
      <CardHeader>
        <Title>Events Near You</Title>
      </CardHeader>
      <Line />
      <CardBody>
        <ChildCardContainer>
          {loading && <div>Loading...</div>}
          {hospitals.length
            ? hospitals.map((hospital) => (
                <ChildCard>
                  <StyledLink
                    to={`/${params.id}/userDashboard/hospitals?id=${hospital._id}`}
                    key={hospital._id}
                  >
                    <ChildCardHeader>
                      <ChildCardImage
                        src={returnURLFromObjectOfStrings(
                          hospital.hospitalImages
                        )}
                        alt={"Hospital"}
                      />
                    </ChildCardHeader>
                    <ChildCardBody>
                      <ChildCardTitle>{hospital.name}</ChildCardTitle>
                      <ChildCardParagraph>
                        {hospital.hospitalDescription}
                      </ChildCardParagraph>
                    </ChildCardBody>
                  </StyledLink>
                </ChildCard>
              ))
            : null}
          {error && <div>{error.message}</div>}
        </ChildCardContainer>
      </CardBody>
    </Card>
  );
};

export default EventsNearYou;
