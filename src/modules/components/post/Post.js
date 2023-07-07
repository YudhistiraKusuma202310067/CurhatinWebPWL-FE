import React, { Component } from 'react';
import CardFormPost from './card/CardFormPost';
import CardPost from './card/CardPost'
import CardCategory from './card/CardCategory';

class Post extends Component {
    render() {
        return (
            <div className='p-5' style={{marginTop: "50px"}}>
                <div className='row'>
                    <div className='row'>
                        <p style={{fontWeight: "bold", fontSize: "20px"}}>Kategori</p>
                    </div>
                    <div className='row'>
                        <CardCategory />
                    </div>
                </div>
                <div className='mt-4 mb-2' style={{borderTop: "3px solid #DAEDFF"}}></div>
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