function afficheVille() {
    // 1. Récupération de la valeur courante du select avec son id
    let nomVilleChoisie = document.getElementById("nomVilleChoisie").value;

    // 2. Récupération de la liste de toutes les div correspondant à une div de météo
    let villes = document.getElementsByClassName("city");

    // 3. Parcours de la liste des div météo. On cache celles non sélectionnées.
    for (let i = 0; i < villes.length; i++) {
        // Vérifiez si le nom de l'élément est égal à la ville choisie
        if (villes[i].id === nomVilleChoisie) {
            // Garder l'élément visible
            villes[i].style.display = "block";
        } else {
            // Cacher l'élément
            villes[i].style.display = "none";
        }
    }
}

// Appel initial pour afficher la première ville par défaut
window.onload = afficheVille;
