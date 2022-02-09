import { Button, Container } from '@mui/material'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
export const ContainerWrapper: FC = (props: any) => {
  return <Container {...props}>{props.children}</Container>
}
