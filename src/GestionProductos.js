import React from 'react'
import { productos } from './index'

class SelectProductos extends React.Component {
    render(){
        return (<div className="centrar">
            <select>
            {productos.map((p,i) => {return <option className="azul" key={i}>{p.nombre} </option>})}
            </select>
        </div>)
    }
}

class ListadoProductos extends React.Component{
    render(){ return <div>
        {productos.map( (p,i) => { return <ShowProducto key={i} {...p}/> })}
    </div>}
}

class ShowProducto extends React.Component{
    render(){
        return <div>
            <h3 className="manita centrar sombra">{this.props.nombre}</h3>
        </div>
    }
}

export class Home extends React.Component {
    render(){ return <div>
            <SelectProductos />
            <ListadoProductos />
        </div>
    }
}


