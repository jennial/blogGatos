// Carregar os posts do arquivo JSON
fetch('posts/posts.json')
  .then(response => response.json())
  .then(posts => {
    const postSummaryContainer = document.getElementById('post-summary');
    
    posts.forEach(post => {
      // Criando os elementos para cada post
      const postElement = document.createElement('div');
      postElement.classList.add('post');

      postElement.innerHTML = `
        <a href="${post.link}">
          <img src="${post.imagem}" alt="${post.titulo}" />
          <h2>${post.titulo}</h2>
        </a>
      `;
      
      // Adicionando o post à página
      postSummaryContainer.appendChild(postElement);
    });
  })
  .catch(error => console.error('Erro ao carregar os posts:', error));

// Carregar conteúdo de cada post a partir de um arquivo markdown
// Usado quando o usuário clica no link do post
const post = 'posts/post1.md'; // Aqui você pode alterar conforme o post selecionado.

fetch(post)
  .then(res => res.text())
  .then(md => {
    const html = marked.parse(md);
    document.getElementById('content').innerHTML = html; // Aqui precisa garantir que exista um elemento com id="content"
  })
  .catch(err => {
    document.getElementById('content').innerHTML = '<p>Erro ao carregar o post.</p>';
    console.error(err);
  });
