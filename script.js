const form = document.getElementById("memberForm");
const memberList = document.getElementById("memberList");

const totalText = document.getElementById("total");
const activeText = document.getElementById("active");
const expiredText = document.getElementById("expired");

const searchInput = document.getElementById("searchInput");

let total = 0;
let active = 0;
let expired = 0;

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const age = document.getElementById("age").value;
const phone = document.getElementById("phone").value;
const plan = document.getElementById("plan").value;
const status = document.getElementById("status").value;
const payment = document.getElementById("payment").value;
const expiry = document.getElementById("expiry").value;

const row = document.createElement("tr");

row.innerHTML = `
<td>${name}</td>
<td>${age}</td>
<td>${phone}</td>
<td>${plan}</td>
<td>${payment}</td>
<td>${expiry}</td>
<td>${status}</td>
<td>
<button class="deleteBtn">Delete</button>
</td>
`;

memberList.appendChild(row);

total++;

if(status === "Active"){
active++;
}else{
expired++;
}

updateCards();

form.reset();

row.querySelector(".deleteBtn").addEventListener("click", function(){

row.style.transform = "scale(0)";
row.style.transition = "0.3s";

setTimeout(() => {

row.remove();

total--;

if(status === "Active"){
active--;
}else{
expired--;
}

updateCards();

},300);

});

});

function updateCards(){

totalText.innerText = total;
activeText.innerText = active;
expiredText.innerText = expired;

}

searchInput.addEventListener("keyup", function(){

let filter = searchInput.value.toLowerCase();

let rows = memberList.getElementsByTagName("tr");

for(let i = 0; i < rows.length; i++){

let name = rows[i].getElementsByTagName("td")[0];

if(name){

let text = name.textContent.toLowerCase();

if(text.indexOf(filter) > -1){
rows[i].style.display = "";
}else{
rows[i].style.display = "none";
}

}

}

});
