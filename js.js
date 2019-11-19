var iconFav = document.querySelector('icon-fav');

iconFav.addEventListener('click', function() {
  if (iconFav.classList.contains('icon-fav')) {
    navMain.classList.add('icon-fav-active');
  } else {
    navMain.classList.remove('icon-fav-active');
  }
});