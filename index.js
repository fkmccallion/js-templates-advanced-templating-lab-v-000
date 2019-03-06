function init() {
  formTemplate = document.getElementById('recipe-form-template').innerHTML;
  document.getElementsByTagName('main')[0].innerHTML = formTemplate;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {
  let recipeName = document.getElementById('recipeName').value;
  let recipeDescription = document.getElementById('recipeDescription').value;

  var recipe = {
    name: recipeName,
    description: recipeDescription
  }

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var templateResult = template(recipe);
  document.getElementsByTagName('main')[0].innerHTML = templateResult;
}
