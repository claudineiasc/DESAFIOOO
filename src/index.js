document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-btn");
  const resultsDiv = document.getElementById("results");
  const postBtn = document.getElementById("post-btn");
  const postsDiv = document.getElementById("posts");

  // Busca de locais
  searchBtn.addEventListener("click", () => {
    const sport = document.getElement.getElementById("distance").value;
    tById("sport").value;
    const distance = documen;
    resultsDiv.innerHTML = `<p>Resultados para ${sport} em um raio de ${distance} km:</p>
        <ul>
          <li>Local 1 - Excelente avaliação!</li>
          <li>Local 2 - Bom custo-benefício.</li>
          <li>Local 3 - Disponibilidade limitada.</li>
        </ul>`;
  });

  // Postar na comunidade
  postBtn.addEventListener("click", () => {
    const postContent = document.getElementById("community-post").value;
    if (postContent.trim() === "") return;

    const post = document.createElement("div");
    post.textContent = postContent;
    postsDiv.prepend(post);
    document.getElementById("community-post").value = "";
  });
});
