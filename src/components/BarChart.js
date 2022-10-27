import React from "react";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Paper } from "@mui/material";
import { ResponsiveContainer } from "recharts";
  
  
const AppBarChat = () => {
  
// Sample data
const data = [
  { argument: 'Monday', value: 30 },
  { argument: 'Tuesday', value: 20 },
  { argument: 'Wednesday', value: 10 },
  { argument: 'Thursday', value: 50 },
  { argument: 'Friday', value: 60 },
];
return (
  <React.Fragment>
    <ResponsiveContainer>
    
    <Chart
      data={data}
    >
      <ArgumentAxis />
      <ValueAxis />
  
      <BarSeries valueField="value" argumentField="argument" />
    </Chart>
  </ResponsiveContainer>
  </React.Fragment>
);
}
  
export default AppBarChat;