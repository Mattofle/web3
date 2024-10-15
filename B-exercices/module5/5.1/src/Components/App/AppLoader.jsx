import { ProviderWrapper as CounterProviderWrapper } from "../../Contexts/countersContext.jsx";
import App from "../../App.jsx";

const AppLoader = () => {
  return (
    <CounterProviderWrapper>
      <App />
    </CounterProviderWrapper>
  );
};

export default AppLoader;
