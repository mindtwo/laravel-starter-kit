import { useResources } from '@/features/laravel/api/getResources';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export function Laravel() {
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
