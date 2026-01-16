export function setUpAlert(buttonID, message) {
    let button = document.getElementById(buttonID);
    button.addEventListener("click", (event) => {
        window.alert(message);
    });
}