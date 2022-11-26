import Forum from './components/Forum/Forum';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/forum" element={<Forum/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
