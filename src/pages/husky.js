import React from "react";
import Layout from "../components/layout";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Husky = () => (
  <Layout>
    <h1>Configuración Manual de Husky para Node.js</h1>

    <p>Para configurar Husky manualmente en tu proyecto Node.js, sigue estos pasos:</p>

    <ol>
      <li>
        <strong>Instalar Husky:</strong> Ejecuta el siguiente comando en la terminal.
        <SyntaxHighlighter language="bash" style={vscDarkPlus}>
          {`npm install husky --save-dev`}
        </SyntaxHighlighter>
      </li>

      <li>
        <strong>Habilitar los ganchos de Git:</strong> Ejecuta el siguiente comando para habilitar automáticamente los ganchos de Git después de la instalación.
        <SyntaxHighlighter language="bash" style={vscDarkPlus}>
          {`npx husky install`}
        </SyntaxHighlighter>
      </li>

      <li>
        <strong>Configurar el script "prepare" en package.json:</strong> Edita tu archivo <code>package.json</code> para incluir el siguiente script.
        <SyntaxHighlighter language="yaml" style={vscDarkPlus}>
          {`"scripts": {
  "prepare": "husky install"
}`}
        </SyntaxHighlighter>
      </li>

      <li>
        <strong>Crear un gancho:</strong> Para agregar un comando a un gancho o crear uno nuevo, utiliza <strong>husky add file cmd </strong> asegúrate de ejecutar husky install antes.
        <SyntaxHighlighter language="bash" style={vscDarkPlus}>
          {`npx husky add .husky/pre-commit "npm test"`}
        </SyntaxHighlighter>
      </li>

      <li>
        <strong>Agregar el gancho a Git:</strong> Ejecuta el siguiente comando para agregar el nuevo gancho a Git.
        <SyntaxHighlighter language="bash" style={vscDarkPlus}>
          {`git add .husky/pre-commit`}
        </SyntaxHighlighter>
      </li>

      <li>
        <strong>Intentar realizar un commit:</strong> Ejecuta el siguiente comando para realizar un commit y probar la configuración de Husky.
        <SyntaxHighlighter language="bash" style={vscDarkPlus}>
          {`git commit -m "Keep calm and commit"`}
        </SyntaxHighlighter>
      </li>

      <li>
        Las pruebas que realizamos fueron en un entorno local, para controlar el commit.
      </li>
    </ol>

    <p>Si el comando <code>npm test</code> falla, tu commit se abortará automáticamente.</p>

    <h2>Más Información</h2>
    <p>
      Para obtener información más detallada sobre Husky y sus características, consulta la{" "}
      <a href="https://typicode.github.io/husky/getting-started.html">documentación oficial de Husky</a>.
    </p>
  </Layout>
);

export default Husky;
