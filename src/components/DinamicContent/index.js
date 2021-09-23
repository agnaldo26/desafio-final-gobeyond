import React from 'react';
import './style.css'
import Images from '../../database'

function DinamicContent() {
    return (
        <>
            <div className='big-img'>
                <img src={Images[0].url} alt='Imagem grande' className='big-img'/>
            </div>
            <div className='container-little-imgs'>
                {Images.map((img) => {
                    return (
                        <img src={img.url} alt='Imagem pequena' className={'little-img'} key={JSON.stringify(img.id)} />
                    )
                })}
            </div>
        </>
    )
}

export default DinamicContent