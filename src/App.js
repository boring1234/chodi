import Layout from "./components/Layout/Layout";
import Expenses from "./containers/Expenses/Expenses";
import Fundrasing from "./containers/Fundrasing/Fundrasing";

function App() {
  return (
    <div>
      <Layout>
        {/* <Expenses /> */}
        <Fundrasing />
      </Layout>
    </div>
  );
}

export default App;
