import React from 'react'
import PropTypes from 'prop-types'

const Noticia = ({noticia}) => {

    const { urlToImage, url, title, description, source } = noticia

    return (
        <div className="col s12 m6 l14">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt={title}/>
                    <span className="card-title">{source.name}</span>
                </div>
                <div className="card-cotent">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <div>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light blue-grey darken-1 btn"
                    >Full New
                    </a>
                </div>
            </div>
        </div>
    )
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia
