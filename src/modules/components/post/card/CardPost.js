import React from 'react';

const CartPost = () => {
    const MarginSmall = {
        margin:"10px 0"
    }
    const MarginLarge = {
        margin:"20px 0"
    }
    return (
        <div>
            <div className='Margin mt-3'>
                <div class="card p-4" style={{background:"#DAEDFF"}}>
                    
                    {/* Control Get dari Date dan Username Pemosting */}
                    <div>Date Now / User Post Username</div>
                    
                    {/* Control Kategori Yang Terpilih  */}
                    <div style={{fontWeight:"900", padding:"5px 0"}}>Kategori</div>
                    
                    {/* Control Get Dari Postingan Komentar  */}
                    <div>
                        <div class="card-body" style={{background:"white", borderRadius:"0.375rem"}}>
                            This is some text within a card body.
                        </div>
                        
                        {/* Control Jumlah Suka Dan Komentar  */}
                        <div><span> Suka </span> <span>Komentar</span></div>
                    </div>
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Masukkan Komentar"></input>
                </div>
            </div>

        {/* Komentar ke 2 */}
            <div className='Margin' style={{margin:"20px 0"}} >
                <div class="card" style={{background:"#DAEDFF", padding:"20px"}}>
                    
                    {/* Control Get dari Date dan Username Pemosting */}
                    <div>Date Now / User Post Username</div>
                    
                    {/* Control Kategori Yang Terpilih  */}
                    <div style={{fontWeight:"900", padding:"5px 0"}}>Kategori</div>
                    
                    {/* Control Get Dari Postingan Komentar  */}
                    <div>
                        <div class="card-body" style={{background:"white", borderRadius:"0.375rem"}}>
                            This is some text within a card body.
                        </div>
                        
                        {/* Control Jumlah Suka Dan Komentar  */}
                        <div style={MarginSmall}><span> Suka </span> <span>Komentar</span></div>
                    </div>
                
                {/* Get Komentar User */}
                    <div>
                        <div class="card-body" style={{background:"white", borderRadius:"0.375rem"}}>
                            <div>Date Now / User Post Username</div>
                            This is some text within a card body.
                        </div>
                    </div>
                    
                    <div style={MarginLarge}>
                        <input type="text" class="form-control" id="" aria-describedby="" placeholder="Masukkan Komentar"></input>
                    </div>
                </div>
            </div>

            <div>
                
            </div>
        </div>
    );
}

export default CartPost;
