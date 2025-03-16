document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevents form submission and page reload

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://127.0.0.1:5000/login-api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        const responseData = await response.json();

        if (response.ok) {
            console.log(responseData)
            localStorage.setItem('token', responseData.access_token);   
            window.location.href = "/home"
        } else {
            console.error("Error:", responseData);
        }
    } catch (error) {
        console.error("Error signing in:", error);
    }
});

