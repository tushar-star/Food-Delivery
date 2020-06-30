const loginForm = document.querySelector(".login-form");
const login = async (email, password) => {
  // alert("Email :" + email + "   " + "Password " + " : " + password);
  try {
    const data = {
      email,
      password
    };
    const res = await axios.post("/api/user/login", data);
    // console.log(res);
    if (res.data.status === "user logged in") {
      alert("User logged in ");
      window.setTimeout(()=>{
        location.assign("/home");
      },1000);
    }
  } catch (err) {
    console.log(err);
  }
};
if(loginForm){
loginForm.addEventListener("submit", tushar => {
  tushar.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  login(email, password);
});
}
  