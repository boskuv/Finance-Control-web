import { List, ListItem } from '@mui/material'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ContainerWrapper } from '../../blocks/ContainerWrapper'

export const Register: FC = () => {
  return (
    <ContainerWrapper>
      <h2>Register</h2>
      <List disablePadding>
        <ListItem>
          <Link to='/'>Go to Home</Link>
        </ListItem>
        <ListItem>
          <Link to='/login'>AllReady Register? Go to Login</Link>
        </ListItem>
      </List>
    </ContainerWrapper>
  )
}
