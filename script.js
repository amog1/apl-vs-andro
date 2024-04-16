// Android vs apple web
// Evente listener android-btn
document.getElementById("android").addEventListener("click", change);

// function
function change() {
  // input

  var img = document.getElementById("pic");

  // output
  img.src = `images/Android-Logo.jpg`;

  document.getElementById("link").href = "https://www.android.com/";

  document.getElementById("link").innerHTML = "Android Home";
  document.getElementById("link").style.backgroundColor = "#a4c93b";

  document.getElementById("html").style.backgroundColor = "#a4c93b";
  document.getElementById("body").style.fontFamily = "'Roboto', sans-serif";
  document.getElementById("android").classList.add("active");
  document.getElementById("apple").classList.remove("active");
}

// Evente listener apple-btn
document.getElementById("apple").addEventListener("click", change2);

// function
function change2() {
  // input
  var imgapple = document.getElementById("pic");

  // output
  imgapple.src = `images/Apple-Logo.jpg`;

  document.getElementById("link").innerHTML = "Apple Home";
  document.getElementById("link").style.backgroundColor = "#b6bcca";

  document.getElementById("html").style.backgroundColor = "#b6bcca";
  document.getElementById("body").style.fontFamily = "'Brygada 1918', serif";
  document.getElementById("apple").classList.add("active");
  document.getElementById("android").classList.remove("active");
  document.getElementById("link").href = "https://www.apple.com/";

  // document.getElementById("myAtag").href = "www.google.com"
  // document.getElementById("my-img").src = "images/newimg.png"
}
