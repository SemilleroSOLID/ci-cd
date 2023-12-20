// src/pages/dependabot.js
import React from "react";
import Layout from "../components/layout";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


const DependabotPage = () => (
  <Layout>
    <h1>Configuración de Dependabot</h1>
  
  <p>Para comenzar con las actualizaciones de Dependabot, necesitarás especificar qué ecosistemas de paquetes actualizar y dónde se encuentran los manifiestos de paquetes. Sigue estos pasos:</p>

  <h2>Pasos para Configurar Dependabot:</h2>

  <ol>
    <li><strong>Crear el archivo de configuración de Dependabot:</strong> En la raíz de tu repositorio, crea un archivo llamado <code>dependabot.yml</code></li>  

    <li><strong>Modificar según tus necesidades:</strong> Ajusta la configuración según las necesidades de tu proyecto. Por ejemplo, puedes cambiar la frecuencia de las actualizaciones ajustando el valor de <code>interval</code>.</li>

    <li><strong>Guardar el archivo:</strong> Después de realizar las modificaciones, guarda y commitea el archivo <code>dependabot.yml</code> en tu repositorio.</li>
  </ol>

  <p>Con esta configuración, Dependabot realizará actualizaciones diarias para las dependencias de npm y las acciones de GitHub en tu repositorio.</p>

  <p>Para obtener información más detallada sobre las opciones de configuración, consulta la <a href="https://docs.github.com/github/administering-a-repository/configuration-options-for-dependency-updates">documentación oficial de Dependabot</a>.</p>

  <h2>Explicación del Archivo <code>dependabot.yml</code></h2>
  <p>El archivo <code>dependabot.yml</code> contiene la configuración de Dependabot para gestionar las actualizaciones de dependencias en tu repositorio. Aquí está la explicación de cada parte:</p>

  <p>Tambien puedes crear el archivo dependabot.yml desde <strong>Settings </strong> eliges la opcion <strong> Code security and analysis </strong> y buscas dependabot </p>

  <p>para este ejemplo habilitamos <strong>Dependabot version updates </strong></p>

  <SyntaxHighlighter language="yaml" style={vscDarkPlus}>
    {`  
    # To get started with Dependabot version updates, you'll need to specify which
    # package ecosystems to update and where the package manifests are located.
    # Please see the documentation for all configuration options:
    # https://docs.github.com/github/administering-a-repository/configuration-options-for-dependency-updates
    `}
    </SyntaxHighlighter>


  <strong>Comentario de Inicio: </strong>
  <p>Este comentario proporciona información inicial sobre cómo comenzar con las actualizaciones de Dependabot. Destaca que necesitas especificar los ecosistemas de paquetes que deseas actualizar y dónde se encuentran los manifiestos de paquetes en tu repositorio. También incluye un enlace a la documentación oficial de GitHub, donde puedes encontrar todas las opciones de configuración disponibles.</p>
  
  <SyntaxHighlighter language="yaml" startingLineNumber={vscDarkPlus}>
    {
    `version: 2
    updates:
      # Mantener las dependencias para npm
      - package-ecosystem: "npm"
        directory: "/"
        schedule:
          interval: "daily"

      # Mantener las dependencias para GitHub Actions
      - package-ecosystem: "github-actions"
        # Workflow files stored in the default location of '.github/workflows'.
        directory: "/"
        schedule:
          interval: "daily"
          `}
          </SyntaxHighlighter>
<ol>
  <li><strong>Bloque de Configuración de Dependabot: </strong> version: 2: Indica que estás utilizando la versión 2 de la configuración de Dependabot. La versión 2 es la versión más reciente y proporciona más funcionalidades que la versión anterior.</li>
  <li><strong>updates:</strong>  Este bloque define las actualizaciones que Dependabot debe realizar.</li> 
  <li><strong> Actualización de Dependencias para npm:</strong> <strong>package-ecosystem: "npm": </strong> Especifica que Dependabot debe realizar actualizaciones de dependencias para el ecosistema de paquetes npm.</li>
  <li><strong> directory: "/": </strong>  Indica que los manifiestos de paquetes de npm se encuentran en la raíz del repositorio.</li>
  <li><strong> schedule: interval: "daily": </strong> Establece un cronograma para las actualizaciones diarias. </li>
</ol>

<SyntaxHighlighter language="yaml" style={vscDarkPlus}>
      {`
    - package-ecosystem: "github-actions"
    # Workflow files stored in the default location of '.github/workflows'.
    directory: "/"
    schedule:
      interval: "daily"
      `}

      </SyntaxHighlighter>

<ol>
<li><strong> Actualización de Dependencias para GitHub Actions:</strong></li>

<li><strong> package-ecosystem: "github-actions": </strong> Especifica que Dependabot debe realizar actualizaciones relacionadas con el ecosistema de GitHub Actions.</li>
<li><strong> directory: "/": </strong>  Indica que los archivos de flujo de trabajo (workflow) de GitHub Actions están en la ubicación predeterminada de <strong>.github/workflows </strong>.</li>
</ol>

<h1>Configuracion completa</h1>

<SyntaxHighlighter language="yaml" style={vscDarkPlus}>
  {`
# To get started with Dependabot version updates, you'll need to specify which
# package ecosystems to update and where the package manifests are located.
# Please see the documentation for all configuration options:
# https://docs.github.com/github/administering-a-repository/configuration-options-for-dependency-updates

version: 2
updates:
  # Maintain dependencies for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for GitHub Actions
  - package-ecosystem: "github-actions"
    # Workflow files stored in the default location of '.github/workflows'.
    directory: "/"
    schedule:
      interval: "month" #se configuro daily por pruebas unicamente, pero puede ver mas opciones en la documentación

      `}
</SyntaxHighlighter>

  </Layout>
);

export default DependabotPage;
