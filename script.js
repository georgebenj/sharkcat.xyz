const api_url = "https://api.mcsrvstat.us/2/mc.sharkcat.xyz"
const on_or_off = document.getElementById("status");
async function getStatus(){
    const response = await fetch(api_url)
    const data = await response.json();
    if(data.online == true){
        on_or_off.style = "color: green"
        on_or_off.innerHTML = "Online"
    }
    else{
        on_or_off.style = "color: red"
        on_or_off.innerHTML = "Offline"
    }
}
getStatus()