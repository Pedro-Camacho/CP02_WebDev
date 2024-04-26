document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var dob = new Date(document.getElementById('dob').value);
    var now = new Date();
    var age = Math.floor((now - dob) / (365.25 * 24 * 60 * 60 * 1000));
  
    if (age >= 18) {
      if (username === '1234' && password === '1234') {
        window.location.href = 'pages/homepage.html';
      } else {
        document.getElementById('error-message').innerText = 'Invalid username or password.';        
      }
    } else {
      document.getElementById('error-message').innerText = 'Você precisa ser maior de 18 anos para acessar esse site.';
      window.location.href = 'https://www.youtube.com/';
    }
  });

function wine_detail(){
    window.open('detail.html')
}

function add_cart(){
    alert("Produto adicionado ao carrinho.")
}
//comentar
function postar(){
  var texto=document.getElementById(".box-texto").value;
  var comentarioaadicionar=document.createElement("div");
  comentarioaadicionar.classList.add("comentario");
  comentarioaadicionar.appendChild(texto);
  var caixa_comentarios=document.getElementById("caixa-comentarios");
  caixa_comentarios.appendChild(comentarioaadicionar);
  document.getElementsByClassName("box-texto").value="";
}