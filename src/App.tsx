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
      <h1 style={{ textAlign: 'center', padding: '20px' }}>New website coming soon</h1>
      <h4>
        Contact <a href='mailto:info@libralithium.com'>info@libralithium.com</a> to get in touch
      </h4>
    </div>
  );
}

export default App;
