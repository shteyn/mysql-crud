import React from "react";
import { Route } from "react-router-dom";

import ArticlesPage from "./components/pages/ArticlesPage";
import OneArticlePage from "./components/pages/OneArticlePage";

const App = () => (
  <div className="App">
    <Route path="/" exact component={ArticlesPage} />
    <Route path="/:id" exact component={OneArticlePage} />
  </div>
);

export default App;
