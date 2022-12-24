import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Homepage';
import { Admin } from './pages/Adminpage';
import { Kanban } from './pages/Kanbanpage';
import { Notfoundpage } from './pages/Notfoundpage';
import {Layout} from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="kanban" element={<Kanban />} />
              <Route path="admin" element={<Admin />} />
              <Route path="*" element={<Notfoundpage />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
