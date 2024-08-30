import React from 'react'
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Loader from './components/loader';
import { useSelector, useDispatch } from 'react-redux';
import { SetPortfloioData, ShowLoading, HideLoading, ReloadData } from './redux/rootSlice';
import Admin from './pages/Admin';
import Login from './pages/Admin/login';

function App() {
  const {loading, portfolioData, reloadData} = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio/get-data`);
      dispatch(SetPortfloioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
    }
  }
  React.useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  React.useEffect(()=>{
    if(reloadData){
      getPortfolioData();
    }
  }, [reloadData]);

  return (
      <BrowserRouter>
      {loading ? <Loader /> : null}
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/admin-login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
