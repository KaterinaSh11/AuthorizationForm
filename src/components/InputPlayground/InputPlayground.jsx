import { useState } from "react";
import { Input } from "../Input/Input";

export const InputPlayground = () => {
  const [label, setLabel] = useState("Email");
  const [placeholder, setPlaceholder] = useState("Введите email");
  const [error, setError] = useState("");
  const [sizeIndex, setSizeIndex] = useState(1);
  const [radiusIndex, setRadiusIndex] = useState(1);
  const [variant, setVariant] = useState("default");

  const sizes = ["xs", "sm", "md", "lg", "xl"];
  const radiuses = ["sm", "md", "lg", "xl", "full"];
  const variants = ["default", "filled", "unstyled"];

  return (
    <div style={{ display: "flex", gap: 40 }}>
      {/* образец для проверки */}
      <Input
        label={label}
        placeholder={placeholder}
        size={sizes[sizeIndex]}
        radius={radiuses[radiusIndex]}
        variant={variant}
        error={error}
      />

      <div>
        <h3>Настройки</h3>

        <div className="relative inline-flex bg-gray-200 rounded-lg p-1">
          {variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`
                        relative z-10 px-4 py-1 rounded-md transition-colors
                        ${variant === v ? "text-black" : "text-gray-600"}
              `}
            >
              {v}
            </button>
          ))}

          <div
            className={`
                        absolute top-1 bottom-1 w-1/3 bg-black rounded-md
                        transition-all duration-300
                        ${variant === "default" && "left-1"}
                        ${variant === "filled" && "left-1/3"}
                        ${variant === "unstyled" && "left-2/3"}
            `}
          />
        </div>

        <input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Label"
        />

        <input
          value={placeholder}
          onChange={(e) => setPlaceholder(e.target.value)}
          placeholder="Placeholder"
        />

        <div>
          <div className="flex justify-between mb-2">
            <span>Size</span>
            <span>{sizes[sizeIndex]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="4"
            value={sizeIndex}
            onChange={(e) => setSizeIndex(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>radiusIndex</span>
            <span>{radiuses[radiusIndex]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="4"
            value={radiusIndex}
            onChange={(e) => setRadiusIndex(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <button onClick={() => setError("Ошибка!")}>Показать ошибку</button>
      </div>
    </div>
  );
};
