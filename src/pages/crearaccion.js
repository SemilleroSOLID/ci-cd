// src/pages/crearaccion.js
import React from "react";
import Layout from "../components/layout";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CrearAccionPage = () => (
  <Layout>
    <h1>Cómo crear acciones en GitHub Actions</h1>
    <p>GitHub Actions es un servicio de integración continua y entrega continua (CI/CD) que te permite automatizar tus flujos de trabajo en GitHub. Para crear una acción en GitHub Actions, sigue estos pasos:</p>
    <ul>
      <li>Definir alcance de los archivos YAML que se van a ejecutar</li>
      <li>Una manera de realizar estas tareas es crear un directorio .github/workflows</li>
      <li>Crea un archivo YAML que defina tu acción dentro del directorio workflows. El archivo YAML debe especificar qué evento activa la acción (por ejemplo, un push a una rama específica) y qué trabajo se debe realizar cuando se activa la acción.</li>
      <li>Sube el archivo YAML a tu repositorio de GitHub.</li>
      <li>Abre tu repositorio en GitHub y haz clic en la pestaña "Acciones".</li>
      <li>Podrás visualizar uno o más archivos YAML en ejecución.</li>
      <li>La acción se ejecutará automáticamente cada vez que se produzca el evento que has especificado en el archivo YAML.</li>
      <li> Para obtener más detalles, consulta la{" "} 
        <a href="https://docs.github.com/en/actions/quickstart" > documentación</a></li>
        <li>Información importantes sobre  {" "}
        <a href="https://github.com/readme/guides/sothebys-github-actions"> acciones</a></li>
        <li> Tambien puedes usar marketplace de github
          <a href="https://github.com/marketplace?type=actions"> workflows</a></li>
        <h1>configuracion usada en nuestro repositorio</h1>
        <SyntaxHighlighter language="yaml" style={vscDarkPlus}>
          {`
          name: Jasmine Test

          on:
            push:
              branches: [main]
            pull_request:
              branches: [main]
              types: [opened, synchronize]
          
          jobs:
            test:
              runs-on: ubuntu-latest
              steps:
              - name: Checkout code
                uses: actions/checkout@v3
              - name: Install dependencies
                run: npm install
              - name: Run Jasmine Test
                run : npm test
          
            build:
              runs-on: ubuntu-latest
              needs: test
              steps:
                - name: Checkout code
                  uses: actions/checkout@v3
                - name: Install dependencies
                  run: npm install
                - name: Build and deploy
                  run: echo "This step will always run"
          `}
        </SyntaxHighlighter>
        <h4>Ejemplo basico</h4>
        <p>Para nuestro caso fue trabajado con Node</p>
        <SyntaxHighlighter language="yaml" style={vscDarkPlus}>
          {`
            steps:
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
              with:
                node-version: 18
            - run: npm ci
            - run: npm test
          `}
        </SyntaxHighlighter>
    </ul>
  </Layout>
);

export default CrearAccionPage;
