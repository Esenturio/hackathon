import Forum from './components/Forum/Forum';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SignUp from './components/SignUp/SignUp';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <CookiesProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Forum/>}/>
          <Route path="/forum" element={<Forum/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </Layout>
    </CookiesProvider>
  );
}

export default App;
