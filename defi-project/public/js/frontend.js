document.getElementById("connectWallet").addEventListener("click", async () => {
    // Mock wallet connection
    const walletAddress = "0x1234567890abcdef1234567890abcdef12345678"; 
    document.getElementById("walletAddressDisplay").textContent = walletAddress;
    document.getElementById("connectWallet").style.display = "none";
});

document.getElementById("stakeButton").addEventListener("click", async () => {
    const stakeAmount = document.getElementById("stakeAmount").value;
    if (stakeAmount > 0) {
        const response = await fetch('/stake', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: stakeAmount
            })
        });
        const data = await response.json();
        document.getElementById("stakedAmount").textContent = data.stakedAmount;
        document.getElementById("interestEarned").textContent = data.interestEarned;
    } else {
        alert("Please enter a valid amount.");
    }
});
