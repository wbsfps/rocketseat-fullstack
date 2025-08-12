import { Button } from "./components/button";

import "./styles.css";

export function App() {
  return (
    <div className="container">
      <Button name="Criar" onClick={() => alert("Criar")} />
      <Button name="Editar" />
      <Button name="Remover" />
    </div>
  );
}

export default App;
