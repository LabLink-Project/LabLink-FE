import { GlobalStyle } from './shared/GlobalStyle';
import Router from './shared/router';

function App() {
  return (
    <div
      className="App"
      style={{ border: '1px solid gray' }}
    >
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
