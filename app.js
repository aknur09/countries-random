
 
const root=document.querySelector('#root')
const all=document.getElementById('all')
const input=document.querySelector('input')
const random=document.getElementById('random')

const url='https://restcountries.com/v3.1/name/'
const urlAll='https://restcountries.com/v3.1/all'

async function getCountry(name){
    const res=await fetch(url+name)
    const data= await res.json()
    showCountry(data)
}



input.onchange=()=>{
     getCountry(input.value)
 }
 
function showCountry(arr){
    root.innerHTML=''
    for (const obj of arr) {
        root.innerHTML+=`
        <h1>${obj.name.common}</h1>
        <h3>capital: ${obj.capital}</h3>
        <img src='${obj.flags.png}'/>
        `
    }
}

async function getCountries(){
    const res=await fetch(urlAll)
    const data= await res.json()
    showCountry(data)
}

all.onclick=()=>{
    getCountries()
}

random.onclick=async()=>{
    const randomMath=Math.floor(Math.random()*250);
    const res=await fetch(urlAll);
    const data = await res.json();

    const randomCountry=data[randomMath]
    showCountry([randomCountry]);
};