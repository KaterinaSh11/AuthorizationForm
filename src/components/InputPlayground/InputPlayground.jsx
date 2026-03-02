import { SIZES, RADIUSES, VARIANTS } from "./constants";

export const InputPlayground = ({ currentField, setCurrentField }) => {
  let sizeIndex = SIZES.indexOf(currentField?.size || 0);
  if (sizeIndex === -1) {
    sizeIndex = 2;
  }

  let radiusIndex = RADIUSES.indexOf(currentField?.radius || 0);
  if (radiusIndex === -1) {
    radiusIndex = 2;
  }

  if (!currentField) {
    return <></>;
  }

  return (
    <div className="w-[280px] bg-white rounded-lg shadow p-4 space-y-4 text-sm">
      <h3 className="font-medium text-gray-800">Settings</h3>
     
      <div className="relative flex bg-gray-100 rounded-md p-0.5">
        <div
          className={`absolute top-0.5 bottom-0.5 w-1/3 bg-white rounded-md shadow transition-all duration-300
                      ${currentField.variant === "default" && "left-0"}
                      ${currentField.variant === "filled" && "left-1/3"}
                      ${currentField.variant === "unstyled" && "left-2/3"}
          `}
        />
        {VARIANTS.map((v) => (
          <button
            key={v}
            onClick={() => setCurrentField({ ...currentField, variant: v })}
            className={`flex-1 py-1 rounded text-xs relative z-10 transition-colors
                        ${currentField.variant === v ? "text-gray-900" : "text-gray-500"}
                      `}
          >
            {v}
          </button>
        ))}
      </div>

      <input
        className="w-full text-xs border rounded px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-400"
        value={currentField.label}
        onChange={(e) =>
          setCurrentField({ ...currentField, label: e.target.value })
        }
      />

      <input
        className="w-full text-xs border rounded px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-400"
        value={currentField.placeholder}
        onChange={(e) =>
          setCurrentField({ ...currentField, placeholder: e.target.value })
        }
      />

      <div>
        <div className="flex justify-between text-xs mb-1">
          <span>Size</span>
          <span>{currentField.size}</span>
        </div>
        <input
          className="w-full"
          type="range"
          min="0"
          max="4"
          value={sizeIndex}
          onChange={(e) =>
            setCurrentField({
              ...currentField,
              size: SIZES[Number(e.target.value)],
            })
          }
        />
      </div>

      <div>
        <div className="flex justify-between text-xs mb-1">
          <span>Radius</span>
          <span>{currentField.radius}</span>
        </div>
        <input
          type="range"
          min="0"
          max="4"
          value={radiusIndex}
          onChange={(e) =>
            setCurrentField({
              ...currentField,
              radius: RADIUSES[Number(e.target.value)],
            })
          }
          className="w-full"
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs">With asterisk</span>
        <button
          className={`w-9 h-4 flex items-center rounded-full p-0.5 transition
            ${currentField.required ? "bg-blue-600" : "bg-gray-300"}
          `}
          type="button"
          onClick={() =>
            setCurrentField({
              ...currentField,
              required: !currentField.required,
            })
          }
        >
          <span
            className={`bg-white w-3 h-3 rounded-full transform transition
              ${currentField.required ? "translate-x-5" : ""}
            `}
          />
        </button>
      </div>

      <input
        className="w-full text-xs border rounded px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-400"
        value={currentField.description}
        onChange={(e) =>
          setCurrentField({
            ...currentField,
            description: e.target.value,
          })
        }
        placeholder="Description"
      />

      <input
        className="w-full text-xs border rounded px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-red-400"
        value={currentField.error}
        placeholder="Error"
        onChange={(e) =>
          setCurrentField({
            ...currentField,
            error: e.target.value,
          })
        }
      />
    </div>
  );
};
