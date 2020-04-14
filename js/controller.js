$(document).ready(() => { onInit() })

function onInit() {
    getTeams(renderTeams);
}

function renderTeams(teams) {
    let strHTML = teams.map(getTeamHTML).join('');
    $('.card-wrapper').html(strHTML)
}

function getTeamHTML(team) {
    return `
        <div class="card text-center">
            <img src="img/${team.fifa_code}.jpg" alt="" class="round-img flag-img"/>
            <h3>${team.country}</h3>
            <div>
                <button class="btn btn-dark btn-sm my-1" onclick="onOpenModal('${team.fifa_code}','${team.country}')">More</button>
            </div>
        </div>
    `
}

function renderTeamInfos(teamInfos) {
    let currentTeamResults = teamInfos.map(getTeamInfoHTML).join('');
    $('.modal-body').html(currentTeamResults)
}

function getTeamInfoHTML(teamInfo) {
    return `
    <div class="card text-center">
        <div>
            <div class=""></div>
                <div class="">
                    <img src="img/${teamInfo.home_team.code}.jpg" class="flag-img" />
                    <div class="badge badge-dark">${teamInfo.home_team.goals} - ${teamInfo.away_team.goals}</div>
                    <img src="img/${teamInfo.away_team.code}.jpg" class="flag-img"/>
                </div>
                <div class=""></div>
            </div>
            <div>
                <div class="badge badge-light">${teamInfo.venue}</div>
                <div class="badge badge-primary">${formatDate(teamInfo.datetime)}</div>
            </div>
    </div>
            `
}

function onOpenModal(teamCode, teamName) {
    $('.modal').css('display', 'block')
    let strHTML = `
            <div class="modal-content">
                <div class="modal-header text-center">
                    <span class="closeBtn" onclick="onCloseModal()">&times;</span>
                    <h2>${teamName}</h2>
                </div>
                <div class="modal-body"></div>
                <div class="modal-footer"></div>
            </div>
    `
    $('.modal').html(strHTML)
    getReasults(teamCode, renderTeamInfos)
}

function onCloseModal() {
    $('.modal').css('display', 'none')
}

function onShowSpinner() {
    $('.spinner').css('display', 'block')
}

function onHideSpinner() {
    $('.spinner').css('display', 'none')
}