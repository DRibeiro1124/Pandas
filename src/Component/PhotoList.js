import React, { Component } from 'react';
import hobbies from '../Data/hobbies.json'

class PhotoList extends Component {
    render() {
        return (
            <div>
               <header>{hobbies[this.props.match.params.category].title}</header> 
               <p>{hobbies[this.props.match.params.category].description}</p>
               <section>
                   {
                       hobbies[this.props.match.params.category].photos.map((photo, i) => {
                           return <img src={photo.imageURL} alt={photo.title} />
                       })
                   }
               </section>
            </div>
        );
    }
}

export default PhotoList;
