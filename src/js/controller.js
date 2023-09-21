import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // Loading Recipe
    await model.loadRecipe(id); // get access to state.recipe

    // Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', showcontrolRecipesRecipe);
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
