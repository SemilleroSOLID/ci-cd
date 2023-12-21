import React from "react";
import Layout from "../components/layout";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Workflows = () => (
  <Layout>
    <h1>Guía para GitHub Actions con Jasmine (workflows)</h1>
  
  <p>En esta guía, se explica el archivo YAML de GitHub Actions utilizado para ejecutar pruebas Jasmine en tu proyecto. El archivo YAML se encuentra en tu repositorio y se llama generalmente <code>.github/workflows/nombre-archivo.yml</code>.</p>
  
  <h2>Contenido del Archivo YAML</h2>
  <SyntaxHighlighter language="yaml" style={vscDarkPlus}>
  {
    `
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
    `
  }  
  </SyntaxHighlighter>

  <h2>Explicación del Archivo YAML</h2>

  <ol>
    <li><strong>name:</strong> Define el nombre del flujo de trabajo como "Jasmine Test".</li>

    <li><strong>on:</strong> Especifica cuándo debe ejecutarse el flujo de trabajo, en este caso, en cada empuje (push) y solicitud de extracción (pull request) a la rama principal (main).</li>

    <li><strong>jobs:</strong> Contiene dos trabajos ("test" y "build") que se ejecutan en paralelo.</li>
  </ol>

  <h3>Trabajo "test":</h3>
  <ul>
    <li><strong>runs-on:</strong> Define que este trabajo se ejecuta en el sistema operativo Ubuntu.</li>
    <li><strong>steps:</strong> Contiene los pasos a seguir, como la obtención del código, la instalación de dependencias y la ejecución de las pruebas Jasmine.</li>
  </ul>

  <h3>Trabajo "build":</h3>
  <ul>
    <li><strong>runs-on:</strong> Define que este trabajo también se ejecuta en el sistema operativo Ubuntu.</li>
    <li><strong>needs:</strong> Indica que este trabajo depende del éxito del trabajo "test".</li>
    <li><strong>steps:</strong> Contiene pasos similares al trabajo "test", incluida la construcción y el despliegue (en este caso, un simple mensaje).</li>
  </ul>

  <h2>Explicación de la Sección "on"</h2>

  <p>La sección <strong>on:</strong> especifica cuándo debe ejecutarse el flujo de trabajo. Se desencadenará en los siguientes eventos:</p>

  <ul>
    <li><strong>push:</strong> Se activa en cada empuje (push) a la rama principal (main).</li>
    <ul>
      <li><strong>branches: [main]:</strong> Indica que el flujo de trabajo se ejecutará solo cuando se realice un empuje a la rama principal (main).</li>
    </ul>

    <li><strong>pull_request:</strong> Se activa cuando se abre una nueva solicitud de extracción (pull request) o cuando se sincroniza una solicitud de extracción existente (synchronize).</li>
    <ul>
      <li><strong>branches: [main]:</strong> Similar al evento de empuje, esto indica que el flujo de trabajo se ejecutará solo cuando la solicitud de extracción esté dirigida a la rama principal (main).</li>
      <li><strong>types: [opened, synchronize]:</strong> Especifica los tipos de eventos de solicitud de extracción que activarán el flujo de trabajo. En este caso, se ejecutará cuando se abra una nueva solicitud de extracción (<code>opened</code>) o cuando se sincronice una solicitud de extracción existente (<code>synchronize</code>).</li>
    </ul>
  </ul>

<h2>Consideraciones para Pull Requests</h2>

<p>Para asegurar que el flujo de trabajo funcione correctamente con las solicitudes de extracción (Pull Requests) en GitHub, se recomienda configurar algunas reglas de protección en la rama principal (main). Sigue estos pasos en tu repositorio:</p>

<ol>
  <li><strong>Proteger ramas coincidentes:</strong> Dirígete a la configuración de tu repositorio y selecciona "Branches". Configura las siguientes reglas para la rama principal (main):
    <ul>
      <li><strong>Require a pull request before merging:</strong> Habilita esta opción para asegurar que todos los cambios se realicen a través de una solicitud de extracción antes de la fusión.</li>
      <li><strong>Require approvals:</strong> Habilita esta opción para requerir un número específico de aprobaciones antes de que una solicitud de extracción pueda fusionarse.</li>
      <li><strong>Require status checks to pass before merging:</strong> Elige el status check correspondiente a tu trabajo (por ejemplo, el trabajo "test" en este caso) para garantizar que todas las comprobaciones hayan pasado antes de la fusión.</li>
      <li><strong>Require branches to be up to date before merging:</strong> Activa esta opción para garantizar que las solicitudes de extracción estén actualizadas con el código más reciente antes de la fusión.</li>
    </ul>
  </li>
</ol>

<p>Estas configuraciones aseguran que las solicitudes de extracción se realicen correctamente y que todas las comprobaciones necesarias se hayan completado antes de permitir la fusión en la rama principal (main).</p>


  <p>Recuerda ajustar la configuración según las necesidades específicas de tu proyecto.</p>

  <h2>Más Información</h2>
  <p>Para obtener información más detallada sobre la configuración de GitHub Actions y sus características, consulta la <a href="https://docs.github.com/en/actions">documentación oficial de GitHub Actions</a>.</p>

  </Layout>
);

export default Workflows;