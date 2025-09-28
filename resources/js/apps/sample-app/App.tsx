import { AppProvider } from '@/providers/app';
import { SampleApp } from '@/features/sample-app/components/SampleApp';

function App() {
  return (
    <AppProvider>
      <SampleApp />
    </AppProvider>
  );
}

export default App;
