import React from "react";
import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';
import { ResponsiveContainer } from "recharts";
  
  
const AppPieChart = () => {
  
// Sample data
const data = [
  { argument:'Monday', value:10 },
  { argument:'Tuesday', value:40 },
  { argument:'Wednesday', value:10 },
  { argument:'Thursday', value:20 },
  { argument:'Friday', value:20 },
];
return (
    <React.Fragment>
    <ResponsiveContainer>
    <Chart
      data={data}
    >
      <PieSeries valueField="value" argumentField="argument" />
      <Title text="Studies per day"/>
    </Chart>
    </ResponsiveContainer>
    </React.Fragment>
);
}
  
export default AppPieChart;