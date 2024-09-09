import 'src/styles/Menu.css'

import { Link } from 'react-router-dom';

const Wish = () => {

    return (
        <div className='lib-container'>
        <img className='background' src='lib/background.png'/>
        <div className='libmenu-container'>
        <h1>Welcome to Bibliotheca Alexandrina,</h1>
        <h2>where the moments become memories.</h2>
 
        <Link to={'/wiki'} className='wiki'><img src='lib/wiki.png' /></Link>
        <Link to={'/record'} className='record'><img src='lib/record.png' /></Link>
        <Link to={'/album'} className='album'><img src='lib/album.png' /></Link>
        </div>
        </div>
    );
};

export default Wish;