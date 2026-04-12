const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
