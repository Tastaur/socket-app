import React, { useMemo } from 'react';
import { Area, AreaChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Box, useTheme } from '@mui/material';
import { CartesianViewBox } from 'recharts/src/util/types';

import { useHistoryDataContext } from '../../context/HistoryDataContext';
import { getCurrentDateFormat } from './utils';


export interface CustomLabelProps {
  viewBox?: Required<CartesianViewBox>,
  text: number,
}

const CustomLabel = ({ text, viewBox }: CustomLabelProps) => {
  const theme = useTheme();
  if (!viewBox){
    return null;
  }
  return (
    <g>
      <rect
        x={viewBox?.width + viewBox?.x}
        y={viewBox?.y - 15}
        fill={theme.palette.success.main}
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
  const theme = useTheme();
  const { data, currentPeriod } = useHistoryDataContext();
  const maxValue = Math.max(...data.map(item => item.Close));
  const formattedData = useMemo(() => {
    return data.map(item => ({ ...item, Date: getCurrentDateFormat(item.Date, currentPeriod) }));
  }, [data, currentPeriod]);
  return (
    <Box width={'100%'} height={'100%'}>
      <ResponsiveContainer aspect={3}>
        <AreaChart
          data={formattedData}
          margin={{ top: 20, right: 0, left: 20, bottom: 0 }}>
          <XAxis dataKey="Date" interval={1}/>
          <YAxis orientation={'right'} width={80}/>
          <Tooltip/>
          <ReferenceLine y={maxValue} stroke="rgb(80, 126, 17)"
            label={<CustomLabel text={maxValue}/>}
            strokeDasharray="3 3"
          />
          <Area
            type="linear"
            dataKey="Close"
            stroke={theme.palette.primary.main}
            fill={theme.palette.custom.blue.main}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};
