import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <a class="font-mono px-2 py-1" href={props.to}>
    <Link to={props.to}>{props.children}</Link>
  </a>
)

const ExternalLink = props => (
  <a class="font-mono text-xs px-2 py-1" href={props.to}>
    {props.children}
  </a>
)
export default function Header(props) {
  return (
    <div class="flex p-3">
      <ListLink to="/" class="ml-4">
        Nigel Penilla
      </ListLink>
      <ul class="flex ml-auto">
        <li>
          <ListLink to="/">Home</ListLink>
        </li>
        <li>
          <ListLink to="/resume">Resume</ListLink>
        </li>
        <li>
          <ListLink to="/projects">Projects</ListLink>
        </li>
        <span class="mx-2">|</span>
        <li>
          <ExternalLink to="https://github.com/npenilla">Github</ExternalLink>
        </li>
        <li>
          <ExternalLink to="https://www.linkedin.com/in/nigel-penilla/">
            LinkedIn
          </ExternalLink>
        </li>
      </ul>
    </div>
  )
}
