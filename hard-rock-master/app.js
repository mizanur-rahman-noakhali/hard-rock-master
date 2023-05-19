
document.getElementById('lyrics-search').addEventListener('click',function(){
        fetch('https://api.lyrics.ovh/suggest/baby')
        .then(Response =>Response.json())
        .then(data=> {
            console.log(data);
    for (let i = 0; i < data.length; i++) {
        const user = data[i];
        console.log(user);
    }
    })
})

