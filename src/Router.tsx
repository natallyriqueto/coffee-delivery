import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DefaultLayout } from '@/layout/DefaultLayout';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                {/* <Route path="/checkout" element={<History />} /> */}
                {/* <Route path="/success" element={<History />} /> */}
            </Route>
        </Routes>
    );
}