import React from 'react';
import { Box, styled } from '@mui/material';
import { DataGrid, gridClasses, GridColDef } from '@mui/x-data-grid';
import { alpha } from '@mui/material/styles';
import { format } from 'date-fns';

import { HistoryItem } from '../../context/HistoryDataContext/types';
import { useHistoryDataContext } from '../../context/HistoryDataContext';
import { tableKeys } from '../../globalConstant';


type CustomColumns = Omit<GridColDef, 'field' | 'headerName'> & {
  field: keyof HistoryItem,
  headerName: keyof HistoryItem,
};


const StyledBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  [`& .${gridClasses.columnHeaders}`]: {
    background: alpha(theme.palette.divider, 0.1),
  },
  [`& .${gridClasses.iconButtonContainer}`]: {
    visibility: 'visible',
  },
}));


export const Table = () => {
  const { data } = useHistoryDataContext();
  const columns: CustomColumns[] = tableKeys.map(key => ({
    field: key,
    headerName: key,
    flex: 1,
  }));
  const formattedData = data.map(item => {
    const date = new Date(item.Date);
    return {
      ...item,
      Date: format(date, 'MMM dd, yyyy k:mm'),
    };
  });
  return (
    <StyledBox>
      <DataGrid<HistoryItem>
        hideFooter
        showColumnRightBorder={false}
        showCellRightBorder={false}
        disableColumnMenu
        disableColumnFilter
        getRowId={() => Math.random() * 10000} columns={columns} rows={formattedData}
      />
    </StyledBox>
  );
};
