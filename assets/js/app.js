const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //agregamos el punto
const $b = document.querySelector('.blog'); 
const $l = document.querySelector(`.location`);

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); //agregamos backticks
  const data = await response.json(); //respuesta a JSON
  console.log(data);
  $n.textContent = `${data.name}`; // backticks
  $b.textContent = `${data.blog}`; // bakcticks
  $l.textContent = `${data.location}`; // backticks
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; //agregamos signo $ a la variable y backticks en algo salió mal
}
// también aquí faltaba un ) al final de handle error 
displayUser('stolinski').catch(handleError); 
