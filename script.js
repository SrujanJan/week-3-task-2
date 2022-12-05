// document.querySelector(".btn").addEventListener("click", function () {

//   dataEntry(data);
// });
// // dataEntry(Mdata);

function dataEntry() {
    document.querySelector(".h").classList.add("hide");
  var data = [
    {
      sno: "1",
      name: "kamal",
    },
    {
      sno: "2",
      name: "vimal",
    },
    {
      sno: "3",
      name: "kavya",
    },
    {
      sno: "4",
      name: "Haurnour singh",
    },
    {
      sno: "5",
      name: "John",
    },
  ];

  // for (var i = 0; i < 1; i++) {
  //     var rows = `<thead>
  //         <tr>
  //             <th>
  //                 S.no
  //             </th>
  //             <th>
  //                 Name
  //             </th>
  //         </tr>
  //     </thead>`;
  //     theaddata.innerHTML += rows;
  //   }
  let s = "";
  for (var i = 0; i < data.length; i++) {
    s =
      s +
      `<tr>
                <td>
                    ${data[i].sno}
                </td>
                <td>
                    ${data[i].name}
                </td>
            </tr>`;
  }
  document.querySelector(".s").innerHTML = "<table>" + s + "</table>";
}
document.querySelector(".btn").addEventListener("click", dataEntry);
// document.querySelector(".btn").addEventListener("click",dataEntry);
// function f(){
//     let a1=["Sujith","Suji","Kumar"];
//     let s="";
//     for(let i=0;i<a1.length;i++){
//         s=s+`<tr><td>${i+1}</td><td>${a1[i]}</td></tr>`;
//     }
//     let k=document.getElementById("cls");
//     k.innerHTML="<table>"+s+"</table>";
// }
// let a=document.getElementById("btn");
// a.addEventListener("click",f);
