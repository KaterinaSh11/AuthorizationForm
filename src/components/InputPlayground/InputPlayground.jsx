import { SIZES, RADIUSES, VARIANTS } from "./constants";

export const InputPlayground = ({
  setError,
  currentField,
  setCurrentField,
}) => {
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
    <div style={{ display: "flex", gap: 40 }}>
      {/* образец для проверки */}
      {/* <Input
        label={label}
        placeholder={placeholder}
        size={size}
        radius={radius}
        variant={variant}
        error={error}
      /> */}
      <div>
        <h3>Настройки</h3>

        <div className="relative inline-flex bg-gray-200 rounded-lg p-1">
          {VARIANTS.map((v) => (
            <button
              key={v}
              onClick={() => {
                setCurrentField({
                  ...currentField,
                  variant: v,
                });
              }}
              className={`
                        relative z-10 px-4 py-1 rounded-md transition-colors
                        ${currentField.variant === v ? "text-black" : "text-gray-600"}
              `}
            >
              {v}
            </button>
          ))}

          <div
            className={`
                        absolute top-1 bottom-1 w-1/3 bg-white rounded-md
                        transition-all duration-300
                        ${currentField.variant === "default" && "left-1"}
                        ${currentField.variant === "filled" && "left-1/3"}
                        ${currentField.variant === "unstyled" && "left-2/3"}
            `}
          />
        </div>

        <input
          value={currentField.label}
          onChange={(e) => {
            setCurrentField({ ...currentField, label: e.target.value });
          }}
          placeholder="Label"
        />

        <input
          value={currentField.placeholder}
          onChange={(e) => {
            setCurrentField({
              ...currentField,
              placeholder: e.target.value,
            });
          }}
          placeholder="Placeholder"
        />

        <div>
          <div className="flex justify-between mb-2">
            <span>Размер</span>
            <span>{currentField.size}</span>
          </div>
          <input
            type="range"
            min="0"
            max="4"
            value={sizeIndex}
            onChange={(e) => {
              setCurrentField({
                ...currentField,
                size: SIZES[Number(e.target.value)],
              });
            }}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>Радиус</span>
            <span>{currentField.radius}</span>
          </div>
          <input
            type="range"
            min="0"
            max="4"
            value={radiusIndex}
            onChange={(e) => {
              setCurrentField({
                ...currentField,
                radius: RADIUSES[Number(e.target.value)],
              });
            }}
            className="w-full"
          />
        </div>
        <button onClick={() => setError("Ошибка!")}>Показать ошибку</button>
      </div>
    </div>
  );
};
