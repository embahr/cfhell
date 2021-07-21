import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Container = styled.div`
  display: flex;
  height: 10rem;
  margin-top: 5rem;
`

const IndexPage = () => {
  return (
    <Layout>
      <Container>content</Container>
    </Layout>
  )
}

export default IndexPage
