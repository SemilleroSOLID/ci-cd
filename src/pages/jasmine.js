import React from "react";
import Layout from "../components/layout";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Jasmine = () => (
    <Layout>

        <h1>Configuración de Jasmine para Node.js</h1>

        <p>Para comenzar a utilizar Jasmine en tu proyecto Node.js, sigue estos pasos básicos:</p>

        <ol>
            <li><strong>Agregar Jasmine a tu proyecto:</strong> Ejecuta el siguiente comando en la terminal para instalar Jasmine como dependencia de desarrollo:</li>
            <SyntaxHighlighter language="bash" style={vscDarkPlus}> npm install --save-dev jasmine
            </SyntaxHighlighter>
            <li><strong>Inicializar Jasmine en tu proyecto:</strong> Utiliza el siguiente comando para crear la configuración inicial de Jasmine en tu proyecto:</li>
            <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            npx jasmine init

            </SyntaxHighlighter>

            <li><strong>Crar la prueba:</strong> Una vez inicializado Jasmine, creará un directorio llamado "spec" en donde podemos
                crear las pruebas que después ejecutaremos. El archivo debe llamarse de la siguiente forma:
            </li>
            <strong>nombre_prueba.spec.js</strong> 

            <li><strong>Configurar Jasmine como tu script de pruebas:</strong> Añade el siguiente script a tu archivo <code>package.json</code>:</li>
            <SyntaxHighlighter language="yaml" style={vscDarkPlus}> 
            {`
            "scripts": {
                "test": "jasmine"
            }
            `}
            </SyntaxHighlighter>
            <li><strong>Ejecutar tus pruebas:</strong> Utiliza el siguiente comando para ejecutar tus pruebas Jasmine:</li>
            <SyntaxHighlighter language="bash" style={vscDarkPlus}> npm test
            </SyntaxHighlighter>
        </ol>

        <h2>Crear la prueba</h2>
        <p>La prueba se creara segun los criterios que se quieran validar.
        </p>

        <h2>Más Información</h2>
        <p>Para obtener información más detallada sobre Jasmine y sus características, consulta la <a href="https://jasmine.github.io/pages/getting_started.html">documentación oficial de Jasmine</a>.</p>
    </Layout>
);

export default Jasmine;