import React from 'react';
import './style.css';
import logoCorebiz from '../../assets/logo-corebiz-black.svg';
import iconFacebook from '../../assets/icon-facebook.svg';
import iconInstagram from '../../assets/icon-instagram.svg';
import iconLinkedin from '../../assets/icon-linkedin.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div className='first-div'>
                <img src={logoCorebiz} alt='Logo Corebiz' className='logo-corebiz' />
                <p className='rights-reserved'>direitos reservados. corebiz 2021</p>
                <div className='social-media'>
                    <a href='https://pt-br.facebook.com/corebiz.ag/' target='_blank' rel='noreferrer' className='link'><img src={iconFacebook} alt='Ícone Facebook' className='icon-facebook' /></a>
                    <a href='https://www.instagram.com/corebizag/' target='_blank' rel='noreferrer' className='link'><img src={iconInstagram} alt='Ícone Instagram' className='icon-instagram' /></a>
                    <a href='https://www.linkedin.com/company/corebiz-brasil' target='_blank' rel='noreferrer' className='link'><img src={iconLinkedin} alt='Ícone LinkedIn' className='icon-linkedin' /></a>
                </div>
            </div>
            <div className='menu-footer'>
                <ul>
                    <li><a href='https://www.corebiz.ag/pt/about/' target='_blank' rel="noreferrer" className='link'>a corebiz</a></li>
                    <li><a href='https://www.corebiz.ag/pt/#framework-title' target='_blank' rel="noreferrer" className='link'>serviços</a></li>
                    <li><a href='https://www.corebiz.ag/pt/cases/' target='_blank' rel="noreferrer" className='link'>cases</a></li>
                    <li><a href='https://www.corebiz.ag/pt/contato/' target='_blank' rel="noreferrer" className='link'>contato</a></li>
                </ul>
            </div>

            <address className='address'>
                <div className='countries'>
                    <div className='country'>
                        <h5 className='name-country'>.Brasil</h5>
                        <p className='unit-address'>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
                        <p className='unit-address'>R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
                    </div>
                    <div className='country'>
                        <h5 className='name-country'>.Argentina</h5>
                        <p className='unit-address'>.Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
                    </div>
                    <div className='country'>
                        <h5 className='name-country'>.México</h5>
                        <p className='unit-address'>Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</p>
                    </div>
                    <div className='country'>
                        <h5 className='name-country'>.Chile</h5>
                        <p className='unit-address'>Roberto del Río 1137, Providencia.</p>
                    </div>
                </div>
            </address>
        </footer>
    )
}

export default Footer