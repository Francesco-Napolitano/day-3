import { Component } from 'react'
import { Carousel, Row, Col, Spinner } from 'react-bootstrap'

class MySections extends Component {
  state = {
    films: [],
    isLoading: true,
  }

  fetchData = () => {
    fetch('http://www.omdbapi.com/?apikey=57d1da9f&s=The Walking Dead')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then((data) => {
        this.setState({
          films: data.Search || [],
          isLoading: false,
        })
      })
      .catch((err) => console.log(err, 'ERRORE'))
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div className="text-white px-4 mb-5" style={{ paddingBottom: '180px' }}>
        <h3 className="m-0">The Walking Dead</h3>
        <div className="d-flex justify-content-center pb-5">
          {this.state.isLoading && (
            <Spinner animation="border" role="status" variant="danger">
              <span className="visually-hidden ">Loading...</span>
            </Spinner>
          )}
        </div>
        <Carousel interval={null}>
          <Carousel.Item>
            <Row>
              {this.state.films.slice(0, 6).map((film) => (
                <Col xs={6} sm={4} lg={2} className="mb-3" key={film.imdbID}>
                  <img
                    className="d-block w-100 rounded"
                    src={film.Poster}
                    alt={film.Title}
                    style={{ height: '250px', objectFit: 'contain' }}
                  />
                  <p className="mt-2 text-center ">{film.Title}</p>
                </Col>
              ))}
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              {this.state.films.slice(4, 12).map((film) => (
                <Col xs={6} sm={4} lg={2} className="mb-3" key={film.imdbID}>
                  <img
                    className="d-block w-100 rounded"
                    src={film.Poster}
                    alt={film.Title}
                    style={{ height: '250px', objectFit: 'contain' }}
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
}

export default MySections
