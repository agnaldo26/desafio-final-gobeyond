import './style.css';
import arrowSeeMore from '../../assets/arrow-see-more.svg';

function Main() {
    return (
        <main>
            <div className='div-title'>
                <h2 className='title'>
                    a Corebiz atua em toda jornada digital do usuário.
                </h2>
            </div>
            <div className='div-see-more'>
                <a href='https://www.corebiz.ag/pt/' target='_blank' rel="noreferrer" className='link-see-more'>
                    <span className='text-see-more'>veja mais</span>
                    <img src={arrowSeeMore} alt='flexa veja mais' className='arrow-see-more' />
                </a>
            </div>
        </main>
    )
}

export default Main;