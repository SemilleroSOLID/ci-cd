"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[444],{74792:function(e,a,o){o.r(a);var l=o(67294),c=o(92336),n=o(79388),t=o(86032);a.default=()=>l.createElement(c.Z,null,l.createElement("h1",null,"Configuración Manual de Husky para Node.js"),l.createElement("p",null,"Para configurar Husky manualmente en tu proyecto Node.js, sigue estos pasos:"),l.createElement("ol",null,l.createElement("li",null,l.createElement("strong",null,"Instalar Husky:")," Ejecuta el siguiente comando en la terminal.",l.createElement(n.Z,{language:"bash",style:t.Z},"npm install husky --save-dev")),l.createElement("li",null,l.createElement("strong",null,"Habilitar los ganchos de Git:")," Ejecuta el siguiente comando para habilitar automáticamente los ganchos de Git después de la instalación.",l.createElement(n.Z,{language:"bash",style:t.Z},"npx husky install")),l.createElement("li",null,l.createElement("strong",null,'Configurar el script "prepare" en package.json:')," Edita tu archivo ",l.createElement("code",null,"package.json")," para incluir el siguiente script.",l.createElement(n.Z,{language:"yaml",style:t.Z},'"scripts": {\n  "prepare": "husky install"\n}')),l.createElement("li",null,l.createElement("strong",null,"Crear un gancho:")," Para agregar un comando a un gancho o crear uno nuevo, utiliza ",l.createElement("strong",null,"husky add file cmd ")," asegúrate de ejecutar husky install antes.",l.createElement(n.Z,{language:"bash",style:t.Z},'npx husky add .husky/pre-commit "npm test"')),l.createElement("li",null,l.createElement("strong",null,"Agregar el gancho a Git:")," Ejecuta el siguiente comando para agregar el nuevo gancho a Git.",l.createElement(n.Z,{language:"bash",style:t.Z},"git add .husky/pre-commit")),l.createElement("li",null,l.createElement("strong",null,"Intentar realizar un commit:")," Ejecuta el siguiente comando para realizar un commit y probar la configuración de Husky.",l.createElement(n.Z,{language:"bash",style:t.Z},'git commit -m "Keep calm and commit"')),l.createElement("li",null,"Las pruebas que realizamos fueron en un entorno local, para controlar el commit.")),l.createElement("p",null,"Si el comando ",l.createElement("code",null,"npm test")," falla, tu commit se abortará automáticamente."),l.createElement("h2",null,"Más Información"),l.createElement("p",null,"Para obtener información más detallada sobre Husky y sus características, consulta la"," ",l.createElement("a",{href:"https://typicode.github.io/husky/getting-started.html"},"documentación oficial de Husky"),"."))},86032:function(e,a){a.Z={'pre[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#1e1e1e"},'code[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'pre[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},':not(pre) > code[class*="language-"]':{padding:".1em .3em",borderRadius:".3em",color:"#db4c69",background:"#1e1e1e"},".namespace":{Opacity:".7"},"doctype.doctype-tag":{color:"#569CD6"},"doctype.name":{color:"#9cdcfe"},comment:{color:"#6a9955"},prolog:{color:"#6a9955"},punctuation:{color:"#d4d4d4"},".language-html .language-css .token.punctuation":{color:"#d4d4d4"},".language-html .language-javascript .token.punctuation":{color:"#d4d4d4"},property:{color:"#9cdcfe"},tag:{color:"#569cd6"},boolean:{color:"#569cd6"},number:{color:"#b5cea8"},constant:{color:"#9cdcfe"},symbol:{color:"#b5cea8"},inserted:{color:"#b5cea8"},unit:{color:"#b5cea8"},selector:{color:"#d7ba7d"},"attr-name":{color:"#9cdcfe"},string:{color:"#ce9178"},char:{color:"#ce9178"},builtin:{color:"#ce9178"},deleted:{color:"#ce9178"},".language-css .token.string.url":{textDecoration:"underline"},operator:{color:"#d4d4d4"},entity:{color:"#569cd6"},"operator.arrow":{color:"#569CD6"},atrule:{color:"#ce9178"},"atrule.rule":{color:"#c586c0"},"atrule.url":{color:"#9cdcfe"},"atrule.url.function":{color:"#dcdcaa"},"atrule.url.punctuation":{color:"#d4d4d4"},keyword:{color:"#569CD6"},"keyword.module":{color:"#c586c0"},"keyword.control-flow":{color:"#c586c0"},function:{color:"#dcdcaa"},"function.maybe-class-name":{color:"#dcdcaa"},regex:{color:"#d16969"},important:{color:"#569cd6"},italic:{fontStyle:"italic"},"class-name":{color:"#4ec9b0"},"maybe-class-name":{color:"#4ec9b0"},console:{color:"#9cdcfe"},parameter:{color:"#9cdcfe"},interpolation:{color:"#9cdcfe"},"punctuation.interpolation-punctuation":{color:"#569cd6"},variable:{color:"#9cdcfe"},"imports.maybe-class-name":{color:"#9cdcfe"},"exports.maybe-class-name":{color:"#9cdcfe"},escape:{color:"#d7ba7d"},"tag.punctuation":{color:"#808080"},cdata:{color:"#808080"},"attr-value":{color:"#ce9178"},"attr-value.punctuation":{color:"#ce9178"},"attr-value.punctuation.attr-equals":{color:"#d4d4d4"},namespace:{color:"#4ec9b0"},'pre[class*="language-javascript"]':{color:"#9cdcfe"},'code[class*="language-javascript"]':{color:"#9cdcfe"},'pre[class*="language-jsx"]':{color:"#9cdcfe"},'code[class*="language-jsx"]':{color:"#9cdcfe"},'pre[class*="language-typescript"]':{color:"#9cdcfe"},'code[class*="language-typescript"]':{color:"#9cdcfe"},'pre[class*="language-tsx"]':{color:"#9cdcfe"},'code[class*="language-tsx"]':{color:"#9cdcfe"},'pre[class*="language-css"]':{color:"#ce9178"},'code[class*="language-css"]':{color:"#ce9178"},'pre[class*="language-html"]':{color:"#d4d4d4"},'code[class*="language-html"]':{color:"#d4d4d4"},".language-regex .token.anchor":{color:"#dcdcaa"},".language-html .token.punctuation":{color:"#808080"},'pre[class*="language-"] > code[class*="language-"]':{position:"relative",zIndex:"1"},".line-highlight.line-highlight":{background:"#f7ebc6",boxShadow:"inset 5px 0 0 #f7d87c",zIndex:"0"}}}}]);
//# sourceMappingURL=component---src-pages-husky-js-00eb41b0a660388823f6.js.map