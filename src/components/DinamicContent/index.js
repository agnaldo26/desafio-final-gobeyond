import React, { useState } from 'react';
import './style.css'
import bigImg1 from '../../assets/big-img1.jpg';
import bigImg2 from '../../assets/big-img2.jpg';
import bigImg3 from '../../assets/big-img3.jpg';
import bigImg4 from '../../assets/big-img4.jpg';
import arrowSeeMore from '../../assets/arrow-see-more.svg';

function DinamicContent() {
    const [selectImg1, setSelectImg1] = useState(true);
    const [selectImg2, setSelectImg2] = useState(false);
    const [selectImg3, setSelectImg3] = useState(false);
    const [selectImg4, setSelectImg4] = useState(false);

    const Img1 = ()=>{
        return(
            <img src={bigImg1} alt='Imagem pequena' key='img1' onClick={() =>{
                setSelectImg1(true)
                setSelectImg2(false)
                setSelectImg3(false)
                setSelectImg4(false)
            }} className={selectImg1? 'little-img select' : 'little-img'} />
        )
    }

    const Img2 = ()=>{
        return(
            <img src={bigImg2} alt='Imagem pequena' key='img2' onClick={() =>{
                setSelectImg2(true)
                setSelectImg1(false)
                setSelectImg3(false)
                setSelectImg4(false)
            }} className={selectImg2? 'little-img select' : 'little-img'} />
        )
    }

    const Img3 = ()=>{
        return(
            <img src={bigImg3} alt='Imagem pequena' key='img3' onClick={() =>{
                setSelectImg3(true)
                setSelectImg1(false)
                setSelectImg2(false)
                setSelectImg4(false)
            }} className={selectImg3? 'little-img select' : 'little-img'} />
        )
    }

    const Img4 = ()=>{
        return(
            <img src={bigImg4} alt='Imagem pequena' key='img4' onClick={() =>{
                setSelectImg4(true)
                setSelectImg1(false)
                setSelectImg2(false)
                setSelectImg3(false)
            }} className={selectImg4? 'little-img select' : 'little-img'} />
        )
    }

    let BigImg = () =>{
        if(selectImg1){
            return <img src={bigImg1} alt='Imagem grande' className='big-img' />
        } else if(selectImg2){
            return <img src={bigImg2} alt='Imagem grande' className='big-img' />
        } else if(selectImg3){
            return <img src={bigImg3} alt='Imagem grande' className='big-img' />
        } else if(selectImg4){
            return <img src={bigImg4} alt='Imagem grande' className='big-img' />
        }
    }

    let Text = ()=>{
        if(selectImg1){
            return <h2 className='title'>a Corebiz atua em toda jornada digital do usuário.</h2>
        } else if(selectImg2){
            return <h2 className='title'>Desde a configuração de plataformas, implementações e integrações,</h2>
        } else if(selectImg3){
            return <h2 className='title'>até a entrega de uma excelente experiência de consumo.</h2>
        } else if(selectImg4){
            return <h2 className='title'>trabalhamos para uma melhor performance digital.</h2>
        }
    }

    return (
        <>
            <div className='div-title'>
                <Text />
            </div>

            <div className='div-see-more'>
                <a href='https://www.corebiz.ag/pt/' target='_blank' rel="noreferrer" className='link-see-more'>
                    <span className='text-see-more'>veja mais</span>
                    <img src={arrowSeeMore} alt='flexa veja mais' className='arrow-see-more' />
                </a>
            </div>

            <div className='container-big-img'>
                <BigImg/>
            </div>

            <div className='container-little-imgs'>
                <Img1 />
                <Img2 />
                <Img3 />
                <Img4 />
            </div>
        </>
    )
}

export default DinamicContent