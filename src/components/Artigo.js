import React from 'react'
import BemVindo from './BemVindo'
import Conteudo from './Conteudo'

const Artigo = props => (
    <div>
        <BemVindo nome={props.nome} />
        <Conteudo texto={props.texto} />
    </div>
)

export default Artigo