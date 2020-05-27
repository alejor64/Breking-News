import React from 'react'
import Noticia from './Noticia'
import PropTypes from 'prop-types'

const ListadoNoticias = ({noticas}) => {
    return (
        <div className="row">
            {
                noticas.map(noticia => {
                    return(
                        <Noticia
                            key={noticia.url}
                            noticia={noticia}
                        />
                    )
                })
            }
        </div>
    )
}

ListadoNoticias.propTypes = {
    noticias: PropTypes.array
}

export default ListadoNoticias
