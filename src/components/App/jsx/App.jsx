import React from 'react';
import PostList from '../../post-list/jsx/PostList'

/**
 * Este componente es el contenedor de nuestra aplicación.
 *
 * Dentro ponemos PostList y le pasamos por propiedad los posts iniciales.
 *
 * postData es un array de objetos posts definidos dentro de postData.js
 */
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    componentDidMount(){
        fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(post => {
                this.setState({
                    posts:post
                });
            }).catch(error => console.log('Error:',error ));
    }

    onVote = (id) => {
       let ps = this.state.posts.map(post => {
           if(post.id === id){
               post.votes  += 1;
           }
           return post;
       });
        this.setState({
            posts:ps
        });
    };
    // Este listener escucha cada vez que un posts es submiteado.
    onPostSubmit = (post) => {
        // Para los id estamos utilizando un valor que se incrementa
        post.id = this.getNextId();
        // Esta sintaxis puede parecer un poco extraña:
        // [post, ...this.state.posts]
        // Lo que hace es simplemente decir que el primer
        // elemento del array va a ser post y va a extraer
        // todos los posts que se encuentran dentro de this.state.posts
        // para el resto del array.
        //
        // En definitiva hacemos que el nuevo post vaya al principio de
        // la lista así podemos verlo luego de presionar submit sin necesidad
        // de hacer scroll.
        this.setState({posts:[post, ...this.state.posts]})

    };

    getNextId = () => {
        return this.state.posts.reduce((max, post) => {
            if(post.id > max){
                max = post.id
            }
            return max
        },0) + 1;
    }


    render() {
        return (<div>
            <PostList posts={this.state.posts} onVote={this.onVote} onPostSubmit={this.onPostSubmit} />
        </div>);
    }
}