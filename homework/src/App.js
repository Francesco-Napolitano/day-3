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
import MovieDetails from './components/MovieDetails'

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-dark">
        <header>
          <MyNav />
        </header>
        <main className="bg-dark">
          <Routes>
            <Route
              path="/"
              element={
                <Container fluid>
                  <Row>
                    <MyMain />
                    <MySections />
                    <SectionMarvel />
                    <LastSection />
                  </Row>
                </Container>
              }
            />
            <Route
              path="/TVShows"
              element={
                <Container
                  fluid
                  className="bg-dark"
                  style={{ height: '100vh' }}
                >
                  <Row>
                    <Col xs={12} md={8} lg={6}>
                      <TVShows />
                    </Col>
                  </Row>
                </Container>
              }
            />
            <Route
              path="/MovieDetails/:movieId"
              element={
                <Container
                  fluid
                  className="bg-dark"
                  style={{ height: '100vh' }}
                >
                  <Row>
                    <Col xs={12} md={8} lg={6}>
                      <MovieDetails />
                    </Col>
                  </Row>
                </Container>
              }
            />
          </Routes>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
