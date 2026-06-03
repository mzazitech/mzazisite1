import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import WhatsAppPage from "./pages/WhatsAppPage";
import PanelPage from "./pages/PanelPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/whatsapp" component={WhatsAppPage} />
        <Route path="/panel" component={PanelPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/faq" component={FAQPage} />
        <Route>
          <div style={{ textAlign: "center", padding: "120px 2rem" }}>
            <div style={{ fontFamily: "Orbitron,monospace", fontSize: "5rem", fontWeight: 900, background: "linear-gradient(135deg,#00d4ff,#b400ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>404</div>
            <p style={{ color: "rgba(200,220,255,0.6)", marginTop: "1rem", marginBottom: "2rem" }}>This page doesn't exist in our dimension.</p>
            <a href="/" className="btn-primary">← Back Home</a>
          </div>
        </Route>
      </Switch>
    </Layout>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
