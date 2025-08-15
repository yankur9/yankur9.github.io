// Tab navigation logic
function showTab(tabId) {
  document.querySelectorAll('.tab-section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(tabId).style.display = 'block';
}

// Load content for each tab
async function loadTabContent(tabId, filePath) {
  try {
    const response = await fetch(filePath);
    const content = await response.text();
    document.getElementById(tabId).innerHTML = content;
  } catch (error) {
    console.error(`Error loading ${tabId}:`, error);
    document.getElementById(tabId).innerHTML = '<p>Error loading content. Please refresh the page.</p>';
  }
}
// Initialize the page
document.addEventListener('DOMContentLoaded', async function() {
  // Load all tab contents
  await Promise.all([
    loadTabContent('about', 'tabs/about.html'),
    loadTabContent('company', 'tabs/experience.html'),
    loadTabContent('projects', 'tabs/projects.html'),
    loadTabContent('skills', 'tabs/skills.html'),
    loadTabContent('contact', 'tabs/contact.html')
  ]);
  
  // Show the first tab by default
  showTab('about');
});