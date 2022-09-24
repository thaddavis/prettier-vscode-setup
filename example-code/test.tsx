import React from 'react'

interface P {
    name: string;
    age: number
}

export default function test(props: P) {

  let {
    name, age
  } = props

  return (
    <p>
        {name} is {age} years old!
    </p>
  )
}
