import Logo from './assets/logo.png';

function App() {
  function downloadFile(fileName) {
    const uri = `${window.location.origin}/${fileName}`;
    const link = document.createElement('a');
    link.setAttribute('download', fileName);
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

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
      <h1 style={{ textAlign: 'center', margin: '0px', marginTop: '20px', padding: '0px 30px', lineHeight: '32px' }}>
        New website coming soon
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', gap: '16px' }}>
        <button
          style={{
            background: '#282f7c',
            border: 'solid 2px #282f7c',
            padding: '8px',
            borderRadius: '8px',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
          }}
          onClick={() => downloadFile('Libra Energy Materials Corporate Presentation - March 2025.pdf')}
        >
          Presentation
        </button>
        <button
          style={{
            background: 'rgb(5 170 83)',
            border: 'solid 2px rgb(5 170 83)',
            padding: '8px',
            borderRadius: '8px',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
          }}
          onClick={() => downloadFile('Libra Energy Materials Factsheet - March 2025.pdf')}
        >
          Factsheet
        </button>
      </div>
      <h4 style={{ padding: '0px 50px', textAlign: 'center' }}>
        Contact <a href='mailto:info@libralithium.com'>info@libralithium.com</a> to get in touch
      </h4>
    </div>
  );
}

export default App;
