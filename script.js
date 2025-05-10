// script.js
fetch("recipes.json")
    .then(response => response.json())
    .then(recipes => displayRecipes(recipes));

function displayRecipes(recipes) {
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = "";

    recipes.forEach(recipe => {
        const div = document.createElement("div");
        div.className = "recipe";
        div.innerHTML = `
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}" width="200">
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;
        recipeList.appendChild(div);
    });
}

document.getElementById("searchInput").addEventListener("input", event => {
    const query = event.target.value.toLowerCase();
    fetch("recipes.json")
        .then(response => response.json())
        .then(recipes => {
            const filtered = recipes.filter(recipe => recipe.name.toLowerCase().includes(query));
            displayRecipes(filtered);
        });
});

[
    {
        "id": 1,
        "name": "Spaghetti Carbonara",
        "image": "carbonara.jpg",
        "ingredients": ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Pepper"],
        "instructions": "Cook pasta. Fry pancetta. Mix eggs and cheese. Combine everything."
    },
    {
        "id": 2,
        "name": "Avocado Toast",
        "image": "avocado-toast.jpg",
        "ingredients": ["Bread", "Avocado", "Lemon Juice", "Salt", "Chili Flakes"],
        "instructions": "Toast bread. Mash avocado. Add lemon, salt, and chili flakes."
    }
]