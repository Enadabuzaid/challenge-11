async function fetchAdvice() {
    try {
      const timestamp = new Date().getTime(); // Get current timestamp
      const url = `https://api.adviceslip.com/advice?timestamp=${timestamp}`;
      const response = await fetch(url);
      const data = await response.json();
      return {
        advice: data.slip.advice,
        id: data.slip.id
      };
    } catch (error) {
      console.error('Error fetching advice:', error);
      return 'Error fetching advice. Please try again.';
    }
  }
  
  const btn = document.getElementById('btn');
  const adviceText = document.getElementById('adviceText');
  const adviceId = document.getElementById('adviceId');
  
  btn.addEventListener('click', async () => {
    const advice = await fetchAdvice();
    adviceText.innerText = advice.advice;
    adviceId.innerHTML = advice.id;
  });
  
  // Initial advice generation on page load
  window.addEventListener('DOMContentLoaded', async () => {
    const advice = await fetchAdvice();
    adviceText.innerText = advice.advice;
    adviceId.innerHTML = advice.id;
  });
  