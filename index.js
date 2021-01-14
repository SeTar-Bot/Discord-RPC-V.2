var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
const id =  ('')

client.on('ready', () => {
console.log(`RPC ID : ${id} Started`);
        client.request('SET_ACTIVITY', {
            pid: process.pid,
                activity : {
                    details : "",
                    state : "",
                    assets : {
                    large_image : "",
                    large_text : "" ,
                    small_image : "",
                    small_text : ""                    
                },
            buttons : [{label : "",url : ""} , {label : "" , url : ""}]
        }
    })
})

client.login({ clientId : `${id}` }).catch(console.error);