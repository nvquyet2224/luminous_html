(function () {
  function searchRedirect() {
    const keySearch = document.querySelector('.search__pop--txt');
    if (keySearch) {
      const key = keySearch.value;
      if (key !== '') {
        window.location.href = `search.html?key=${key}`;
      }
    }

  }

  function searchRedirectMb() {
    const keySearch = document.querySelector('.search-block--input');
    if (keySearch) {
      const key = keySearch.value;
      if (key !== '') {
        window.location.href = `search.html?key=${key}`;
      }
    }

  }

  // Open search popup
  const openSearch = document.querySelector('.search');
  if (openSearch) {
    openSearch.addEventListener('click', () => {
      if (document.querySelector('.search__pop')) {
        document.querySelector('.search__pop').classList.add('open__search');
      }
    });
  }

  // Close search popup
  const closeSearch = document.querySelector('.search__pop--close');
  if (closeSearch) {
    closeSearch.addEventListener('click', () => {
      if (document.querySelector('.search__pop')) {
        document.querySelector('.search__pop').classList.remove('open__search');
      }
    });
  }

  // Search but
  const btnSearch = document.querySelector('.search__pop--btn');
  if (btnSearch) {
    btnSearch.addEventListener('click', () => {
      searchRedirect();
    });
  }
  // Search input enter
  const inputSearch = document.querySelector('.search__pop--txt');
  if (inputSearch) {
    inputSearch.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        searchRedirect();
      }
    });
  }


  // Search but Mobile
  const btnSearchMob = document.querySelector('.search-block--btn');
  if (btnSearchMob) {
    btnSearchMob.addEventListener('click', () => {
      searchRedirectMb();
    });
  }
  // Search input enter
  const inputSearchMob = document.querySelector('.search-block--input');
  if (inputSearchMob) {
    inputSearchMob.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        searchRedirectMb();
      }
    });
  }

})();
