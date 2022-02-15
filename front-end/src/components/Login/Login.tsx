import { List, ListItem } from '@mui/material'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ContainerWrapper } from '../../blocks/ContainerWrapper'

export const Login: FC = () => {
  return (
    <ContainerWrapper>
      <h2>Login</h2>
      <List disablePadding>
        <ListItem>
          <Link to='/'>Go to Home</Link>
        </ListItem>
        <ListItem>
          <Link to='/Register'>Not yet register? Register</Link>
        </ListItem>
      </List>
    </ContainerWrapper>
  )
}
