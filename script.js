const api_url = "https://api.mcsrvstat.us/2/mc.sharkcat.xyz"
async function getStatus(){
    const response = await fetch(api_url)
    const data = await response.json();
    const online_status = data.online
    if(online_status == true){
        document.getElementById("online_status").style = "color: green"
        document.getElementById("online_status").innerHTML = "Online"
    }
    else{
        document.getElementById("online_status").style = "color: red"
        document.getElementById("online_status").innerHTML = "Offline"
    }

}


getStatus()