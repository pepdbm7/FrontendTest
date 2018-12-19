let form = document.getElementById("search-form");

form.addEventListener ("submit", async event => {
  event.preventDefault();  
  const input = document.getElementById("search-input");

  const query = input.value;
  try {


    await Promise.all([logic.getUser(query), logic.getRepositories(query)])
    
      .then(res => {
          //response is array which has 2 objects:
          const [user, repositories] = res;

          view.retrieveUserInfo(user);
          view.retrieveRepos(repositories);
      })
      .catch(err => {
        view.showError(err);
      })

  } catch (err) {
    view.showError(err);
  }

});