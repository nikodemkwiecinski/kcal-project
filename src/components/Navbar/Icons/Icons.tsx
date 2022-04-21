import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export interface IconProps {
  jsx: JSX.Element,
  description: string,
  id: number
}

export const ICONS: Array<IconProps> = [
  {jsx: <FontAwesomeIcon icon={solid('arrow-right-to-bracket')}/>, description: 'Log in', id: 1}, 
  {jsx: <FontAwesomeIcon icon={solid('arrow-right-from-bracket')}/>, description: 'Log out', id: 2}
]

export const USERICONS: Array<IconProps> = [
  {jsx: <FontAwesomeIcon icon={solid('drumstick-bite')}/>, description: 'MEALS', id: 3}, 
  {jsx: <FontAwesomeIcon icon={solid('calculator')}/>, description: 'CALCULATOR', id: 4}, 
  {jsx: <FontAwesomeIcon icon={solid('user')}/>, description: 'PROFILE', id: 5}
]