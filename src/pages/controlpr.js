// src/pages/controlpr.js
import React from "react";
import Layout from "../components/layout";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import test from "../.././assets/img/test.png"


const ControlPRPage = () => (
  <Layout>
    <h1>Control de Pull Request</h1>

    <h2>Configuración del archivo pipeline.yml</h2>
    <SyntaxHighlighter language="yaml" style={vscDarkPlus}>
      {`pull_request:
  types: [opened, synchronize]`}
    </SyntaxHighlighter>

    <h2>Pasos para controlar un Pull Request</h2>
    <ol>
      <li>Abre un nuevo Pull Request o actualiza uno existente.</li>
      <li>El evento "opened" o "synchronize" en el archivo pipeline.yml se activará cuando se abra o actualice un Pull Request.</li>
      <li>El sistema ejecutará automáticamente las tareas definidas en el archivo pipeline.yml para el Pull Request en cuestión.</li>
      <li>Estas tareas pueden incluir pruebas automatizadas, análisis de código estático, generación de informes, entre otros procesos.</li>
      <li>Si todas las tareas definidas en el archivo pipeline.yml se completan con éxito, el Pull Request puede ser considerado para la fusión (merge).</li>
      <li>Si alguna de las tareas falla, se puede realizar una acción adecuada según las políticas y el flujo de trabajo establecidos en el proyecto. En este caso, queda inhabilitado el botón del Merge.</li>
      <li>Los desarrolladores y revisores del proyecto pueden agregar comentarios y realizar revisiones en el Pull Request para discutir los cambios propuestos.</li>
      <li>Una vez que se resuelven los problemas y se obtienen las aprobaciones necesarias, el Pull Request puede fusionarse con la rama principal del proyecto.</li>
    </ol>

    <h2>Configuraciones necesarias para ver el control pull request en acción</h2>
    <ul>
      <li>ir a Settings, luego branches, escoger la rama que se desea proteger y luego implementar las opciones que se desean, por ejemplo: </li>
      <li>
        <strong>Protect matching branches:</strong> Esta configuración está habilitada para proteger la rama principal del proyecto.
      </li>
      <li>
        <strong>Require a pull request before merging:</strong> Se requiere la creación de un Pull Request para realizar fusiones en la rama protegida.
      </li>
      <li>
        <strong>Require approvals:</strong> Antes de la fusión, se deben obtener aprobaciones de revisores asignados al Pull Request.
      </li>
      <li>
        <strong>Require status checks to pass before merging:</strong> Los "status checks" automatizados deben aprobarse antes de que la fusión sea permitida.
      </li>
      <li>
        <strong>Require branches to be up to date before merging:</strong> La rama de destino debe estar actualizada antes de que se permita la fusión.
      </li>
      <li>
        <strong>Search for status checks in the last week for this repo: </strong> Debemos buscar el nombre del job, en este caso fue test.
      </li>
      <li>
        <img src={test} alt="test"></img>

      </li>
    </ul>

    <h2>Beneficios del control de Pull Request</h2>
    <ul>
      <li>Proporciona un proceso estructurado para revisar y discutir los cambios propuestos.</li>
      <li>Asegura que se realicen pruebas y análisis antes de fusionar los cambios en el proyecto.</li>
      <li>Permite la colaboración entre desarrolladores y revisores para mejorar la calidad del código.</li>
      <li>Facilita la documentación y el seguimiento de los cambios realizados en el proyecto.</li>
    </ul>

    <h2>Configuracion completa</h2>

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
  </Layout>
);

export default ControlPRPage;
