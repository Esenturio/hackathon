import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Forum from './components/Forum/Forum';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <Layout>
        <Main/>
        <Routes>
          <Route path="/" element={<Forum/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
