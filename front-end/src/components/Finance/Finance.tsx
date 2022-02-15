import { Box, List, ListItem } from '@mui/material'
import React, { FC } from 'react'
import { ContainerWrapper } from '../../blocks/ContainerWrapper'
import { Link } from 'react-router-dom'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import Stack from '@mui/material/Stack'
import DatePicker from '@mui/lab/DatePicker'
import { formatDistance, subDays } from 'date-fns'

const getDate = (newValue:any) => {
  const date = new Date(newValue)
  console.log(date,'date')
  return date
}

export const Finance: FC = () => {
  const [oldValue, setOldValue] = React.useState<any>(null) // before today
  const [todayValue, setTodayValue] = React.useState<any>(null) // today

  console.log(oldValue,'old', todayValue,'today')
  return (
    <ContainerWrapper>
      <h2>Finance</h2>
      <List disablePadding>
        <ListItem>
          <Link to='/'>Go to Home</Link>
        </ListItem>
      </List>
      <Box sx={{
        display: 'flex',
        mt: 4
      }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3} mr={2}>
        <DatePicker
          disableFuture
          label="От"
          openTo="year"
          views={['year', 'month', 'day']}
          value={oldValue}
          onChange={(newValue) => {
            setOldValue(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DatePicker
              disableFuture
              label="До"
              openTo="year"
              views={['year', 'month', 'day']}
              value={todayValue}
              onChange={(newValue) => {
                setTodayValue(newValue)
                console.log(formatDistance(oldValue, todayValue, { addSuffix: true }))
              }}

              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>

        <Stack spacing={3} ml={2}>
          <TextField
            disabled
            id="days-read-only"
            label="Всего дней">
          </TextField>
        </Stack>
      </Box>
    </ContainerWrapper>
  )
}

