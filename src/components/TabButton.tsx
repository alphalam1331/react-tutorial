import React from 'react'

export default function TabButton(props:{
    text:string
}) {

    const {text} = props;

  return (
    <button>
      {text}
    </button>
  )
}
