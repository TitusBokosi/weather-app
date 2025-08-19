export const ErrorContainer = ({ message }) => {
  return (
    <div className="error-container">
      <h3>Error</h3>
      <p>{message}</p>
    </div>
  );
};
