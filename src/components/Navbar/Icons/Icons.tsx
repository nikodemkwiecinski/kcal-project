import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export interface IconProps {
  jsx: JSX.Element,
  description: string
}

export const ICONS: Array<IconProps> = [
  {jsx: <FontAwesomeIcon icon={solid('arrow-right-to-bracket')}/>, description: 'Log in'}, 
  {jsx: <FontAwesomeIcon icon={solid('arrow-right-from-bracket')}/>, description: 'Log out'}
]

export const USERICONS: Array<IconProps> = [
  {jsx: <FontAwesomeIcon icon={solid('drumstick-bite')}/>, description: 'MEALS'}, 
  {jsx: <FontAwesomeIcon icon={solid('calculator')}/>, description: 'CALCULATOR'}, 
  {jsx: <FontAwesomeIcon icon={solid('user')}/>, description: 'PROFILE'}
]