import { List, ListItem } from '@mui/material'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ContainerWrapper } from '../../blocks/ContainerWrapper'

export const App: FC = () => {
  return (
    <ContainerWrapper>
      <h2>Finance Center</h2>
      <List disablePadding>
        <ListItem>
          <Link to='/login'>Login</Link>
        </ListItem>
        <ListItem>
          <Link to='/register'>Register</Link>
        </ListItem>
      </List>
    </ContainerWrapper>
  )
}
