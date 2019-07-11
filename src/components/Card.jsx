/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { Card as AntCard } from "antd";

import { PieChart, VerticalBarChart, SankyChart, StackChart } from "./Chart";

export const StyledAntdCard = styled(AntCard)`
  margin: 1rem 0 5px 0;
  background-color: #3e4a7d;
  color: white;
  border-width: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  margin-right: 16px;

  & .ant-card-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const CardTitle = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.8px;
`;
const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Card = ({ title, style, children }) => {
  return (
    <StyledAntdCard style={style}>
      {title && <CardTitle>{title}</CardTitle>}
      <CardContent>{children}</CardContent>
    </StyledAntdCard>
  );
};

export const PieCard = ({ data, mountFunc, cardStyle, chartStyle, title }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mountFunc();
    setLoading(false);
  }, [mountFunc]);

  return (
    <Card style={cardStyle} title={title}>
      <PieChart data={data} style={chartStyle} loading={loading} />
    </Card>
  );
};

export const SankyCard = ({
  data,
  link,
  mountFunc,
  cardStyle,
  chartStyle,
  title
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // mountFunc()
    setLoading(false);
  }, [mountFunc]);

  return (
    <Card style={cardStyle} title={title}>
      <SankyChart
        data={data}
        link={link}
        style={chartStyle}
        loading={loading}
      />
    </Card>
  );
};

export const StackBarCard = ({
  data,
  mountFunc,
  cardStyle,
  chartStyle,
  title
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // mountFunc()
    setLoading(false);
  }, [mountFunc]);

  return (
    <Card style={cardStyle} title={title}>
      <StackChart data={data} style={chartStyle} loading={loading} />
    </Card>
  );
};

export const VerticalBarCard = ({
  data,
  mountFunc,
  cardStyle,
  chartStyle,
  title
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // mountFunc()
    setLoading(false);
  }, [mountFunc]);

  return (
    <Card style={cardStyle} title={title}>
      <VerticalBarChart data={data} style={chartStyle} loading={loading} />
    </Card>
  );
};

export default null;
