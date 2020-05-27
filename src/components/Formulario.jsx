import React from 'react'
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'
import useCountry from '../hooks/useCountry'
import PropTypes from 'prop-types'

const Formulario = ({setCategoria, setPais}) => {
    
    const OPCIONES_PAIS = [ //https://newsapi.org/docs/endpoints/top-headlines
        {value:'ar', label:'Argentina'},
        {value:'au', label:'Australia'},
        {value:'at', label:'Autria'},
        {value:'be', label:'Belgium'},
        {value:'bg', label:'Bulgari'},
        {value:'ca', label:'Canada'},
        {value:'cn', label:'China'},
        {value:'co', label:'Colombia'},
        {value:'cz', label:'Czechia'},
        {value:'cu', label:'Cúba'},
        {value:'de', label:'Deutchland'},
        {value:'ae', label:'Emirates Arabic United'},
        {value:'eg', label:'Egypt'},
        {value:'fr', label:'France'},
        {value:'gb', label:'Great Britain'},
        {value:'gr', label:'Greece'},
        {value:'hk', label:'Hong Kong'},
        {value:'hu', label:'Hungary'},
        {value:'id', label:'Indonesia'},
        {value:'ie', label:'Ireland'},
        {value:'il', label:'Israel'},
        {value:'in', label:'India'},
        {value:'it', label:'Italia'},
        {value:'jp', label:'Japan'},
        {value:'kr', label:'Korean Republic'},
        {value:'lt', label:'Lithuania'},
        {value:'lv', label:'Latvia'},
        {value:'ma', label:'Moroco'},
        {value:'my', label:'Malaysia'},
        {value:'mx', label:'Mexico'},
        {value:'ng', label:'Nigeria'},
        {value:'nl', label:'Netherlands'},
        {value:'no', label:'Norway'},
        {value:'nz', label:'New Zeland'},
        {value:'ph', label:'Philippines'},
        {value:'pl', label:'Poland'},
        {value:'pt', label:'Portugal'},
        {value:'ro', label:'Romania'},
        {value:'ru', label:'Rusia'},
        {value:'sa', label:'Saudi Arabia'},
        {value:'se', label:'Sweden'},
        {value:'sg', label:'Singapore'},
        {value:'si', label:'Slovenia'},
        {value:'sk', label:'Slovakia'},
        {value:'za', label:'South Africa'},
        {value:'ch', label:'Switzerland'},
        {value:'th', label:'Thailand'},
        {value:'tr', label:'Turkey'},
        {value:'tw', label:'Taiwan'},
        {value:'ua', label:'Ukraine'},
        {value:'us', label:'United States'},
        {value:'ve', label:'Venezuela'},
    ]

    const OPCIONES = [
        {value: 'general', label:'General'},
        {value: 'business', label:'Business'},
        {value: 'entertaiment', label:'Entretaiment'},
        {value: 'health', label:'Health'},
        {value: 'science', label:'Science'},
        {value: 'sports', label:'Sports'},
        {value: 'technology', label:'Technology'},
    ]

    const [categoria, SelectNoticias] = useSelect('general', OPCIONES)
    const [pais, SelectPais] = useCountry('co',OPCIONES_PAIS)

    const buscarNoticias = e => {
        e.preventDefault()

        setCategoria(categoria)
        setPais(pais)
    }

    return (
        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Find By Country and Category</h2>
                    <SelectPais/>
                    <SelectNoticias/>
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`btn-large blue-grey darken-1 ${styles.btn_block}`}
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired,
    setPais: PropTypes.func.isRequired
}

export default Formulario
