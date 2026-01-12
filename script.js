function openAddArticle() {
    document.getElementById('search_container').classList.remove('d_fd_c_ai_c');
    document.getElementById('btn_hinzufuegen').classList.add('d_none');
    document.getElementById('position_article').classList.add('d_none');
    document.getElementById('agb_section').classList.add('d_none');
    document.getElementById('impressum_section').classList.add('d_none');
    document.getElementById('add_section').classList.remove('d_none');
}

function openAGB() {
    document.getElementById('search_container').classList.remove('d_fd_c_ai_c');
    document.getElementById('btn_hinzufuegen').classList.add('d_none');
    document.getElementById('position_article').classList.add('d_none');
    document.getElementById('agb_section').classList.remove('d_none');
    document.getElementById('impressum_section').classList.add('d_none')
    document.getElementById('add_section').classList.add('d_none');
}

function openImpressum() {
    document.getElementById('search_container').classList.remove('d_fd_c_ai_c');
    document.getElementById('btn_hinzufuegen').classList.add('d_none');
    document.getElementById('position_article').classList.add('d_none');
    document.getElementById('agb_section').classList.add('d_none');
    document.getElementById('impressum_section').classList.remove('d_none');
    document.getElementById('add_section').classList.add('d_none');
}



