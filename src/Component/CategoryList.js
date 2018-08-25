import React, { Component } from 'react';
import hobbies from '../Data/hobbies.json'
import { Link } from 'react-router-dom'

class CategoryList extends Component {

    componentDidMount () {

    }
    render() {
        return (
            <div className="main-body">

                {Object.keys(hobbies).map((hobbyKey, i) => {
                    return <section className="image-card" key={i}>
                        <header><Link to={`/${hobbyKey}`}>{hobbies[hobbyKey].title}</Link></header>
                        <p>{hobbies[hobbyKey].description}</p>
                        <img src={hobbies[hobbyKey].photos[0].imageURL} alt={hobbies[hobbyKey].photos[0].title} />
                    </section>
                })}
                
            </div>
        );
    }
}

export default CategoryList;
