import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'
import axios from 'axios'

function App() {

  const [categoria, setCategoria] = useState('general')
  const [pais, setPais] = useState('co')
  const [noticias, setNoticias] = useState([])

  useEffect(()=>{

    const consultarAPI = async () =>{
      const proxyuri = 'https://cors-anywhere.herokuapp.com/'
      const APIKey = '454cecd3333a47eba7cb0ffc8aee78ac'
      const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${APIKey}`

      const res = await axios.get(proxyuri + url)

      setNoticias(res.data.articles)
    }
    consultarAPI()
  }, [categoria, pais])

  return (
    <Fragment>
      <Header
        titulo="Breaking News"
      />
      <div className="container white">
        <Formulario
          setCategoria={setCategoria}
          setPais={setPais}
        />
        <ListadoNoticias
          noticas={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
