import * as api from '../public/dist/api';

const state = {
  currentUser: null,
  messages: [],
  users: [],
  error: null,
  polling: null 
};


function render() {
  renderUsers();
  renderMessages();
  renderError();
}


function renderUsers() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = state.users.map(user => 
      `<li><span class="user-status"></span>${user}</li>`
    ).join('');
  }
  


function renderMessages() {
  const messageList = document.getElementById('message-list');
  messageList.innerHTML = state.messages.map(msg => 
    `<div><strong>${msg.user}</strong>: ${msg.text}</div>`
  ).join('');
}


function renderError() {
  const errorEl = document.getElementById('error');
  errorEl.textContent = state.error || '';
}
document.getElementById('login-button').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    document.getElementById('login-loading').hidden = false; 
    document.getElementById('login-error').textContent = ''; 
  
   
    const minimumDisplayTime = new Promise(resolve => setTimeout(resolve, 700));
  
    
    Promise.all([api.login(username), minimumDisplayTime])
      .then(([data]) => {
        state.currentUser = data.username;
        document.getElementById('login-view').hidden = true;
        document.getElementById('chat-app').hidden = false;
        document.getElementById('login-loading').hidden = true; 
        startPolling();
        render();
      })
      .catch(error => {
        document.getElementById('login-loading').hidden = true; 
  
       
        if (error.status === 403) {
          document.getElementById('login-error').textContent = "The username 'dog' is not allowed.";
        } else if (error.status === 400) {
          document.getElementById('login-error').textContent = "Invalid username. Please use characters and nums.";
        } else {
          document.getElementById('login-error').textContent = "An unexpected error occurred. Please try again.";
        }
      });
  });
  
  
  
  




document.getElementById('send-button').addEventListener('click', () => {
    const text = document.getElementById('message-input').value;
    api.sendMessage(text)
      .then(message => {
        state.messages.push(message);
        renderMessages();
        document.getElementById('message-input').value = ''; 
        state.error = null; 
        renderError();
      })
      .catch(error => {
        try {
          const errorMessage = JSON.parse(error.message).error; 
          state.error = errorMessage;
        } catch (e) {
          state.error = "An unexpected error occurred."; 
        }
        renderError();
      });
  });
  
  


function startPolling() {
  if (state.polling || !state.currentUser) return; 

  document.getElementById('messages-loading').hidden = false; 

  state.polling = setInterval(() => {
    api.getMessages().then(data => {
      state.messages = data.messages;
      renderMessages();
      document.getElementById('messages-loading').hidden = true; 
    });
    api.getUsers().then(data => {
      state.users = data.users;
      renderUsers();
    });
  }, 5000);
}


document.getElementById('logout-button').addEventListener('click', () => {
  console.log("Logout button clicked");

  if (state.polling) {
    clearInterval(state.polling);
    state.polling = null;
  }

  api.logout()
    .then(() => {
      state.currentUser = null;
      state.error = null;
      document.getElementById('login-view').hidden = false;
      document.getElementById('chat-app').hidden = true;
      renderError();
    })
    .catch(error => {
      state.error = error.message;
      renderError();
    });
});


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-view').hidden = false;
    document.getElementById('chat-app').hidden = true;
   
});


  
