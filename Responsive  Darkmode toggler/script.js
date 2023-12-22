document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');

  darkModeToggle.addEventListener('change', function () {
    const isDarkMode = darkModeToggle.checked;
    document.body.classList.toggle('dark-mode', isDarkMode);
    updateBackgroundAndText(isDarkMode);
  });

  // Check the user's preference from previous visits (if any)
  if (localStorage.getItem('darkMode') === 'enabled') {
    darkModeToggle.checked = true;
    document.body.classList.add('dark-mode');
    updateBackgroundAndText(true);
  }
});

// Save user's preference to localStorage
document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');

  darkModeToggle.addEventListener('change', function () {
    const isDarkMode = darkModeToggle.checked;
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', null);
    }
    updateBackgroundAndText(isDarkMode);
  });
});

function updateBackgroundAndText(isDarkMode) {
  const body = document.body;
  const textColor = isDarkMode ? '#fff' : '#000'; // Change these colors as needed
  const backgroundColor = isDarkMode ? '#111' : '#fff'; // Change these colors as needed

  body.style.transition = 'background-color 0.4s ease, color 0.4s ease';
  body.style.backgroundColor = backgroundColor;
  body.style.color = textColor;

  // Remove transition after it's done to avoid affecting other elements
  setTimeout(() => {
    body.style.transition = '';
  }, 400);
}
