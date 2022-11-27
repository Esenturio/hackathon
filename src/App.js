import Forum from './components/Forum/Forum';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SignUp from './components/SignUp/SignUp';
import { CookiesProvider } from 'react-cookie';
import Home from './components/Home/Home.jsx';
import News from './components/News/News';

function App() {
  return (
    <CookiesProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/forum" element={<Forum/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/news" element={<News/>}/>
        </Routes>
      </Layout>
    </CookiesProvider>
  );
}

export default App;
