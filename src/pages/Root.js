import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import MainNavigarion from "../components/MainNavigation";
import { useEffect } from "react";

import { getTokenDuration } from '../utils/auth';

export default function RootLayout() {

  const token_data = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {

    if(!token_data.token){
      return;
    }

    if(token_data.is_expired) {
      submit(null, {action: '/logout', method: 'post'});
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, {action: '/logout', method: 'post'});
    }, tokenDuration);


  }, [token_data, submit])

  return (
    <>
      <MainNavigarion />
      <main>
        <Outlet />
      </main>
    </>
  );
}
