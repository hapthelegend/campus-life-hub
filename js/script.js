function loadEvents() {
    const container = document.getElementById("events");

    container.innerHTML = "<p>Loading Crusader events...</p>";

    const requests = [];

    for (let i = 0; i < 6; i++) {
        requests.push(
            fetch("https://bored.api.lewagon.com/api/activity")
                .then(res => res.json())
        );
    }

    Promise.all(requests)
        .then(results => {
            container.innerHTML = "";

            results.forEach(event => {
                container.innerHTML += `
                    <div class="card event-card p-3 mb-3">
                        <h5>${event.activity}</h5>
                        <p><strong>Type:</strong> ${event.type}</p>
                        <p><strong>Great for:</strong> Crusader student life</p>
                    </div>
                `;
            });
        });
}