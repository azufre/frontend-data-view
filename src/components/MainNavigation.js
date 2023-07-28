import { Link, Form, useRouteLoaderData } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigarion() {

  const token_data = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          {token_data.token === null && <li>
            <Link to="/login">login</Link>
          </li>}
          {token_data.token !== null && <li>
            <Form action="/logout" method="post">
              <button>Logout ({token_data.username})</button>
            </Form>
          </li>}
        </ul>
      </nav>
    </header>
  );
}
