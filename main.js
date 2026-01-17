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

// ===== TYPING =====
const roles=["Frontend Web Developer","UI Designer","Creative Coder","Remote Ready"];
let i=0,j=0,del=false;
const typing=document.getElementById("typing");
setInterval(()=>{
  typing.innerText=roles[i].slice(0,j);
  if(!del) j++; else j--;
  if(j===roles[i].length) del=true;
  if(j===0 && del){del=false;i=(i+1)%roles.length;}
},120);

// ===== SKILLS ANIMATION =====
function animateSkills(){
  const bars=document.querySelectorAll(".bar div");
  bars[0].style.width="95%";
  bars[1].style.width="92%";
  bars[2].style.width="88%";
  bars[3].style.width="90%";
  bars[4].style.width="80%";
}

// ===== STATS COUNTER =====
function animateStats(){
  const counters=document.querySelectorAll(".count");
  counters.forEach(counter=>{
    const target=+counter.getAttribute("data-target");
    let count=0;
    const increment=Math.ceil(target/100);
    const interval=setInterval(()=>{
      count+=increment;
      if(count>=target){counter.innerText=target;clearInterval(interval);}
      else counter.innerText=count;
    },20);
  });
}

// ===== DARK/LIGHT TOGGLE =====
const themeToggle=document.getElementById("themeToggle");
themeToggle.addEventListener("click",()=>{
  document.body.classList.toggle("light-mode");
});



  