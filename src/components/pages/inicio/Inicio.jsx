import React, { Component } from 'react'
import './Inicio.css'

export default class Inicio extends Component {
    render() {
        return (
            <div className='principal'>
                    <section>
                        <h2>Introdução</h2>
                        <h3>
                            Seja bem-vindo ao curso de DelftSHIP 2019, ofertado pelo CAENAV 
                            (Centro Acadêmico de Engenharia Naval) durante a SITEC (Semana do ITEC), 
                            e ministrado por mim, Denis Nascimento, estudante do curso de engenharia 
                            naval :D.
                        </h3>
                    </section>

                    <section>
                        <h2>Conhecendo o software</h2>
                        <h3>
                            <p>
                                Primeiramente devemos saber que o DelftSHIP é dividido em módulos,
                                ou seja, ele é como se fosse um lego onde cada módulo representa uma
                                peça, e cada peça (módulo) possui uma finalidade, como cálculos estruturais,
                                estabilidade em avaria, simulações de carga e descarga com guindastes, enfim,
                                há um grande leque de possibilidades que ele nos disponibiliza.
                            </p>

                            <video id='meuvideo' width='1080' height='720' controls >
                                <source src='http://files.cod3r.com.br/curso-web/video.mp4'  type='video/mp4'/>
                            </video>

                            <p>
                                Sabendo disso, o que iremos estudar nesse curso será o seu módulo padrão,
                                o qual nos possibilita criar um modelo 3D da nossa embarcação além de obter
                                o seu plano de linhas em formato DWG (AutoCad), a sua tabela de cotas e os 
                                cálculos básicos de arquitetura naval (curvas hidróstáticas).
                            </p>
                        </h3>
                    </section>
            </div>
        )
    }
}
