import React from 'react';

// const categoryDropDown = [
//     {id: 1, category: "Fun"},
//     {id: 2, category: "Health"}
// ]

const CardFormPost = () => {
    return (
        <div>
            <form>
                <div className= 'card mt-3 p-3' style={{background:"#DAEDFF"}}>
                    <h3 className='mt-4' style={{textAlign:"center", fontWeight: "bold", color: "#1D82E3"}}>
                        Posting Cerita
                    </h3>
                    <div className='p-2 mt-2'>
                        <div class="form-group">
                            <label for="category">Kategori</label>
                            <select class="form-control" id="categoryControl">
                                <option selected>Teman</option>
                                <option>Keluarga</option>
                                <option>Percintaan</option>
                            </select>
                        </div>
                        <div className='mt-3'>
                            <label for="story">Cerita Kamu</label>
                            <textarea class="form-control" id="storyArea" rows="7"></textarea>
                        </div>
                        <div className='d-grid mt-4'>
                            <button type="submit" class="btn btn-primary" style={{fontWeight: "bold", fontSize: "18px", backgroundColor: "#1D82E3"}}>POST</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CardFormPost;
