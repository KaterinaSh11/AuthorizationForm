export const Input = ({
  size = "md",
  radius = "md",
  label,
  isAsterisk,
  description,
  error,
  icon,
  rightSection,
  ...props
}) => {
  const sizeClasses = {
    xs: "text-xs h-8 px-2",
    sm: "text-sm h-10 px-3",
    md: "text-base h-12 px-4",
    lg: "text-lg h-14 px-5",
    xl: "text-xl h-16 px-6",
  };

  const radiusClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-1 text-sm font-medium">
          {label} {isAsterisk && "*"}
        </label>
      )}

      <div className={`flex items-center border ${sizeClasses[size]} ${radiusClasses[radius]}`}>
        {icon && (
          <span className="mr-2 flex-none">
            {icon}
          </span>
        )}

        <input
          className="flex-1 border-none outline-none bg-transparent"
          {...props}
        />

        {rightSection && (
          <span className="ml-2 flex-none">
            {rightSection}
          </span>
        )}
      </div>

      {description && <div className="mt-1 text-xs text-gray-500">{description}</div>}
      {error && <div className="mt-1 text-xs text-red-500">{error}</div>}
    </div>
  );
};
