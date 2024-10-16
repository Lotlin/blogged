
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {AuthContextProvider} from './context/authContext.js';
import {tokenContext} from './context/tokenContext.js';
import {useToken} from './hooks/useToken';

function App() {
  const [token, delToken] = useToken('');

  return (
    <tokenContext.Provider value = {{token, delToken}}>
      <AuthContextProvider>
        <Header />
        <Main />
      </AuthContextProvider>
    </tokenContext.Provider>
  );
}

export default App;

