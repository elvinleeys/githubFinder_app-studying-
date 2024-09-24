class Github {
    constructor() {
      this.client_id = 'Ov23liCeO2XMgNar5a0X';
      this.client_secret = 'ab67f19d2e8c6aa24bced275afdf6e18f9d45b73';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
    }
    
    async getUser(user) {
      const profileResponse =
        await fetch(
          `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );
  
        console.log(profileResponse)
  
      const repoResponse =
        // repository count를 constructor에서 5개로 제한했기에 쿼리에 의해 한 페이지당 repository는 5개로 제한된다.
        await fetch(
          `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        );
  
      const profile = await profileResponse.json();
      const repos = await repoResponse.json();
  
      return {
        profile,
        repos
      }
    }
  }