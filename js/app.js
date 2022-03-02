const apiKey ='13cea69fbfe6ca578878db871d9aee1a';

const searchButton = () =>{
    const searchInput =document.getElementById('search-input');
    const searchInputvalue = searchInput.value;
    // console.log(searchInputvalue);
    searchInput.value ='';
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${searchInputvalue}&appid=${apiKey}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data =>displaytemp(data))
}
let setInnerText =(id,text) =>{
    document.getElementById(id).innerText = text;
}
//show temp 
const displaytemp = temp =>{
    setInnerText ('city',temp.name);
    setInnerText('tempratur',temp.main.temp)
    setInnerText('condition',temp.weather[0].main)
    //set icone
    const url=`https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const weatherIcone =document.getElementById('weither-icone');
    weatherIcone.setAttribute('src',url);
    // console.log(temp);
}