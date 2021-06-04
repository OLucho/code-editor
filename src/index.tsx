import "./index.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./auth/AuthProvider";
import { ReduxProvider } from "./redux/Provider";
import { CustomThemeProvider } from "./theme/ThemeProvider";

ReactDOM.render(
  <ReduxProvider>
    <Router>
      <AuthProvider>
        <CustomThemeProvider>
          <App />
        </CustomThemeProvider>
      </AuthProvider>
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);

reportWebVitals();
