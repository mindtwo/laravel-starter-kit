import { createRoot } from 'react-dom/client';
import App from '@/apps/laravel/App';

const root = createRoot(document.getElementById('laravel') as Element);
root.render(<App />);
