var gTeams
var gFilterByTxt = ''

const KEY = 'teams';

function getTeams(onSuccess) {
    onShowSpinner()
    let teams = loadFromStorage(KEY);
    if (teams) {
        gTeams = teams
        const filteredTeams = gTeams.filter(team => team.country.includes(gFilterByTxt))
        onSuccess(filteredTeams)
        onHideSpinner()
    } else {
        $.get('https://worldcup.sfg.io/teams/', (response) => {
            gTeams = response
            saveToStorage(KEY, gTeams);
            const filteredTeams = gTeams.filter(team => team.country.includes(gFilterByTxt))
            onSuccess(filteredTeams)
            onHideSpinner()

        });
    }
}

function getReasults(teamFifaCode, onSuccessCallback) {
    let url = `https://worldcup.sfg.io/matches/country?fifa_code=${teamFifaCode}`;
    $.get(url, onSuccessCallback);
}

function setFilter(text) {
    let filterText = ''
    for (let i = 0; i < text.length; i++) {
        if (i === 0) filterText += text.charAt(0).toUpperCase()
        else filterText += text.charAt(i).toLowerCase()
    }
    gFilterByTxt = filterText;
}