import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Carousel, Row, Col, Spinner } from 'react-bootstrap'

const MySections = () => {
  const [films, setFilms] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const fetchData = () => {
    fetch('http://www.omdbapi.com/?apikey=57d1da9f&s=Spider-Man')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then((data) => {
        setFilms(data.Search || [])
        setIsLoading(false)
      })
      .catch((err) => console.log(err, 'ERRORE'))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="text-white px-4 mt-4">
      <h3 className="m-0">Collezione Spider-Man</h3>
      <div className="d-flex justify-content-center pb-5">
        {isLoading && (
          <Spinner animation="border" role="status" variant="danger">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
      <Carousel interval={null}>
        <Carousel.Item>
          <Row>
            {films.slice(0, 6).map((film) => (
              <Col xs={6} sm={4} lg={2} className="mb-3" key={film.imdbID}>
                <img
                  className="d-block w-100 rounded"
                  src={film.Poster}
                  alt={film.Title}
                  style={{ height: '250px', objectFit: 'contain' }}
                  onClick={() => {
                    navigate('/films/' + film.imdbID)
                  }}
                />
                <p className="mt-2 text-center ">{film.Title}</p>
              </Col>
            ))}
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            {films.slice(4, 12).map((film) => (
              <Col xs={6} sm={4} lg={2} className="mb-3" key={film.imdbID}>
                <img
                  className="d-block w-100 rounded"
                  src={film.Poster}
                  alt={film.Title}
                  style={{ height: '250px', objectFit: 'contain' }}
                  onClick={() => {
                    navigate('/films/' + film.imdbID)
                  }}
                />
                <p className="mt-2 text-center ">{film.Title}</p>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default MySections
