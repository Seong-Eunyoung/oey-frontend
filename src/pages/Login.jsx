import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'src/styles/Login.css';

const Login = () => {

  const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [imageSrc, setImageSrc] = useState('/login/both.png');
    const imageRef = useRef(null);

    useEffect(()=>{
      if (username=='yoon') setImageSrc('/login/yoon.png');
      else if (username=='young') setImageSrc('/login/eun.png');
      else setImageSrc('/login/both.png');
    },[username]);

    const handleMouseMove = (event) => {
      const img = imageRef.current;
      if (img) {
        const rect = img.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const halfWidth = rect.width / 2;

        if (x < halfWidth && username=='') {
          setImageSrc('/login/yoon.png');
        } else if(x>=halfWidth && username=='') {
          setImageSrc('/login/eun.png');
        }
      }
    };

    const handleClick = (event) => {
      const img = imageRef.current;
      if (img) {
        const rect = img.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const halfWidth = rect.width / 2;

        if (x < halfWidth) {
          setUsername('yoon');
        } else {
          setUsername('young');
        }
      }
    };

    const handleMouseLeave = () => {
      if (username=='')
      setImageSrc('login/both.png');
    };

    // 백앤드 통신
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                username,
                password
            });
            localStorage.setItem('token', response.data);
            console.log(response.data);
            alert('환영합니다.');
            navigate('/wish');
            
        } catch {
            setError('비밀번호가 일치하지 않습니다.');
        }
    };

    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleLogin(event);
      }
    };

    const userSelect = () => {
      if (username=='') {return <p className='welcome'>당신의 아바타를 선택하세요.</p>}
      else {
        return <form onSubmit={handleLogin}>
                  <div className='password-container'>
                      <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onKeyDown={handleKeyPress}
                          placeholder='비밀번호를 입력하세요.'
                      />
                  </div>
                  {error && <p className='welcome'>{error}</p>}
                </form>
      }
    }

    return (
        <div className='login-container'>
            <p className='welcome'>오은영 연구소에 오신 것을 환영합니다.</p>
            <img ref={imageRef} src={imageSrc} className='login-image'
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            />
            {userSelect()}
        </div>
    );
};

export default Login;
