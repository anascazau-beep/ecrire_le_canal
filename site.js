document.addEventListener("DOMContentLoaded", function () {

  const header = `
    <header class="site-header">
      <div class="site-header-inner">

        <p class="site-kicker">
          30 ans de l'inscription du canal du Midi au patrimoine mondial de l'UNESCO
        </p>

        <h1 class="site-title">
          <a href="index.html">Écrire le canal</a>
        </h1>

        <p class="site-subtitle">
          Lettres, acteurs et administration du canal du Midi au XVIIe siècle
        </p>

      </div>
    </header>

    <nav class="main-nav" aria-label="Navigation principale">
      <ul>

        <li>
          <a href="index.html">Accueil</a>
        </li>

        <li>
          <a href="construire.html">Construire le canal</a>
        </li>

        <li>
          <a href="administrer.html">Administrer le canal</a>
        </li>

        <li>
          <a href="acteurs.html">Acteurs du fonds</a>
        </li>

        <li>
          <a href="index.html#apropos">À propos</a>
        </li>

      </ul>
    </nav>
  `;


  const footer = `
    <footer class="site-footer">

      <div class="footer-inner">

        <p class="footer-title">
          Écrire le canal
        </p>

        <p>
          Correspondances et administration du canal du Midi au XVIIe siècle
        </p>

        <div class="footer-logos">

          <img
            src="canal.png"
            alt="Canal du Midi"
          >

          <img
            src="vnf.png"
            alt="Voies navigables de France"
          >

          <img
            src="ut2j.png"
            alt="Université Toulouse - Jean Jaurès"
          >

          <img
            src="ddm.png"
            alt="Département Documentation, Archives, Médiathèque et Édition"
          >

        </div>

        <p class="footer-small">
          Exposition virtuelle
        </p>

      </div>

    </footer>
  `;


  const headerTarget = document.getElementById("site-header");
  const footerTarget = document.getElementById("site-footer");

  if (headerTarget) {
    headerTarget.innerHTML = header;
  }

  if (footerTarget) {
    footerTarget.innerHTML = footer;
  }


  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".main-nav a").forEach(function (link) {

    const href = link.getAttribute("href");
    const targetPage = href.split("#")[0];

    if (targetPage === currentPage) {
      link.classList.add("active");
    }

  });

});
