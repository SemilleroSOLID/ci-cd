// src/pages/express-generator.js
import React from "react";
import Layout from "../components/layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const GeneradorDeAplicaciones = () => (
  <Layout>
    <h1>Generador de Aplicaciones Express.js</h1>

    <p>Utiliza el generador de aplicaciones Express.js para crear rápidamente una estructura inicial para tu proyecto. Sigue estos pasos:</p>

    <h2>Pasos para Generar una Aplicación Express.js:</h2>

    <ol>
      <li>
        <strong>Instalar Express.js Generator:</strong> Ejecuta el siguiente comando para instalar globalmente el generador de Express.js.
        <SyntaxHighlighter language="bash" style={solarizedlight}>
          {`npm install -g express-generator`}
        </SyntaxHighlighter>
      </li>

      <li>
        <strong>Crear una Nueva Aplicación Express.js:</strong> Utiliza el generador para crear una nueva aplicación Express.js con el siguiente comando. Sustituye `mi-aplicacion-express` con el nombre deseado para tu aplicación.
        <SyntaxHighlighter language="bash" style={solarizedlight}>
          {`npx express-generator mi-aplicacion-express`}
        </SyntaxHighlighter>
      </li>

      <li>
        <strong>Instalar Dependencias:</strong> Navega al directorio de tu nueva aplicación y ejecuta el siguiente comando para instalar las dependencias.
        <SyntaxHighlighter language="bash" style={solarizedlight}>
          {`cd mi-aplicacion-express && npm install`}
        </SyntaxHighlighter>
      </li>

      <li>
        <strong>Ejecutar la Aplicación Express.js:</strong> Inicia tu aplicación Express.js con el siguiente comando.
        <SyntaxHighlighter language="bash" style={solarizedlight}>
          {`npm start`}
        </SyntaxHighlighter>
      </li>
    </ol>

    <p>
      Tu aplicación Express.js debería estar ejecutándose en <code>http://localhost:3000</code>.
    </p>

    <h2>Información Adicional</h2>
    <p>
      Para obtener más detalles, consulta la{" "}
      <a href="https://expressjs.com/en/starter/generator.html">documentación de Express.js</a>.
    </p>
  </Layout>
);

export default GeneradorDeAplicaciones;
