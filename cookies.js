function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  return document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='))
    ?.split('=')[1];
}

function checkCookieAndUpdate() {
  const cookieValue = getCookie("userStatus");
  const target = document.getElementById("cookieStatus");

  if (target) {
    target.textContent = cookieValue === "active" ? "Thank You!" : "Permission to use cookies?";
  }
  if (Date.now > expires){
    
  }
}