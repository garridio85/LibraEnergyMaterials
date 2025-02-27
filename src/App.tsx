import Logo from './assets/logo.png';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        flexDirection: 'column',
      }}
    >
      <img src={Logo} alt='logo' style={{ width: '200px' }} />
      <h1>New website coming soon</h1>
    </div>
  );
}

export default App;
