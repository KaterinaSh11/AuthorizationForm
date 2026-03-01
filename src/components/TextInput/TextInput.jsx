import { useId } from "react";

export const TextInput = ({
  label,
  error,
  required,
  size,
  radius = "md",
  variant = "default",
  rightSection,
  id: externalId,
  ...props
}) => {
  const internalId = useId();
  const id = externalId || internalId;

  const errorId = error ? `${id}-error` : undefined;

  const sizeClasses = {
    xs: "text-xs px-2",
    sm: "text-sm px-3",
    md: "text-base px-4",
    lg: "text-lg px-5",
    xl: "text-xl px-6",
  };

  const radiusClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  const variantClasses = {
    default: "border border-gray-300",
    filled: "bg-gray-100 border border-gray-200",
    unstyled: "border-none bg-transparent",
  };

  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={id}
          className={`mb-1 text-sm font-medium text-gray-700  ${sizeClasses[size]}`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* {description && (
        <div
          id={descriptionId}
          className="text-xs text-gray-500 mb-1"
        >
          {description}
        </div>
      )} */}

      <div
        className={`
          flex items-center
          ${sizeClasses[size]}
          ${radiusClasses[radius]}
          ${variantClasses[variant]}
          ${error ? "border-red-500" : ""}
        `}
      >
        <input
          id={id}
          className="flex-1 bg-transparent outline-none"
          {...props}
        />

        {rightSection && <span className="ml-2 flex-none">{rightSection}</span>}
      </div>

      {error && (
        <div id={errorId} className="mt-1 text-xs text-red-500">
          {error}
        </div>
      )}
    </div>
  );
};
