window.onload = function()
{

    // function creatHtml(name){
    //     var html = '<tr><td class="text-left">'+name+'</td><td class="text-left" id="'+count+'"></td><td class="text-left"><button id="button-'+count+'">+1</button><button id="button-m'+count+'">-1</button></td></tr>';
    //     var textnode = document.createTextNode(html);

    //     // node.appendChild(textnode);
    //     document.getElementById("tbody").appendChild(textnode);
    // }

    score = [];
    count = 1;
    function creatScore(name){
        score[name] = 0;
        // creatHtml(name);

        var pts = document.getElementById(count);
        var button = document.getElementById("button-" + count);
        var buttonM = document.getElementById("button-m" + count++);
        button.onclick = function()
        {
            score[name] += 1;
            pts.innerHTML = score[name];
        }
        buttonM.onclick = function()
        {
            score[name] -= 1;
            pts.innerHTML = score[name];
        }
    }

   var tab = ["Tomz","Erwan", "Megane", "SidoBerg", "Aleex", "Mugiwawa", "Saphir", "Antho"];
   tab.forEach(element => {
    creatScore(element);
   });

}
