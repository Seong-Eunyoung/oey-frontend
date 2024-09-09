import { useState,useRef,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'src/styles/Wish.css'
import { submitWish } from '../services/WishService';
import { Link } from 'react-router-dom';
import IdFromToken from 'src/services/IdFromToken';
import { getUserId } from '../services/UserService';

const Wish = () => {
    // 지니 등장 기능
    const [isClicked, setIsClicked] = useState(false);
    const imageRef = useRef(null);

    const handleImageClick = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const { width, height } = imageRef.current;

        const clickArea = { x: 2*width/3, y: 5*height/6 };

        if (Math.abs(x - clickArea.x) < 50 && Math.abs(y - clickArea.y) < 30) { // area around (100, 150)
            setIsClicked(true);
        }
    };

    // 타입, 내용  받기
    const [wish, setWish] = useState({});
    const navigate = useNavigate();
    
    const [userId, setUserId] = useState(null);

    useEffect(() => {
      const fetchUserId = async () => {
        try {
          const token = localStorage.getItem('token');
          const username = IdFromToken(token);
          const response = await getUserId(username);
          setUserId(response.data);
          const defaultWish = { userId: userId, type: 'etc', content: '' };
          setWish(defaultWish);
          console.log(username);
          console.log(userId);
        } catch (error) {
          console.error('Error fetching user ID:', error);
        }
      };
  
      fetchUserId();
    }, [userId]);

    const handleChange = (event) => {
        setWish({...wish, content: event.target.value});
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (wish.content=='') { alert("내용을 입력하세요.")}
        else {
        submitWish(wish).catch(error => {
            console.error(error);
        });
        navigate('/wishlist');
    }
    };

    return (
        <div className='wh-container'>
        <div className="wish-container">
            <img src="/wish/background.png" className="background"
                ref={imageRef} onClick={handleImageClick}
            />
            {isClicked && (
                
                <div className="genie-container">
                    <img src={'/wish/genie.png'} className="genie"
                    />
                    <img src={'/wish/genietalk.png'} className="genietalk"
                    />
                    <div className='type-container'>
                        <img src='/wish/watchbtn.png' className='btn' 
                            onClick={()=>setWish({...wish, type:'watch'})}/>
                        <img src='/wish/gobtn.png' className='btn' 
                            onClick={()=>setWish({...wish, type:'go'})}/>
                        <img src='/wish/eatbtn.png' className='btn' 
                            onClick={()=>setWish({...wish, type:'eat'})}/>
                        <img src='/wish/etcbtn.png' className='btn' 
                            onClick={()=>setWish({...wish, type:'etc'})}/>
                    </div>
                    <div className='submit-container'>
                        <textarea id="textInput"
                            value={wish.content}
                            onChange={handleChange}
                            className="text-input"
                            placeholder="소원을 빌어보세요."
                        />
                        <img src='/wish/sendbtn.png' className='sendbtn' onClick={handleSubmit}/>
                        <Link to='/wishlist'><img src='/wish/listbtn.png' className='listbtn'/></Link>
                        
                    </div>
                </div>
                
            )}
        </div>
        </div>
    );
};

export default Wish;
