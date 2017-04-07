import React from 'react';
/**
 * Este componente contiene el input y el text area
 * para crear un nuevo post.
 */
export default class PostBox extends React.Component {
    // Necesitamos un constructor para crear un estado
    // interno para este componente.
    constructor(props) {
        super(props);
        // Inicializamos el estado con cada uno de los
        // valore que va a tener inicialmente.
        // Por defecto no hay ningun texto en el input
        // tampoco lo hay en el text area.
        // Y por convención establecemos el id a 0.
        this.state = {
            title: '',
            summary: '',
            votes:0,
            id:0
        }
    }

    // Cuando el usuario tipea en el title cambiamos el estado.
    // Especificamente actualizamo la key title del estado.
    onTitleChange = (e) =>{
        this.setState({title:e.target.value});
    };
    // Similar al anterior pero para el sumario.
    onSummaryChange = (e) =>{
        this.setState({summary:e.target.value});
    };

    handleClick = () =>{
        this.props.onPostSubmit(this.state);
        this.state = {
            title: '',
            summary: '',
            votes: 0,
            id: 0,
        };
    };

    render() {
        return (<div>
            <div>
                <input type="text" name="title" value={this.state.title} onChange={this.onTitleChange}/>
            </div>
            <div>
                <textarea name="summary" value={this.state.summary} onChange={this.onSummaryChange}/>
            </div>
            <div>
                <button type="submit" onClick={this.handleClick}>Enviar</button>
            </div>
        </div>)
    }
}