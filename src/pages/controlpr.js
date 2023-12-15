// src/pages/controlpr.js
import React from "react";
import Layout from "../components/layout";

const ControlPRPage = () => (
  <Layout>
    <h1>Control de Pull Request</h1>

    <h2>Configuración del archivo pipeline.yml</h2>
    <pre>
      <code>
        pull_request:
          types: [opened, synchronize]
      </code>
    </pre>

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

    <h2>Beneficios del control de Pull Request</h2>
    <ul>
      <li>Proporciona un proceso estructurado para revisar y discutir los cambios propuestos.</li>
      <li>Asegura que se realicen pruebas y análisis antes de fusionar los cambios en el proyecto.</li>
      <li>Permite la colaboración entre desarrolladores y revisores para mejorar la calidad del código.</li>
      <li>Facilita la documentación y el seguimiento de los cambios realizados en el proyecto.</li>
    </ul>
  </Layout>
);

export default ControlPRPage;
