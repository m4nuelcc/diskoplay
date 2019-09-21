import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {BrowserRouter, Route} from 'react-router-dom'
import CojerAjax from './components/Test'
import Cabecera from './components/Cabecera'
import {Diskos}  from './components/Test'
import {Stitch, RemoteMongoClient, AnonymousCredential} from "mongodb-stitch-browser-sdk";
export const stitch = Stitch.initializeDefaultAppClient('discoplay-hrzqc')
export const mongo = stitch.getServiceClient(RemoteMongoClient.factory,'mongodb-atlas')

// para logearte en stitch

if(!stitch.auth.isLoggedId){
  stitch.auth.loginWithCredential(new AnonymousCredential() )

}

console.log('logged?', stitch.auth.isLoggedIn)
export const ajaxGet = (url, cb) => {
    fetch( url, {
      method: 'GET',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      // body: JSON.stringify(this.state)
    })
    .then( res => { return res.json() })
    .then( data => { cb(data) } )
    // devuelve Promise, dejamos el último then() para que lo haga el Component  
  }
  class Bienvenida extends React.Component {
    render() {
        return (
            <div>
                 <Cabecera/>
                 {/* <CojerAjax/> */}
                 <Diskos/>

            </div>
        
        )
    }
}


const rutas =(
    <BrowserRouter>
    <Route exact path="/" component={Bienvenida}/>
    <Route path="/Ajax" component={CojerAjax}/>

    </BrowserRouter>
)
ReactDOM.render(rutas,document.getElementById('root'))