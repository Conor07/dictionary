const LoadingAndError = ({ dataLoaded }) => {
  return (
    <>
      {!dataLoaded ? (
        <div className="loading">loading...</div>
      ) : (
        <div className="error">
          error:
          <br />
          please search for another word
        </div>
      )}
    </>
  );
};

export default LoadingAndError;
