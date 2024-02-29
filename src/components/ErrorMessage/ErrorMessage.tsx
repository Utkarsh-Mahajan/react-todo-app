import "./ErrorMessage.css";

const ErrorMessage = ({ isError }: { isError: boolean }) => {
  return isError && <p className="error">Error! content can't be empty</p>;
};

export default ErrorMessage;
