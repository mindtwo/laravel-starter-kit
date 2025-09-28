import { createRoot } from 'react-dom/client';
import App from '@/apps/sample-app/App';

const root = createRoot(document.getElementById('sample-app') as Element);
root.render(<App />);
