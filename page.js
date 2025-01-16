$w.onReady(function () {
    fetch('https://muntahashaheen.wixsite.com/bargate-mine-trade/_functions/ip', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Failed to fetch IP address. Status: ${response.status}`);
            }
        })
        .then(data => {
            console.log('IP Address:', data.ip);
            // You can now use the IP address as needed
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
        });
});
