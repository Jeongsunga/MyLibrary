import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Loginpage from './pages/Loginpage/Loginpage';
import AppLayout from './layout/AppLayout';
import 'bootstrap/dist/css/bootstrap.min.css'
import useUserStore from './stores/useUserStore';
import PrivateRoute from './route/PrivateRoute';

// 네비게이션(검색)
// 도서 전체 페이지
// 로그인 페이지
// 좋아요 페이지
function App() {
  const { authenticate, setAuthenticate } = useUserStore();
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="mypage" element={<PrivateRoute />} />
      </Route>
    </Routes>
  );
}

export default App;
