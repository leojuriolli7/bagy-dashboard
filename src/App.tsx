import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ClientsPage } from "./pages/clients";
import { ConfigPage } from "./pages/config";
import { OverviewPage } from "./pages/overview";
import { PlansAndGoalsPage } from "./pages/plansAndGoals";
import { ProductsPage } from "./pages/products";
import { SalesPage } from "./pages/sales";
import { StorePage } from "./pages/store";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/lojas" element={<StorePage />} />
        <Route path="/vendas" element={<SalesPage />} />
        <Route path="/clientes" element={<ClientsPage />} />
        <Route path="/produtos" element={<ProductsPage />} />
        <Route path="/planos_e_metas" element={<PlansAndGoalsPage />} />
        <Route path="/configuracoes" element={<ConfigPage />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
