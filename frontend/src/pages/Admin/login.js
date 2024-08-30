import { message } from 'antd';
import React from 'react'
import axios from 'axios';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';
import { useDispatch } from 'react-redux';

function Login() {
    const [user, setUser] = React.useState({
        username: '',
        password: ''
    });
    const dispatch = useDispatch();

    const login = async () => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/portfolio/admin-login`, user);
            dispatch(HideLoading());
            if(response.data.success){
                message.success(response.data.message);
                localStorage.setItem('token', JSON.stringify(response.data));
                window.location.href = '/admin';
            }else{
                message.error(response.data.message);
            }
        } catch (error) {
            message.error('Something went wrong');
            dispatch(HideLoading());
        }
    };
        
  return (
   <div className='flex items-center justify-center h-screen bg-primary'>
    <div className=' w-1/3 p-5 shadow border border-gray-500 flex flex-col bg-white'>
        <h1 className='text-center text-2xl my-3 font-semibold'>Admin Login</h1>
        <div className='space-y-5'>
        <input type="text" placeholder="Username" value={user.username} onChange={(e)=>setUser({...user, username: e.target.value})} />
        <input type="password" placeholder="Password" value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})} />
        <button className='bg-primary text-white py-2 px-4 rounded' onClick={login}>Login</button>
    </div>
    </div>
   </div>
  )
}

export default Login