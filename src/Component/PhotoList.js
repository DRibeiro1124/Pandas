import React, { Component } from 'react';
import hobbies from '../Data/hobbies.json'
import { Link } from 'react-router-dom'

class PhotoList extends Component {
    render() {
        const _category = this.props.match.params.category
        const _categoryData = hobbies[_category]
        
        return (
            <div>
               <header>{_categoryData.title}</header> 
               <p>{_categoryData.description}</p>
               <section>
                   {
                       _categoryData.photos.map((photo, i) => {
                           return <Link to={`/${_category}/${i}`}>
                           <img src={photo.imageURL} alt={photo.title} />
                           </Link>
                       })
                   }
               </section>
            </div>
        );
    }
}

export default PhotoList;
