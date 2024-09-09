import { useState,useRef,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'src/styles/Wish.css'
import { getWishList } from '../services/WishService';
import { Link } from 'react-router-dom';

const Wish = () => {
    const [wishList, setWishList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWishList = async () => {
            try {
                const response = await getWishList();
                setWishList(response.data);
            } catch (error) {
                console.error('Error fetching wish list:', error);
            }
        };
        fetchWishList();
    }, []);

    return (
        <div className='wh-container'>
        <div className="wish-container">
            <img src="/wish/background.png" className="background"/>
                {wishList.length > 0 ? (
                    <ul className="wishlist-container">
                        {wishList.map((wish) => (
                            <li key={wish.id} className="wish-item">
                                <img src='/wish/watchbtn_.png' className='type-image'/>
                                <p>{wish.content}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>등록된 소원이 없습니다.</p>
                )}
        </div>
        </div>
    );
};

export default Wish;
