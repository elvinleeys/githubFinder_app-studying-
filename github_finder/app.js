// Init Github
// Github 클래스에 의해 github라는 새로운 인스턴스 객체가 생성되고
// 이 인스턴스 객체에는 client_id, client_password, repos_count, repos_sort에 대한 정보가
// 담겨있다.
const github = new Github;
// Init UI
// UI 클래스에 의해 ui라는 새로운 인스턴스 객체가 생성되고
// 여기에는 profile에 대한 정보가 담겨 있다.
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
// 만일 input에 글자를 칠때마다 검색되는 것을 막고, Enter에 의해서만 검색되게 하려면
// if조건문에 e.key를 Enter로 설정하면 된다.
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  // input, 즉 search부분에 입력된 값이 곧 userText라는 변수에 할당
  const userText = e.target.value;

  // 만일 검색된 값이 없다면
  if(userText !== ''){
   // Make http call
   github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    // Clear profile
    ui.clearProfile();
  }
}); 

