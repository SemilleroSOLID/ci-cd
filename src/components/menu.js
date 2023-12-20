import React from "react";
import { Link } from "gatsby";
import "./Menu.css";

const Menu = () => (
  <aside className="sidebar">
    <div className="logo">
      <h1>Menú</h1>
    </div>
    <nav className="menu">
      <ul>
        <li><Link  to="/automerge">Automerge</Link></li>
        <li><Link to="/controlpr">Control PR</Link></li>
        <li><Link to="/crearaccion">Crear Acción</Link></li>
        <li><Link to="/dependabot">Dependabot</Link></li>
        <li><Link to="/generadorDeAplicaciones">Gen. de Aplicaciones</Link></li>
        <li><Link to="/husky">Husky</Link></li>
        <li><Link to="/jasmine">Jasmine</Link></li>
        <li><Link to="/workflows">Workflow</Link></li>
        <li><Link to="/gitpagina">GitHub Page</Link></li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
