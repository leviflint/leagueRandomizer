const button = document.querySelector('.button');

button.addEventListener("click", () => {
    fetch("http://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/champion.json")
    .then(res => res.json())
    .then ((out) => {
        console.log('Output: ', out.data.Aatrox)
    })
});


// function appendData(data) {
//     var mainContainer = document.querySelector(".champions");
//     for (var i = 0; i < data.length; i++) {
//         var div = document.createElement("div");
//         div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
//         mainContainer.appendChild(div);
//     }
// }