export async function joinWaitlist({ userType, name, email }) {
    const response = await fetch('https://api.hyprlinc.com/api/v1/waitlist/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userType, name, email }),
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.error || 'Failed to join waitlist');
    }
  
    return data;
  }