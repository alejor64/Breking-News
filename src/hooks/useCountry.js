import React, {useState} from 'react'

const useCountry = (stateInicial, opcionesPais) => {

    const [state, setstate] = useState(stateInicial)

    const SelectPais = () => {
        return (
            <select 
                className="browser-default"
                value={state}
                onChange={e => setstate(e.target.value)}
            >
                {opcionesPais.map(opcion => (
                    <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                ))}
            </select>
        )
    }

    return [state, SelectPais]
}

export default useCountry
