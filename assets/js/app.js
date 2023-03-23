const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//faltaba . de las clases
const $b = document.querySelector('.blog');//faltaba # de las clases
const $l = document.querySelector('.location');//Faltaba en index el elemento

function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = fetch(`${baseEndpoint}/${usersEndpoint}/${username}`);
    console.log(response);
    data = response;
  $n.textContent = `${data.name}`;//Uso de las backticks
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);