import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default class Nav extends React.Component{
    render() {
        return(
            <nav className='navegacao'>
                
                <Link className='link' to="/seja-bem-vindo">Parte 1 - Introdução</Link>
                <Link className='link' to="/comandos">Parte 2 - Comandos</Link>
                <Link className='link' to="/disciplinas">Parte 3 - Iniciando</Link>
                <Link className='link' to="/avisos">Parte 4 - Plano de linhas e curvas hidrostáticas</Link>
                
            </nav>
        )
    }
}