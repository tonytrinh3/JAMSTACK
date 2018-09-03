import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className = "index">
    <h1>Hi Everyone, Mi llamo Tony!</h1>
    <h2>Introduction</h2>
    <p>This is what my Coffee Meets Bagel dating profile says:</p>
    <h3>Who am I</h3>
    <ul>
      <li>Green Engineer</li>
      <li>Born and raised in the white suburbias of Georgia</li>
      <li>Go to school in Atlanta at Georgia</li>
      <li>So I carry my Asian roots while trying to do white-person-trying-to-act-black impression. Ask Brendon.</li>
    </ul>
    <h3>Interests</h3>
    <ul>
      <li>Badminton, TENNIS, ping pong, casual video games, Terrace House</li>
    </ul>
    <h3>I appreciate if my date...</h3>
    <ul>
      <li>actually contributes to the conversation,</li>
      <li>enjoys eating a burger and cherry coke as well as eating at L'Ardois (I probably changed this recently),</li>
      <li>enjoys going out and having fun as well as staying</li>
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

