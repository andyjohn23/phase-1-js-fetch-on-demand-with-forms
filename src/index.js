const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.getElementById('searchByID');

        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(response => response.json())
            .then(json => {
                const title = document.querySelector('#movieDetails h4');
                const summary = document.querySelector('#movieDetails p');

                title.innerText = json.title;
                summary.innerText = json.summary;
            });
        input.value = "";
    });
}

document.addEventListener('DOMContentLoaded', init);