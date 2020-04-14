var gTeams = []
const KEY = 'teams';

function getTeams(onSuccess) {
    onShowSpinner()
    let teams = loadFromStorage(KEY);
    if (teams) {
        gTeams = teams
        onSuccess(teams);
        onHideSpinner()
    } else {
        $.get('https://worldcup.sfg.io/teams/', (response) => {
            gTeams = response
            saveToStorage(KEY, gTeams);
            onSuccess(gTeams);
            onHideSpinner()
        });
    }
}

function getReasults(teamFifaCode, onSuccessCallback) {
    let url = `https://worldcup.sfg.io/matches/country?fifa_code=${teamFifaCode}`;
    $.get(url, onSuccessCallback);
}