import React, { Component } from 'react'
import {ajaxGet } from '../index'



export default class CogerAjax extends Component {
    
    state ={ datos: [] }
    
    hacerAjax(){
       ajaxGet('http://localhost:3000/manuel/diskoplay', (diskos) => {
           console.log(diskos)
           this.setState({datos:diskos}) 
        })
    }
    render() {
        return (
            <div>
            
                <button onClick={()=> this.hacerAjax()}>hace el ajax a cosola</button>
                {this.state.datos.map( (c, i ) => <div key ={c._id}> {c.disko} </div> )}

                
            </div>
        )
    }
}


class DiskoComponent{
    constructor( ){
    this.grupo = ''
    this.disko = ''
    this.precio = ''
    }
    }
    
    
    
    export class Diskos extends React.Component {
    state = {
    datos: new DiskoComponent()
    }
    rendergrupo(){
    return <input
    title="Introduce el grupo"
    className="form-control"
    placeholder="Grupo"
    onChange = {(c) => {this.setState ({datos: {...this.state.datos, grupo: c.target.value}}) }} />
    }
    renderdisko(){
        return <input
        title="Introduce el disko"
        className="form-control"
        placeholder="Disko"
        onChange = {(c) => {this.setState ({datos: {...this.state.datos, disko: c.target.value}}) }} />
        }

    renderprecio(){
        return <input
        title="Introduce el precio"
        className="form-control"
        placeholder="Precio"
        onChange = {(c) => {this.setState ({datos: {...this.state.datos, precio: c.target.value}}) }} />
        }   

        

    render() {
    
    return (
    <div>
    {this.rendergrupo()}
    {this.renderdisko()}
    
    {JSON.stringify(this.state)}
    </div>
    )
    
    }
    }