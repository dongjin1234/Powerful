//toggle
let toggleBtn = document.querySelector(".toggle"),
  sideMenu = document.querySelector(".sideNav"),
  closeBtn = document.querySelector(".closeBtn");

toggleBtn.addEventListener("click", moveLeft);
closeBtn.addEventListener("click", moveRight);


function moveLeft() {
  sideMenu.style.transform = "translateX(-100%)";
}

function moveRight() {
  sideMenu.style.transform = "translateX(0)";
}

const mypageBtn = document.querySelector(".logout");

const logout = async () => {
  Swal.fire({
    title: '로그아웃 하시겠습니까?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '네',
    cancelButtonText: '아니오'
  }).then(async (result) => {
    if (result.isConfirmed) {
      await fetch("/users/logout", {
        method: "POST",
      })
      location.href = "/users/login";
    }
  })
}
mypageBtn.addEventListener('click', logout)