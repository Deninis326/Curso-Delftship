import React from 'react'
import Comandos from '../pages/comandos/Comandos'
import Inicio from '../pages/inicio/Inicio'

import { Route} from 'react-router-dom'

const Routes = props => {
     return (
        <div className='routes' >    
            <Route path ='/seja-bem-vindo' component={Inicio} exact/>
            <Route path ='/comandos' component={Comandos}/> 
        </div>     
    )
}

export default Routes