import React from 'react';

export default function Icon(props) {
  const {color, alto, ancho, viewbox} = props
  return (
    <svg fill={color} height={alto} width={ancho} viewBox={viewbox}>{props.children}</svg>
  )
}
