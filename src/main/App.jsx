import React from 'react'
import './App.css'

import {BrowserRouter} from 'react-router-dom'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Routes from '../components/routes/Routes'

export default class App extends React.Component {
    render() {
        return(
            <div className='site'>
            
                <Header/>
                <BrowserRouter className='routes'>
                    <Nav/>
                    <Routes/>
                </BrowserRouter>
                <Footer/>
            
            </div>
        )
    }
}