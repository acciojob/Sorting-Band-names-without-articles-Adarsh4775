function ArticleRemove(touristSpots) {
    function stripArticle(name) {
        return name.replace(/^(a |an |the )/i, '').trim();
    }
    touristSpots.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));
    let ul = document.getElementById("bands");
    touristSpots.forEach(spot => {
        let li = document.createElement("li");
        li.textContent = spot;
        ul.appendChild(li);
    });
}
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
ArticleRemove(touristSpots);