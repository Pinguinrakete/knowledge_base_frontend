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


function init() {
    getData(API_BASE_URL, DATA_URL);
}

async function getData(API_BASE_URL, endpoint) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        credentials: 'include',
    });

    if (!response.ok) {
        throw new Error(`HTTP Fehler: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data fetched successfully", data);
    return data;
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
