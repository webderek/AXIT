(async function () {
    const url = "https://reqres.in/api/users";

function sendRequest(method, url) {
    return fetch(url).then(response => {
        return response.json()
    })
}
let res = [];
sendRequest('GET', url).then((data,index) => res.push( data.data[0]["first_name"]))

console.log(res)


})()
