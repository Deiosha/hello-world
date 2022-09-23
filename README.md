<!DOCTYPE html>
<html>
  <head>
   <tittle>My Favorite Hobby</tittle>
<link href="styles.css" type="text/css" rel="stylesheet">
<script src="app.js"></script>
  </head>
  <body style="background-color:white">
    <header>
        <h1>Soccer</h1>
      <nav>
        <ul>
        <li><a href="https://hfoley2013.github.io/hello-world/">Harper</a></li>
        <li><a href="https://dchoi294.github.io/hello-world/">Don</a></li>
        <p>Soccer has been around for hundreds of years. In England, soccer has been highly known, dating back to the early 12th century. Soccer is a sport in which two teams play against one another and eleven players on each team. The positions are right and left fullback, the goalkeeper, the right Midfielder/Winger, central/Box-to-Box Midfielder, center back, and defending/Holding Midfielder.</p>
       </ul>
     </nav>
   </header>
   <main>
    <section>
      <img src="https://via.placeholder.com/200x200/d63333/b83b8e?text="
      alt="Placeholder image"/>
      <h2> Text for this section</h2>
      <input type="text" placeholder="Do you like soccer? " id="myInput"/>
    <button type="button" onclick="getInputValue();">Get Value </button>
    </section>
    <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
    alt="Placeholder image"/>
    <h2>text for this section</h2>
   </main>
   <script  >
    function getInputValue(){
    // Selecting the input element and get its value
    var inputVal = document.getElementById("myInput").value;
    if (inputVal = "yes") {
      // Displaying the value
      alert(inputVal);
    }
    // Displaying the value
    else {
      alert ("you don't like soccer")
    }
}
   </script>
   </body>
</html>
