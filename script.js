const api_url = "https://api.mcsrvstat.us/2/198.244.209.168"
const on_or_off = document.getElementById("status");
const players = document.getElementById("players");
const version = document.getElementById("version");
const info_table = document.getElementById("info-table");
async function getStatus(){
    const response = await fetch(api_url)
    const data = await response.json();
    if(data.online == true){
        on_or_off.style = "color: green"
        on_or_off.innerHTML = "Online"

        players.innerHTML = data.players.online
        version.innerHTML = data.version

        info_table.style.display = ""

        
    }
    else{
        on_or_off.style = "color: red"
        on_or_off.innerHTML = "Offline"
        info_table.style.display = "none"
    }
}

getStatus()