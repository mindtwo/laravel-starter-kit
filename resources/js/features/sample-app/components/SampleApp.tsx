import { useResources } from '@/features/sample-app/api/getResources';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export function SampleApp() {
  const { isLoading, data } = useResources();

  if (isLoading) return <LoadingSpinner />;
  if (!data) return null;

  return (
    <div>
      {data.map((resource) => (
        <div key={resource.id}>{resource.id}</div>
      ))}
    </div>
  );
}
