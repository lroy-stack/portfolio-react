const Badge = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',
    success: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
    warning: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100',
    error: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100',
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
        variants[variant] || variants.default
      }`}
    >
      {children}
    </span>
  );
};

export default Badge;
