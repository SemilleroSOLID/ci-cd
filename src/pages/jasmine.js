import React from "react";
import Layout from "../components/layout";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import commit_true from "../.././assets/img/commit.png"
import commit_false from "../.././assets/img/commit_false.png"
import actions from "../.././assets/img/actions.png"
import queue from "../.././assets/img/queue.png"
import result from "../.././assets/img/result.png"


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

        <h1>Ejemplo utilizado</h1>
        <ul>
            <li>
                Mismo archivo en donde esta configurada la accion para ejecutar Jasmine, el archivo es pipeline.yml
            </li>
            <li>
                Ahora creamos nuestra prueba, en nuestro caso validamos una suma
            </li>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {
                    `
describe("Test about dummy function", () => {
    it("should return a + b number", () => {
        const result = suma(4, 3);
        expect(result).toBe(7);
    });
    
    it("should fail", () => {
        const numberA = 5;
        const numberB = 6;
        const result = suma(numberA, numberB);
        expect(result).not.toEqual(14);
    })
})
                    `
                }
            </SyntaxHighlighter>

            <li>Ejecutamos la suma</li>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {`
                exports.suma = (a, b) => {
                    return a + b;
                }
                `}
            </SyntaxHighlighter>
            <li>Ahora intentemos hacer un commit, con nuestra prueba funcionando</li>
            <img src={commit_true} alt="commit_true"/>
            <li>y un commit con falla, cambiando la operacion suma por resta</li>
            <img src={commit_false} alt="commit_false" ></img>
            <p>Como podemos observar estas pruebas son funcionales localmente, pero con github actions,
                workflows podemos automatizarlas en el lado de nuestro repositorio y poder tomar diferentes
                decisiones dependiendo del flujo de trabajo.
            </p>
            <li>Veamos nuestra prueba en Jasmine ejecutandose en el repositorio</li>
            <img src={actions} alt="first" ></img>
            <img src={queue} alt="secnd" ></img>
            <img src={result} alt="third" ></img>
            <li>como podemos ver obtenemos el mismo resultado al ejecutarlo remotamente
                pero esta vez esta vinculado directamente al repositorio, por lo cual la prueba
                se ejecutara para todo el equipo de trabajo
            </li>
        </ul>


    </Layout>
);

export default Jasmine;