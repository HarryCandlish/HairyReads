import React, {Component} from 'react'
import { get } from 'https';

    class Images extends Components {
        constructor(){
        super()
        this.state = {
            images: []
        }
    }
    componentDidMount(){
        request
        .get('/images')
        .end((err,res) => {
            this.setState({images:res.body.id})
        })
    }
    render(){
        return (
            <div>
                <ul>
                {this.state.images.map((image) => {
                    return <li>{image.book_images[0].id}</li>
            })}
                </ul>
                </div>
        
        )
    }
}


export default Images