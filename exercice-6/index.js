// vos imports ici
import {user} from "./data.js";
import {fillArticle} from "./render.js";
window.addEventListener("DOMContentLoaded", () => {
   // votre code ici
   fillArticle("user-profile", user);
});