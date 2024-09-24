class UI {
    // 생성자 함수 => 인스턴스 객체 생성
    constructor() {
        // profile이라는 key값은 profile이라는 id를 가진 요소가 해당된다.
      this.profile = document.getElementById('profile');
    }
  
    // Display profile in UI
    // showProfile함수는 user를 받아 user의 정보를 나타내는 함수(요소를 나타나게 한다.)
    showProfile(user) {
      this.profile.innerHTML = `
        <div class="card card-body mb-3">
          <div class="row">
            <div class="col-md-3">
              <img class="img-fluid mb-2" src="${user.avatar_url}">
              <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
              <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
              <span class="badge badge-success">Followers: ${user.followers}</span>
              <span class="badge badge-info">Following: ${user.following}</span>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
      `;
    }
  
    // Show user repos
    // showRepos함수는 repository 정보를 요소로 표현하는 함수로 repos를 인자로 받는다.
    showRepos(repos) {
      let output = '';
  
      repos.forEach(function(repo) {
        output += `
          <div class="card card-body mb-2">
            <div class="row">
              <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
              </div>
              <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forms_count}</span>
              </div>
            </div>
          </div>
        `;
      });
  
      // Output repos
      document.getElementById('repos').innerHTML = output;
    }
  
    // Show alert message
    showAlert(message, className) {
      // Clear any remaining alerts
      this.clearAlert();
      // Create div
      const div  =  document.createElement('div');
      // Add classes, 인자로 받은 className을 div태그의 class로 받는다.
      div.className = className;
      // Add text, div태그내의 표현할 텍스트를 인자로 받은 message로 표현
      div.appendChild(document.createTextNode(message));
      // Get parent, searchContainer라는 class를 가진 요소를 불러오고,
      const container =  document.querySelector('.searchContainer');
      // Get search box, search라는 class를 가진 요소를 불러와
      const search = document.querySelector('.search');
      // Insert alert, alert로 표현할 div태그와 search class를 가진 요소 전에 conainter를 넣는다.
      container.insertBefore(div, search);
  
      // Timeout after 3 sec
      // 3초 후 표시된 alert를 clearAltert함수를 통해 지워준다.
      setTimeout(() => {
        this.clearAlert();
      }, 3000);
    }
  
    // Clear alert message
    clearAlert() {
      const currentAlert = document.querySelector('.alert');
  
      if(currentAlert){
        currentAlert.remove();
      }
    }
  
    // Clear profile
    clearProfile() {
      this.profile.innerHTML = '';
    }
  }