import React from 'react';
/**
 * Este componente es el encargado de renderizar 1 solo posts.
 *
 * Podríamos llamarlo PostItem también.
 */
export default class Post extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.summary}</p>
                <div>Votes: {this.props.votes}</div>
                <button onClick={event => this.props.onVote(this.props.id) }>+1</button>
            </div>)
    }
}
   
