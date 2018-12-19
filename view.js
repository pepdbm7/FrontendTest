const view = {

  clearList() {
    //clears previous container
    let container = document.getElementById('container');
    let userDiv = document.getElementById('user-container');

    if (userDiv) {
      //loop to remove all children:
      while (userDiv.firstChild) {
        userDiv.removeChild(userDiv.firstChild);
      }
      container.removeChild(userDiv);
    }

    let repoDiv = document.getElementById('repo__container');
    
    if (repoDiv) {
      //loop to remove all children:
      while (repoDiv.firstChild) {
        repoDiv.removeChild(repoDiv.firstChild);
      }
      container.removeChild(repoDiv);
    }

    let errorDiv = document.getElementById('error');

    if (errorDiv) container.removeChild(errorDiv);
  },

  retrieveUserInfo (user) {

    this.clearList();

      //Create user details container 
    if (user) {
      let userInfo = document.createElement('div');
      userInfo.className = 'user__container';
      userInfo.id = 'user-container';

      userInfo.innerHTML = `
          <div class="image__container">
              <img src="${user.avatar_url}" />
          </div>
          <div>
              <p class="user__username" >@${user.login}</p>
              <p class="user__fullName" >${user.name ? user.name : "(User doesn't have a name)"}</p>
              <p class="user__bio" >${user.bio ? user.bio : "(User doesn't have bio)"}</p>
          </div>`;

      //append user info to general container:
      let container = document.getElementById('container');
      container.appendChild(userInfo);
    }
  },

  retrieveRepos (repositories) {
      //create repositories container:
      let repoContainer = document.createElement('div');
      repoContainer.id = 'repo__container';

     if(repositories) {
      if (repositories.length) {
      repoContainer.innerHTML = `
        <h3 class="repo__title">Repositories</h3>
        <ul>
            ${repositories.map(repo => (
                `<li>
                  <div class="repo__details">
                    <p>${repo.name}</p>
                    <div class="repo__stars">  
                      <img class="repo__stars__icon" src="./images/starIcon.svg" />
                      <p>${repo.stargazers_count}</p>
                    </div>
                    <div class="repo__forks">
                      <img class="repo__forks__icon" src="./images/starIcon.svg" />
                      <p>${repo.forks_count}</p>
                    </div>
                  </div>
                </li>`))}
        </ul>`;
      } else {
        repoContainer.innerHTML = `<h3 class="repo__title">Repositories</h3><br><p>(None created repositories yet)</p>`
      }
    
      //append to container:
      let container = document.getElementById('container');
      container.appendChild(repoContainer);
    }
  },

  showError (error) {
    
    this.clearList();

    let errorDiv = document.createElement('div');
    errorDiv.id = 'error';

    let errorMessage = document.createElement('p');
    errorMessage.innerText = error;  //(the param)
    errorMessage.className = 'error__message';
    errorDiv.appendChild(errorMessage);

    //Append Error to general container
    let container = document.getElementById('container');
    container.appendChild(errorDiv);
  }
};
  