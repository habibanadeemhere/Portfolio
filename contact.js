// === Replace YOUR_SUPABASE_URL and YOUR_SUPABASE_ANON_KEY ===
const SUPABASE_URL="https://YOUR_SUPABASE_URL.supabase.co";
const SUPABASE_KEY="YOUR_SUPABASE_ANON_KEY";
const supabase=supabase.createClient(SUPABASE_URL,SUPABASE_KEY);

document.getElementById("contactForm").addEventListener("submit",async e=>{
  e.preventDefault();
  const name=document.getElementById("name").value;
  const email=document.getElementById("email").value;
  const message=document.getElementById("message").value;
  
  const {error}=await supabase.from("contacts").insert([{name,email,message}]);
  if(error) alert("Error sending message!");
  else alert("Message sent successfully!");
  
  document.getElementById("contactForm").reset();
});



