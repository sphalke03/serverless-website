document.getElementById("fetchData").addEventListener("click", async function() {
    const response = await fetch("https://your-api-gateway-url.com/getData");
    const data = await response.json();
    document.getElementById("dataDisplay").innerText = JSON.stringify(data, null, 2);
});
