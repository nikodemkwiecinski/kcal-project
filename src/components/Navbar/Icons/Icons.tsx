import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export interface IconProps {
  description: string,
  id: number,
  jsx: JSX.Element,
  path?: string
}

export const ICONS: Array<IconProps> = [
  {jsx: <FontAwesomeIcon icon={solid('arrow-right-to-bracket')}/>, description: 'Log in', id: 1}, 
  {jsx: <FontAwesomeIcon icon={solid('arrow-right-from-bracket')}/>, description: 'Log out', id: 2, path: '/'}
]

export const USERICONS: Array<IconProps> = [
  {jsx: <FontAwesomeIcon icon={solid('drumstick-bite')}/>, description: 'MEALS', id: 3, path: '/meals'}, 
  {jsx: <FontAwesomeIcon icon={solid('calculator')}/>, description: 'CALCULATOR', id: 4, path: '/calculator'}, 
  {jsx: <FontAwesomeIcon icon={solid('user')}/>, description: 'PROFILE', id: 5, path: '/profile'}
]