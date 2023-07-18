import './App.css';
import Sidebar from './components/dashboard/Sidebar';
import GpthubArea from './components/dashboard/gpthub_area/GpthubArea';
import WorkingArea from './components/dashboard/lessonapp_area/LessonArea';
import DashboardPage from './pages/DashboardPage';
import GpthubCategorySection from './components/dashboard/gpthub_area/GpthubCategorySection';
import GpthubChatsSection from './components/dashboard/gpthub_area/GpthubChatsSection';
import PeraiArea from './components/dashboard/personalai_area/PeraiArea';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [gpthubcategory, setGpthubcategory] = useState(null)
  const handleGpthubcategory = (idx) => {
      setGpthubcategory(idx)
  }
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route index element={<Navigate to="/userdashboard" />} />
          <Route path='/userdashboard/*' element={<DashboardPage />}>
            <Route index element={<Navigate to="lesson_app" />} />
            <Route path='lesson_app' element={<WorkingArea />} />
            <Route path='gpt_hub' element={<GpthubArea gpthubcategory={gpthubcategory} handleGpthubcategory={handleGpthubcategory}/>} >
              <Route index element={<Navigate to="category" />} />
              <Route path='category' element={<GpthubCategorySection  gpthubcategory={gpthubcategory} handleGpthubcategory={handleGpthubcategory}/>} />
              <Route path='chats' element={<GpthubChatsSection idx={gpthubcategory}/>} />
            </Route>
            <Route path='personal_ai' element={<PeraiArea />}>
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
