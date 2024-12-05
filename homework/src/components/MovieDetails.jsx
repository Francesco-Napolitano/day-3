import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Spinner } from 'react-bootstrap'

const MovieDetails = () => {
  const [films, setFilms] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const params = useParams()

  const fetchData = () => {
    if (!params.movieID) {
      return
    }

    fetch(`http://www.omdbapi.com/?apikey=57d1da9f&i=${params.movieID}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(`Errore HTTP: ${response.status}`)
        }
      })
      .then((data) => {
        if (data.Response === 'False') {
          throw new Error(data.Error || 'Film non trovato')
        }
        console.log(data)
        setFilms(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.movieID])

  return (
    <>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : films ? (
        <Row>
          <Col className="mb-2 text-white">
            <img src={films.Poster} alt={films.Title} />
            <h4 className="mt-3">{films.Title}</h4>
            <p>{films.Plot}</p>
          </Col>
        </Row>
      ) : (
        <div className="text-danger">
          Errore: film non trovato o parametro non valido
        </div>
      )}
    </>
  )
}

export default MovieDetails
