/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */
let showItem=(element_id) => {
    if (document.getElementById(element_id)) { 
        var obj = document.getElementById(element_id);  
        if (obj.style.display != "block") { 
            obj.style.display = "block"; 
        }
        else obj.style.display = "none"; 
    } 
} 

  document.getElementById("collapsible__text").animate(
    [
      { transform: 'rotate(0) translate3D(50%, 50%, 0)' },
      { color: '#431236', offset: 0.333},
      { transform: 'rotate(360deg) translate3D(50%, 50%, 0)' }
    ], {
      duration: 3000,
      iterations: Infinity}
    );
 
 