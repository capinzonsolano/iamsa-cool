import React from 'react';
import Icon from './icon';

export default function NubeIcon(props) {
  return (<Icon {...props}>
    <path d='M 25,25
       a 20,20 1 0,0 0,40
       h 50
       a 20,20 1 0,0 0,-40
       a 10,10 1 0,0 -15,-10
       a 15,15 1 0,0 -35,10
       z'/>
  </Icon>)
}
