var displayField = document.getElementById("io");

display = (val) => displayField.value+=val;

solve = () => {
   let a = displayField.value;
   displayField.value = eval(a);
 }

clr = () => displayField.value= "";

backSpace = () => displayField.value = displayField.value.substring(0,displayField.value.length-1);

dark = () => {
  document.getElementById("main").classList.add("dark");
  document.getElementById("container").classList.add("darkContainer");
  document.getElementById("colorThemeBtn").innerHTML="Light Mode"
  document.getElementById("colorThemeBtn").setAttribute("onclick","light()")
}

light = () => {
  document.getElementById("main").classList.remove("dark");
  document.getElementById("container").classList.remove("darkContainer");
  document.getElementById("colorThemeBtn").innerHTML="Dark Mode"
  document.getElementById("colorThemeBtn").setAttribute("onclick","dark()")
}
