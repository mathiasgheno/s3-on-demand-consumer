import React from 'react';

export const App = () => {
  const [ configs, setConfigs ] = React.useState(null);

  React.useEffect(() => {
    fetch(`${window.__runtime.API_HOST}/configs`)
      .then((res) => res.json())
      .then((configs) => setConfigs(configs));
  }, []);

  return (
    <div>
      <h1>Olá Mundo</h1>
      <p>API_HOST: {window.__runtime.API_HOST}</p>
      {
        configs
          ? <code>{JSON.stringify(configs)}</code>
          : <p>Carregando...</p>
      }
    </div>
  )
}

export default App;
