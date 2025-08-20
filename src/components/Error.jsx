export const ErrorContainer = ({ message }) => {
  return (
    <div className="error-container p-10 bg-red-600 text-white w-fit">
      <h3>Error</h3>
      <p>{message}</p>
    </div>
  );
};
