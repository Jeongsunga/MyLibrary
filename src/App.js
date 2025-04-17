import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Loginpage from './pages/Loginpage/Loginpage';
import Mypage from './pages/Mypage/Mypage';
import 'bootstrap/dist/css/bootstrap.min.css'

// 네비게이션(검색)
// 도서 전체 페이지
// 로그인 페이지
// 좋아요 페이지
function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/mypage' element={<Mypage/>}/>
    </Routes>
  );
}

export default App;
