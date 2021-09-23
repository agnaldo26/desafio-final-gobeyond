import React, {useState} from 'react';
import './style.css';
import logoCorebiz from '../../assets/logo-corebiz-global.svg';
import imgMenu from '../../assets/img-menu.svg'


function HeaderMobile() {
    const [displayMenu, setDisplayMenu] = useState(false)
    let display = displayMenu ? ' open' : '';
    
    function handleMenu(){
        setDisplayMenu(!displayMenu);
    }

    return (
        <header>
            <div className='first-row-header'>
                <img src={logoCorebiz} alt='Logo Corebiz' className='logo-corebiz-white' />
                <img src={imgMenu} alt='Botão de menu' className='img-menu' onClick={handleMenu}></img>
            </div>
            
            <div className={'menu' + display}>
                <ul>
                    <li><a href='https://www.corebiz.ag/pt/about/' target='_blank' rel="noreferrer" className='link'>a corebiz</a></li>
                    <li><a  href='https://www.corebiz.ag/pt/#framework-title' target='_blank' rel="noreferrer" className='link'>serviços</a></li>
                    <li><a href='https://www.corebiz.ag/pt/cases/' target='_blank' rel="noreferrer" className='link'>cases</a></li>
                    <li><a href='https://www.corebiz.ag/pt/contato/' target='_blank' rel="noreferrer" className='link'>contato</a></li>
                </ul>
            </div>
        </header>
    )
}

export default HeaderMobile;