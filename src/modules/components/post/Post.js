import React, { Component } from 'react';
import CardFormPost from './card/CardFormPost';
import CardPost from './card/CardPost'
import CartCategory from './card/CartCategory';


class Post extends Component {
    render() {
        return (
            <div className='p-5' style={{marginTop: "50px"}}>
                <div className='row'>
                    <div className='row'>
                        <p style={{fontWeight: "bold", fontSize: "20px"}}>Kategori</p>
                    </div>
                    <div className='row'>
                        <CartCategory />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-9'>
                        <CardPost />
                    </div>
                    <div className='col-3'>
                        <CardFormPost />
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
