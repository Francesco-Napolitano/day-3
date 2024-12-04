import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MyNav from './components/MyNav'
import MyMain from './components/MyMain'
import MyFooter from './components/MyFooter'
import MySections from './components/MySections'
import SectionMarvel from './components/SectionMarvel'
import LastSection from './components/LastSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import TVShows from './components/TVShows'

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-dark">
        <header>
          <MyNav />
        </header>
        <main className="bg-dark">
          <MyMain />
          <MySections />
          <SectionMarvel />
          <LastSection />

          <Container>
            <Routes>
              <Route
                path="/"
                element={
                  <Row>
                    <Col xs={12} md={8} lg={6}>
                      <TVShows />
                    </Col>
                  </Row>
                }
              />
            </Routes>
          </Container>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
