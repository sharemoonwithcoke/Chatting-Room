export function login(username) {
    return fetch('/api/v1/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username })
    })
      .then(handleResponse);
  }
  
  export function logout() {
    return fetch('/api/v1/session', { method: 'DELETE', credentials: 'include' })
      .then(handleResponse);
  }
  
  
  export function getMessages() {
    return fetch('/api/v1/messages', { credentials: 'include' })
      .then(handleResponse);
  }
  
  export function sendMessage(text) {
    return fetch('/api/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ text })
    }).then(handleResponse);
  }
  
  export function getUsers() {
    return fetch('/api/v1/users', { credentials: 'include' })
      .then(handleResponse);
  }
  
  export function handleResponse(response) {
    if (response.status === 204) {
      return null; 
    }
  
    if (!response.ok) {
      return response.text().then(text => {
      
        throw { status: response.status, message: text || response.statusText };
      });
    }
  
    return response.json().catch(() => {
      throw { status: response.status, message: "Invalid JSON response" };
    });
  }
  
  
  