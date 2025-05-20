import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import Board from "./pages/Board.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route index path='dashboard' element={<Dashboard/>}></Route>
                    <Route path='board' element={<Board />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>

    </StrictMode>,
)
