export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1>404 - Página não encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <a href="/" style={{
        marginTop: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#8b5cf6',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px'
      }}>
        Voltar para o início
      </a>
    </div>
  );
}
