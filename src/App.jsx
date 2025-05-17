import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resources from './pages/Resources';
import Team from './pages/Team';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resources" element={<Resources />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
