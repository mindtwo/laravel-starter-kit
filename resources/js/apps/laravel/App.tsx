import { AppProvider } from '@/providers/app';
import { Laravel } from '@/features/laravel/components/Laravel';

function App() {
  return (
    <AppProvider>
      <Laravel />
    </AppProvider>
  );
}

export default App;
