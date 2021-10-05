import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Hot from '../Posts/Hot';
import Fresh from '../Posts/Fresh';
import Send from '../Posts/Send';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Hot Posts" value="1" />
            <Tab label="Fresh Posts" value="2" />
            <Tab label="Send Posts" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><Hot></Hot></TabPanel>
        <TabPanel value="2"><Fresh></Fresh></TabPanel>
        <TabPanel value="3"><Send></Send></TabPanel>
      </TabContext>
    </Box>
  );
}