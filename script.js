/**
 * The base URL for all API requests.
 * Typically points to your backend server's API root.
 * @constant {string}
 */
const API_BASE_URL = 'http://127.0.0.1:8000/api/';


/**
 * Relative path for the data endpoint.
 * @constant {string}
 */
const DATA_URL = 'data/';

let allArticles = [];

async function init() {
    let response = await getData(API_BASE_URL, DATA_URL);
    allArticles = response;
    renderArticle(allArticles);
}

async function getData(API_BASE_URL, endpoint) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        credentials: 'include',
    });

    if (!response.ok) {
        throw new Error(`HTTP Fehler: ${response.status}`);
    }

    return response.json();
}

async function renderArticle(data) {
    document.getElementById('content').innerHTML = '';

    if (data.length === 0) {
        content.innerHTML = '<p>Keine Artikel gefunden.</p>';
        return;
    }

    for(let i = 0; i < data.length; i++) {
        document.getElementById('content').innerHTML += 
            `<article>
                <h4>${data[i]['title']}</h4>
                <p>${data[i]['text']}</p>      
            </article>`;
    }
}

function searchArticle() {
    const searchValue = document.getElementById('searchfield').value.toLowerCase();

    const filteredArticles = allArticles.filter(article =>
        article.title.toLowerCase().includes(searchValue) || article.text.toLowerCase().includes(searchValue)
    );

    renderArticle(filteredArticles);
}

async function postData(endpoint, data) {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        return {
            ok: response.ok,
            status: response.status,
            data: responseData
        };
    } catch (error) {
        return {
            ok: false,
            status: 'error',
            message: error.message
        };
    }
}

function submitPost() {
    const data = {
        title: document.getElementById('title').value,
        text: document.getElementById('text').value,
        author: document.getElementById('author').value
    };

    postData('data/', data);
    cleanInputfield();
    openMainMenu();
}

function cleanInputfield() {
    document.getElementById("add_title").value = "";
    document.getElementById("add_text").value = "";
    document.getElementById("add_author").value = "";
}

function openAddArticle() {
    document.getElementById('search_container').classList.remove('d_fd_c_ai_c');
    document.getElementById('btn_hinzufuegen').classList.add('d_none');
    document.getElementById('position_article').classList.add('d_none');
    document.getElementById('agb_section').classList.add('d_none');
    document.getElementById('impressum_section').classList.add('d_none');
    document.getElementById('add_section').classList.remove('d_none');
    document.getElementById('link_add_article').classList.add('d_none');
    document.getElementById('link_back').classList.remove('d_none');
}

function openAGB() {
    document.getElementById('search_container').classList.remove('d_fd_c_ai_c');
    document.getElementById('btn_hinzufuegen').classList.add('d_none');
    document.getElementById('position_article').classList.add('d_none');
    document.getElementById('agb_section').classList.remove('d_none');
    document.getElementById('impressum_section').classList.add('d_none')
    document.getElementById('add_section').classList.add('d_none');
    document.getElementById('link_back').classList.add('d_none');
    document.getElementById('link_add_article').classList.remove('d_none');
}

function openImpressum() {
    document.getElementById('search_container').classList.remove('d_fd_c_ai_c');
    document.getElementById('btn_hinzufuegen').classList.add('d_none');
    document.getElementById('position_article').classList.add('d_none');
    document.getElementById('agb_section').classList.add('d_none');
    document.getElementById('impressum_section').classList.remove('d_none');
    document.getElementById('add_section').classList.add('d_none');
    document.getElementById('link_back').classList.add('d_none');
    document.getElementById('link_add_article').classList.remove('d_none');
}

function openMainMenu() {
    document.getElementById('search_container').classList.add('d_fd_c_ai_c');
    document.getElementById('btn_hinzufuegen').classList.remove('d_none');
    document.getElementById('position_article').classList.remove('d_none');
    document.getElementById('agb_section').classList.add('d_none');
    document.getElementById('impressum_section').classList.add('d_none');
    document.getElementById('add_section').classList.add('d_none');
    document.getElementById('link_add_article').classList.remove('d_none');
    document.getElementById('link_back').classList.add('d_none');
}
