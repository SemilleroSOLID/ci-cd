// src/pages/crearaccion.js
import React from "react";
import Layout from "../components/layout";

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
    </ul>
  </Layout>
);

export default CrearAccionPage;
