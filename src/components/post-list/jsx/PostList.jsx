import React from 'react';
import PostBox from '../../post-box/jsx/PostBox'
import Post from '../../post/jsx/Post';

/**
 * Este componente por un lado se encarga de mostrar el postBox y por el
 * otro renderiza la lista de posts que se encuentran en el estado.
 */
export default class PostList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <div>
                <PostBox {...this.props} />
            </div>
            <div>

                {
                    // Cada post es un objeto pero para renderizar nosotros necesitamos
                    // un componente. Para eso nos sirve map. Map itera sobre cada objeto
                    // post de la lista y devuelve un componente post pasando los datos
                    // por propiedad.
                    Array.from(this.props.posts).map((post, index) => {
                        return <Post key={index} {...post} onVote={this.props.onVote}/>
                    })}
            </div>
            div>
        </div>)
    }
}