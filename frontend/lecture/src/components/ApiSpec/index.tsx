export const ApiSpec = ({
  method,
  endpoint,
  requestBody,
  responseBody,
  description,
  header,
}: {
  method: 'GET' | 'POST';
  endpoint: string;
  requestBody?: string;
  responseBody?: string;
  description?: string;
  header?: string;
}) => {
  return (
    <div className="my-4 rounded-lg border bg-white p-6 text-base shadow-md">
      <h2 className="mb-4 font-bold text-gray-800">
        {method} {endpoint}
      </h2>
      <p className="mb-4 text-gray-600">{description}</p>
      <div className="mb-6">
        {header !== undefined && (
          <>
            <h3 className="mb-2 font-semibold text-gray-700">요청 Header</h3>
            <pre className="overflow-x-auto rounded bg-gray-200 p-3">
              {header}
            </pre>
          </>
        )}
      </div>
      <div className="mb-6">
        {requestBody !== undefined && (
          <>
            <h3 className="mb-2 font-semibold text-gray-700">요청 Body</h3>
            <pre className="overflow-x-auto rounded bg-gray-200 p-3">
              {requestBody}
            </pre>
          </>
        )}
      </div>
      <div>
        <h3 className="mb-2 font-semibold text-gray-700">응답 Body</h3>
        <pre className="overflow-x-auto rounded bg-gray-200 p-3">
          {responseBody}
        </pre>
      </div>
    </div>
  );
};
