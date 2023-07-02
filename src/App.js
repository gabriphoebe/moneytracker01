import logo from './logo.svg';
import './App.css';
import React from 'react';
import LedgerInput from './component/LedgerInput.js';
import LedgerAccount from './component/LedgerAccount.js';
import { EntriesContext, LedgerProvider } from './context/LedgerContext.js';
import styles from './styles.css';



function App() {
  return (
    <div>
      <LedgerProvider>
          <LedgerInput></LedgerInput>
          <hr />
          <LedgerAccount></LedgerAccount>
        </LedgerProvider>
    </div>
  );
}

export default App;
