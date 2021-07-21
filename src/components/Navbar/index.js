import React, { useState } from 'react'
import styled from 'styled-components'

const Navigation = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  background-color: rebeccapurple;
`

const Navbar = () => {
  return <Navigation>CFHell</Navigation>
}

export default Navbar
