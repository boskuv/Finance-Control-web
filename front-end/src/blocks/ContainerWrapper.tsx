import { Container } from '@mui/material'
import React, { FC } from 'react'

export const ContainerWrapper: FC = (props: any) => {
  return <Container {...props}>{props.children}</Container>
}
