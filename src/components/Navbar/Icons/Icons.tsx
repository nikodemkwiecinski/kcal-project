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
  {jsx: <FontAwesomeIcon icon={solid('arrow-right-to-bracket')} className="block mx-auto 2xl:text-4xl xl:text-2xl lg:text-xl mb-2"/>, description: 'Log in', id: 1, path: '/login'}, 
  {jsx: <FontAwesomeIcon icon={solid('arrow-right-from-bracket')} className="block mx-auto 2xl:text-4xl xl:text-2xl lg:text-xl mb-2"/>, description: 'Log out', id: 2, path: '/'}
]

export const USERICONS: Array<IconProps> = [
  {jsx: <FontAwesomeIcon icon={solid('drumstick-bite')} className="block mx-auto 2xl:text-4xl xl:text-2xl lg:text-xl mt-4"/>, description: 'MEALS', id: 3, path: '/meals'}, 
  {jsx: <FontAwesomeIcon icon={solid('calculator')} className="block mx-auto 2xl:text-4xl xl:text-2xl lg:text-xl mt-4"/>, description: 'CALCULATOR', id: 4, path: '/calculator'}, 
  {jsx: <FontAwesomeIcon icon={solid('user')} className="block mx-auto 2xl:text-4xl xl:text-2xl lg:text-xl mt-4"/>, description: 'PROFILE', id: 5, path: '/profile'}
]