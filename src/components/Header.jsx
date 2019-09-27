import React from 'react'
import './Header.css'

export default class Header extends React.Component{
    render() {
        return(
            <header className='cabecalho'>
                <h1 className='titulo'>Curso de DelftSHIP</h1>
                <h3 className='subtitulo'>Faculdade de Engenharia Naval - UFPA</h3>
            </header>
        )
    }
}