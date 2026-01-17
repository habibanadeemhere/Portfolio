window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";

    animateSkills();
    animateStats();

    Swal.fire({
      title: 'Welcome!',
      html: `<h2>I'm <span style="color:#a855f7;">Habiba Nadeem</span></h2>
             <p>Web Developer & Designer</p>`,
      background: '#0b0617',
      color: '#fff',
      confirmButtonText: 'Enter Portfolio',
      confirmButtonColor: '#a855f7',
      allowOutsideClick: false
    });

  }, 1200); // loader duration
};




// ===== DARK/LIGHT TOGGLE =====
const themeToggle=document.getElementById("themeToggle");
themeToggle.addEventListener("click",()=>{
  document.body.classList.toggle("light-mode");
});


