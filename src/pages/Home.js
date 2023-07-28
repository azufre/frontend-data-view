import { useRouteLoaderData } from "react-router-dom";
import DataTable from "../components/DataTable";

export default function Home() {

  const token_data = useRouteLoaderData('root');
  
  return (
    <div className="App">
      {token_data.token === null ? "Please login to see this content" : <DataTable />}
    </div>
  );
}
