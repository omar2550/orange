import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/layout/Layout"
import DSLHome from "./pages/DSLHome"
import HowToComplain from "./pages/HowToComplain"
import LineDown from "./pages/technical/LineDown"
import ViewAllTechnical from "./pages/technical/ViewAllTechnical"
import LedOk from "./pages/technical/LedOk"
import VoiceWorking from "./pages/technical/VoiceWorking"
import Matched from "./pages/technical/Matched"
import LineStillDown from "./pages/technical/LineStillDown"

function App() {

  return (
    <div className="bg-gray-50">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<div />} />
          <Route path="home-dsl-packages" element={<DSLHome />} />
          <Route path="how-to-complain" element={<HowToComplain />} />
          <Route path="view-all-technical" element={<ViewAllTechnical />} />
          <Route path="line-down" element={<LineDown />} />
          <Route path="led-ok" element={<LedOk />} />
          <Route path="voice-working" element={<VoiceWorking />} />
          <Route path="matched" element={<Matched />} />
          <Route path="linedown" element={<LineStillDown />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
