// src/pages/automerge.js
import React from "react";
import Layout from "../components/layout";
import repos from "../../assets/img/github-app-install-repos.png"
import rule from "../.././assets/img/conf_file_rule.png"
import editor from "../.././assets/img/config-editor.png"
import merge from "../.././assets/img/config-editor-merge-pr.png"
import cksta from "../.././assets/img/mergify-checks-status.png"


const AutomergePage = () => (
  <Layout>
    <h1>Automerging con Mergify</h1>

    <h2>Configuración de Mergify</h2>

    <h2>Pasos para configurar Mergify</h2>
    <ol>
      <li>Inicia sesión en https://dashboard.mergify.com/.</li>
      <li>
        Haz click en Enable Mergify on a new account o ve a
        https://github.com/apps/mergify/installations/new
      </li>
      <li>
        GitHub ahora te ofrecerá seleccionar los repositorios a los que quieres
        dar acceso a Mergify. Selecciona el repositorio que gustes, o todos si lo
        deseas.
        <br />
        <br />
        <img src={repos} alt="" />
      </li>
      <li>Serás redirigido al dashboard.</li>
    </ol>

    <h2>Archivo de configuración</h2>

    <ol>
      <li>
        Crea una configuracion de Mergify en cada repositorio en el que quieres
        usar Mergify.
      </li>
      <li>
        Debería crearse el archivo de configuración en el directorio raíz del
        repositorio y nombrarse o .mergify.yml o .mergify/config.yml o
        .github/mergify.yml.
      </li>
      <li>
        Como el nombre del archivo lo dice, el formato del archivo de
        configuración se basa en YAML.
      </li>
    </ol>

    <h2>Las reglas del archivo de configuración</h2>
    <ul>
      <li>
        El archivo de configuración se compone de una clave principal llamada
        pull_request_rules que contiene una lista de reglas.
      </li>
    </ul>
    Cada regla se compone de 3 elementos:
    <ul>
      <li>
        Un name que describe lo que la regla hace. No es interpretada por
        Mergify y puede ser cualquier cosa que te guste y que te ayude a
        identificar la regla.
      </li>
      <li>
        Una lista de conditions. Todas las condiciones deben coincidir con la
        regla a aplicarse.
      </li>
      <li>
        Una lista de actions. Cada acción se aplicará tan pronto como la pull
        request coinicida con las condiciones.
      </li>
    </ul>

    <h2>Creando la primera regla</h2>
    Vamos a crear una primera regla que hará merge a una pull request tan
    pronto como sea aprobada por un contribuyente.
    <br />
    <br />
    <img src={rule} alt="" />
    <ul>
      <li>
        El nombre de la regla no se usa directamente por Mergify, pero es
        realmente útil cuando Merigify reporta su status y para reglas de
        depuración.
      </li>
      <li>
        Conditions define la lista de condiciones que una pull request debe
        cumplir con el fin de que el motor ejecute las acciones configuradas. En
        este ejemplo, hay sólo una condición por cumplirse para que la regla
        sea aplicada a una pull request. Approved-reviews-by variable contiene
        la lista de colaboradores que aprobaron la pull request y en este caso,
        la variable debe contener al menos 1 miembro (nótese que el operador
        length # es usado aquí).
      </li>
      <li>
        Action es para realizar el merge para la pull request. Se activa
        especificando la acción de merge con un parámetro de método que
        contiene el método de merge a usarse.
      </li>
    </ul>

    <h2>Creando el archivo de configuración</h2>
    <ol>
      <li>
        Ve a tu dashboard de Mergify y escoge el editor de config para tu
        organización.
      </li>
      <li>
        Entonces, selecciona un repositorio donde activaste Mergify.
        <br />
        <br />
        <img src={editor} alt="" />
      </li>
      <li>
        Si tu repositorio tiene pull requests existentes, puedes probar tu
        configuración a aquellas escribiendo un numero de pull request en el
        formulario arriba.
      </li>
      <li>
        Cuando esté hecha, haz click en el botón Create a pull request with this
        configuration.
      </li>
      <li>
        Una nueva pull request será creada en tu repositorio con la nueva
        configuración de Mergify.
      </li>
      <li>Puedes hacerles merge haciendo click en el botón merge</li>
      <br />
      <br />
      <img src={merge} alt="" />
      <li>
        Una vez realizada la merge, Mergify se la aplicará a todos tus pull
        requests.
      </li>
    </ol>

    <h2>Entendiendo el reporte de revisión de Mergify</h2>
    Cuando una pull request es creada en el repositorio, Mergify postea un
    status de revisión acerca del estado de la pull request según las reglas
    definidas
    <br />
    <br />
    <img src={cksta} alt="" />
    <br />
    Cuando todos los criterios de las reglas sean satisfechos, Mergify ejecuta
    las acciones configuradas y realiza el merge.
  </Layout>
);

export default AutomergePage;
