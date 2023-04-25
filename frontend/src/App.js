import { Routes, Route } from 'react-router-dom' 

import DashLayout from './components/DashLayout'
// import Dashboard from './features/edgeClientList'

function App() {
  return (
    <Routes>

        <Route path="/" element={<DashLayout />}>
        {/* <Route index element={<Dashboard />} /> */}

      </Route>
    </Routes>
  );
}

export default App;