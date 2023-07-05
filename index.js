const ınput = document.querySelector("#ınput");
const searchButton = document.querySelector("#button");
const content = document.querySelector(".content");
const heading = document.querySelector("#heading");

runEventListeners();
function runEventListeners(){

    searchButton.addEventListener("click", search)

}

function search(e){
    value = ınput.value.trim();
    Array.from(content.children).forEach((child) => child.remove())
    ınput.value = "";
    fetch(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${value}`,{
        method: "GET",
        headers: {
            Authorization: "apikey 4bGGN4TsHlKFCBSX6cWFOs:4trhInYUVurmivm7ynaZgo"
        }
    })
    .then((res) => res.json())
    .then((data) => {

        data.result.forEach(element => {
            addToUI(element.icon, element.date, element.degree, element.day, element.description);
           
        });
        
    })
    .catch((err) => console.log(err));

    e.preventDefault();
}

function addToUI(url,date,degree,day,status){

heading.textContent = value[0].toUpperCase() + value.substring(1);;

const div_card = document.createElement('div');
div_card.className = 'card';
content.append(div_card);

const div_day = document.createElement('div');
const day_ = document.createElement('h3');
day_.textContent = day
day_.style.fontSize="35px";
day_.style.color="#4343e8";
div_day.append(day_);
div_card.append(div_day);

const div_img = document.createElement('div');
const img = document.createElement('img');
img.setAttribute('src',url);
img.height = '70';
img.width = '70';
div_img.style.display = 'flex';
div_img.style.justifyContent = 'center';
div_img.style.alignItems = 'center';
div_img.append(img);
div_card.append(div_img);

const div_status = document.createElement('div');
const status_ = document.createElement('h4');
status_.textContent = status
div_status.style.display = 'flex';
div_status.style.justifyContent = 'center';
div_status.style.alignItems = 'center';
div_status.style.fontSize = '25px';
div_status.append(status_)
div_card.append(div_status);

const div_degree = document.createElement('div');
const degree_ = document.createElement("h4");
degree_.textContent = parseInt(degree)  + "°"
div_degree.style.display = 'flex';
div_degree.style.justifyContent = 'center';
div_degree.style.alignItems = 'center';
div_degree.style.fontSize = '25px';
div_degree.style.color = "steelblue";
div_degree.append(degree_);
div_card.append(div_degree);
}