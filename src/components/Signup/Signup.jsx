// import { useState } from "react";
// import { Input } from "../Input/Input";

// export const Signup = ({ onSubmit }) => {
//   const [form, setForm] = useState({
//     name: "",
//     nick: "",
//     email: "",
//     password: "",
//     repeatPassword: "",
//     gender: "",
//   });

//   const change = (key) => (e) => setForm({ ...form, [key]: e.target.value });

//   function handleSubmit(e) {
//     e.preventDefault();
//     onSubmit(form);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <Input label="Имя" value={form.name} onChange={change("name")} />

//       <Input
//         label="Ник"
//         icon={<span>@</span>}
//         value={form.nick}
//         onChange={change("nick")}
//       />

//       <Input
//         label="Почта"
//         type="email"
//         value={form.email}
//         onChange={change("email")}
//       />

//       <Input
//         label="Пароль"
//         type="password"
//         value={form.password}
//         onChange={change("password")}
//       />

//       <Input
//         label="Повторите пароль"
//         type="password"
//         value={form.repeatPassword}
//         onChange={change("repeatPassword")}
//       />
//       <div>
//         <p>Пол:</p>

//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             checked={form.gender === "female"}
//             onChange={change("gender")}
//           />
//           Женский
//         </label>

//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             checked={form.gender === "male"}
//             onChange={change("gender")}
//           />
//           Мужской
//         </label>
//       </div>

//       <button type="submit">Регистрация</button>
//     </form>
//   );
// };


import { useState } from "react";
import { Input } from "../Input/Input";

export const Signup = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    nick: "",
    email: "",
    password: "",
    repeatPassword: "",
    gender: "",
  });

  const change = (key) => (e) =>
    setForm({ ...form, [key]: e.target.value });

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-5"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Регистрация
        </h2>

        <Input
          label="Имя"
          value={form.name}
          onChange={change("name")}
        />

        <Input
          label="Ник"
          icon={<span className="text-gray-400">@</span>}
          value={form.nick}
          onChange={change("nick")}
        />

        <Input
          label="Почта"
          type="email"
          value={form.email}
          onChange={change("email")}
        />

        <Input
          label="Пароль"
          type="password"
          value={form.password}
          onChange={change("password")}
        />

        <Input
          label="Повторите пароль"
          type="password"
          value={form.repeatPassword}
          onChange={change("repeatPassword")}
        />

        {/* Пол */}
        <div>
          <p className="mb-2 text-sm font-medium text-gray-700">
            Пол
          </p>

          <div className="flex gap-3">
            {["female", "male"].map((g) => (
              <label key={g} className="cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={form.gender === g}
                  onChange={change("gender")}
                  className="hidden"
                />
                <span
                  className={`px-4 py-2 rounded-xl border text-sm transition font-medium
                    ${
                      form.gender === g
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                        : "border-gray-300 text-gray-700 hover:border-indigo-400"
                    }`}
                >
                  {g === "female" ? "Женский" : "Мужской"}
                </span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold 
                     hover:bg-indigo-700 active:scale-[0.98] transition 
                     shadow-lg shadow-indigo-200"
        >
          Регистрация
        </button>
      </form>
    </div>
  );
};
