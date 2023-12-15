// src/pages/GitPagina.js
import React from "react";
import Layout from "../components/layout";
import Setttings from "../../assets/img/settings.jpg"
import Pagges from "../../assets/img/pages.jpg"
import Sourrce from "../../assets/img/source.jpg"
import Brranch from "../../assets/img/branch.jpg"
import Sttatus from "../../assets/img/status.jpg"


const GitPagina = () => (
  <Layout>
    <h1>Página de CI-CD</h1>
    <h3>Pasos para desplegar un sitio en GitHub Pages</h3>
    <ol>
      <li>Crear un repositorio cuyo nombre debe ser el nombre del perfil o la organización</li>
      <ul>
        <li>El repositorio debe ser público</li>
        <li>Este repositorio servirá como punto de entrada para redireccionar a los demás proyectos</li>
        <li>Ejemplo: semillerosolid.github.io</li>
      </ul>
      <li>Creamos un segundo repositorio para el sitio</li>
      <ul>
        <li>Este repositorio puede tener cualquier nombre</li>
      </ul>
      <li>En el apartado de configuración buscamos en la columna izquierda la opción "pages"</li>
      <br />
      <br />
      <img src={Setttings} alt="" />
      <li>Entre las diferentes opciones de Pages, nos fijaremos en dos específicas, "Source" y "Branch"</li>
      <img src={Pagges} alt="" />
      <ul>
        <li>Source: Es la fuente de donde vamos a desplegar el sitio, seleccionaremos Deploy from branch</li>
        <img src={Sourrce} alt="" />
        <li>Branch: Es la rama principal de nuestro repositorio</li>
        <img src={Brranch} alt="" />
      </ul>
      <li>Una vez esté todo seleccionado, guardaremos usando el botón Save</li>
      <ul>
        <li>Es importante esperar a que la acción automatizada termine su proceso y nos arroje un estado de confirmado</li>
      </ul>
      <img src={Sttatus} alt="" />
      <li>Ahora para acceder a nuestro sitio, debemos poner primero la dirección principal, es decir el nombre que le pusimos a nuestro repositorio principal</li>
      <ul>
        <li>Ejemplo: https://semillerosolid.github.io/</li>
      </ul>
      <li>Luego del slash ("/") pondremos el nombre del segundo repositorio</li>
      <ul>
        <li>Ejemplo: https://semillerosolid.github.io/ci-cd/</li>
      </ul>
      <li>Listo, para agregar más sitios a nuestra organización solo se deben repetir los pasos del 2 al 5</li>
    </ol>
  </Layout>
);

export default GitPagina;
