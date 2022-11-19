import React from 'react';
import {
  Area, AreaChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { Box } from '@mui/material';
import { CartesianViewBox } from 'recharts/src/util/types';

import { useHistoryDataContext } from '../../context/HistoryDataContext';


export interface CustomLabelProps {
  viewBox?: Required<CartesianViewBox>,
  text: number,
}

const CustomLabel = ({ text, viewBox }: CustomLabelProps) => {
  if (!viewBox) {
    return null;
  }
  return (
      <g>
          <rect
            x={viewBox?.width + viewBox?.x}
            y={viewBox?.y - 15}
            fill="rgb(80, 126, 17)"
            width={70}
            height={30}
        />
          <text x={viewBox.width} y={viewBox?.y - 15} fill="white" dy={20} dx={27}>
              {text}
          </text>
      </g>
  );
};

export const Overview = () => {
  const { data } = useHistoryDataContext();
  const maxValue = Math.max(...data.map(item => item.Close));
  return (
      <Box width={'100%'} height={'100%'}>
          <ResponsiveContainer aspect={3}>
              <AreaChart
              data={data}
              margin={{ top: 20, right: 0, left: 20, bottom: 0 }}>
                  <XAxis dataKey="Date" interval={1}/>
                  <YAxis interval={0} orientation={'right'} width={80}/>
                  <Tooltip/>
                  <ReferenceLine y={maxValue} stroke="rgb(80, 126, 17)"
                           label={<CustomLabel text={maxValue}/>}
                           strokeDasharray="3 3"
            />
                  <Area
                type="linear"
                dataKey="Close"
                stroke="#C2E0FF"
                fill="#C2E0FF"
            />
              </AreaChart>
          </ResponsiveContainer>
      </Box>
  );
};
