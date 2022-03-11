import React from 'react';
import ModuleA from 'module-a';

export const App = () => {

  React.useEffect(() => {
    console.log(ModuleA);
  })

  return (
    <div>
      <h1>This is the main app</h1>
      <ModuleA />
    </div>
  )
}
