import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Forum from './components/Forum/Forum';
import Main from './components/Main/Main';
import News from './components/News/News';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Main/>}/> */}
          <Route path="/" element={<News/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
