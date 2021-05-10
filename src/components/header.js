import React from "react"

export default function Header(props) {
  return <div>
    <h1>{props.headerText} {props.arbitraryPhrase}</h1>
    <h2>{props.subHeaderText}</h2>
  </div>
}
