import React from "react";
import useUserStore from "../../pages/stores/user";

export function UserForm() {
  const addUser = useUserStore(state => state.addUser);


  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const name = (e.target as any).name.value
    const email = (e.target as any).email.value

    addUser({
      name,
      email
    })
  }


  return (
    <div className="mt-7 flex items-center justify-center">
      <form onSubmit={onSubmit} className="flex flex-col gap-y-1.5">
        <input name="name" placeholder="Nome" className="p-3 rounded-lg" />
        <input name="email" placeholder="Email" className="p-3 rounded-lg" />
        <button className="text-gray100 bg-blue500 bold rounded-md" type="submit">Adiciona Usuário</button>
      </form>
    </div>
  )
}