import * as React from 'react'
import { StyledIcon } from 'styled-icons/material'
import { Lock, LockOpen } from 'styled-icons/material'
import { Rocket } from 'styled-icons/octicons'

const Locked: StyledIcon = Lock.extend`
  color: ${props => props.theme.iconColor ? props.theme.iconColor : props.theme.secondaryColor};
`
const UnLocked: StyledIcon = LockOpen.extend`
  color: ${props => props.theme.iconColor ? props.theme.iconColor : props.theme.secondaryColor};
`

export const LockIcon = (locked: boolean) => locked ? <Locked size={32} title="account locked" /> : <UnLocked size={32} title="account unlocked" />

export const RocketIcon: StyledIcon = Rocket.extend`
  color: ${props => props.theme.iconColor ? props.theme.iconColor : props.theme.secondaryColor};
`