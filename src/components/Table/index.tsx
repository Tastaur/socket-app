import React from 'react';
import { Box, styled } from '@mui/material';
import { DataGrid, gridClasses, GridColDef } from '@mui/x-data-grid';

import { HistoryItem } from '../../context/HistoryDataContext/types';
import { useHistoryDataContext } from '../../context/HistoryDataContext';
import { useWindowSize } from './hooks';


type CustomColumns = Omit<GridColDef, 'field' | 'headerName'> & {
  field: keyof HistoryItem,
  headerName: keyof HistoryItem,
};


const StyledBox = styled(Box)({
  height: '100%',
  width: '100%',
  flexGrow: 1,
  [`& .${gridClasses.columnHeader}`]: {
    background: 'rgb(229, 232, 238)',
  },
});

const APP_PADDING = 34;

export const Table = () => {
  const { data } = useHistoryDataContext();
  const { width } = useWindowSize();
  const columnWidth = (width - APP_PADDING) / 5;
  const keys: Array<keyof HistoryItem> = ['Date', 'High', 'Low', 'Open', 'Close'];
  const columns: CustomColumns[] = keys.map(key => ({
    field: key,
    headerName: key,
    width: columnWidth,
    minWidth: 150,
  }));
  return (
      <StyledBox>
          <DataGrid<HistoryItem>
            hideFooter
            disableColumnMenu
            disableColumnFilter
            autoHeight={false}
            getRowId={(row) => new Date(row.Date).toISOString()} columns={columns} rows={data}
        />
      </StyledBox>
  );
};
