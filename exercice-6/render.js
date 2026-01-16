export function fillArticle(articleID, userData) {
    let article = document.getElementById(articleID);
    let h2 = document.createElement("h2");
    let user = document.createTextNode(userData.firstName + " " + userData.lastName);
    
    article.appendChild(h2);
    h2.appendChild(user);
}