import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../../Global/components/Layout/Layout";
import Button from "../../Global/components/Button/Button";
import Section from "../../Global/components/Section/Section";
import { fonts } from "../../../fonts";
import { colors } from "../../../colors";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import axiosRequests from "../../../utils/axiosRequests";
import returnChartAxios from "../../../utils/returnChartAxios";

const CovidChartContainer = styled.div`
  text-align: center;
`;

const Title = styled.div`
  font-weight: ${fonts.bold};
  color: ${colors.darkBrown};
  font-size: 48px;
  max-width: 768px;
  margin: auto;
  margin-bottom: 25px;
`;

const Description = styled.div`
  color: ${colors.lightBrown};
  font-size: 22px;
  max-width: 768px;
  margin: auto;
  margin-bottom: 60px;
`;

const MainContent = styled.div`
  margin-bottom: 30px;
`;

const StyledLink = styled(Link)`
  color: ${colors.white};
  width: 100%;
  height: 100%;
`;

const URL = `https://disease.sh/v3/covid-19/historical/all?lastdays=90`;

const options = {
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "11",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

const CovidChart = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ cases: {}, deaths: {}, recovered: {} });
  const [error, setError] = useState("");
  const [labels, setLabels] = useState([]);

  console.log(loading, error);

  useEffect(() => {
    const getCovidData = async (url, options) => {
      const [datas, error] = await axiosRequests(url, options);
      setLoading(false);

      if (datas) {
        let labells = [];
        for (let date in datas.data.cases) {
          labells.push(date);
        }
        setLabels(labells);
        console.log(datas.data);
        setData({ ...datas.data });
        return;
      }
      alert(error.message);
      setError(error.message);
    };
    getCovidData(URL, {});
  }, []);

  return (
    <CovidChartContainer>
      <Layout>
        <Section>
          <Title>Covid details Of all countries within past 3 months</Title>
          <Description>
            Covid cases are increasing rapidly. So is our service. So do
            checkout hospitals providing great covid care.
          </Description>
          <MainContent>
            <Line
              data={{
                type: "line",
                labels,
                options,
                datasets: [
                  {
                    borderWidth: 5,
                    label: "Total Cases",
                    backgroundColor: colors.darkBrown,
                    borderColor: colors.darkBrown,
                    data: [...returnChartAxios(data.cases)],
                    pointRadius: 1,
                  },
                  {
                    borderWidth: 5,
                    label: "Total Recovered",
                    backgroundColor: colors.primary,
                    borderColor: colors.primary,
                    data: [...returnChartAxios(data.recovered)],
                    pointRadius: 1,
                  },
                  {
                    borderWidth: 5,
                    label: "Total Recovered",
                    backgroundColor: colors.primary,
                    borderColor: colors.primary,
                    data: [...returnChartAxios(data.recovered)],
                    pointRadius: 1,
                  },
                ],
              }}
            />
          </MainContent>
          <Button>
            <StyledLink to="/covid19">
              Click Here To See Covid Details
            </StyledLink>
          </Button>
        </Section>
      </Layout>
    </CovidChartContainer>
  );
};

export default CovidChart;
