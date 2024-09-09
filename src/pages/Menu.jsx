import 'src/styles/Menu.css'

import { Link } from 'react-router-dom';

const Wish = () => {

    return (
        <div className='menu-container'>
        <p>오은영연구소에 오신 것을 환영합니다.</p>
        
        <Link to={'/wish'} className='info'><img src='menu/info.png' /></Link>
        <Link to={'/wish'} className='lib'><img src='menu/lib.png' /></Link>
        <Link to={'/wish'} className='play'><img src='menu/play.png' /></Link>
        <Link to={'/wish'} className='wish'><img src='menu/wish.png' /></Link>
        
        </div>
    );
};

export default Wish;