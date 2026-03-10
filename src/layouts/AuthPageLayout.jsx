import { InputPlayground } from "../components";
import { useCurrentField } from "../hooks/useCurrentField";

export const AuthPageLayout = ({ FormComponent, onSubmit }) => {
  const { currentField, setCurrentField } = useCurrentField();

  return (
    <div className="flex min-h-screen">
      <div className="w-[650px] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100">
        <FormComponent
          onSubmit={onSubmit}
          currentField={currentField}
          setCurrentField={setCurrentField}
        />
      </div>

      <div className="w-1/3 p-8 bg-gray-50 border-l">
        <InputPlayground
          currentField={currentField}
          setCurrentField={setCurrentField}
        />
      </div>
    </div>
  );
};