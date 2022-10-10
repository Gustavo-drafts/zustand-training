import React from "react";
import Header from "../../components/Header";
import { UserForm } from "../../components/UserForm";
import useUserStore from "../stores/user";

export default function Home() {
  const users = useUserStore(state => state.users)

  return (
    <>
      <Header />
      <UserForm />

      <div className="text-gray100 text-base flex items-center justify-center mt-3">
        {users.map((user) => (
          <p key={Math.random()}>{user.name} | {user.email} </p>
        ))}
      </div>
    </>
  )
}
