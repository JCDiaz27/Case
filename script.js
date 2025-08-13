// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

// Project Details Modal (placeholder for future enhancement)
function showProjectDetails(projectId) {
  const projectDetails = {
    project1: {
      title: "Inventory & Sales Management System",
      description: "A comprehensive desktop application built for retail businesses to manage their inventory, track sales, and generate detailed reports. Features include barcode scanning integration, supplier management, automated reorder alerts, and real-time inventory tracking.",
      features: [
        "Real-time inventory tracking with low-stock alerts",
        "Barcode scanning integration for quick product lookup",
        "Supplier management and purchase order generation",
        "Sales reporting with Crystal Reports integration",
        "Multi-user access with role-based permissions",
        "Automated backup and data synchronization"
      ],
      technologies: "C#, WinForms, SQL Server, Crystal Reports, ADO.NET",
      duration: "6 months",
      impact: "Reduced inventory management time by 75% and eliminated manual counting errors"
    },
    project2: {
      title: "Automated Statistical Yield Calculator",
      description: "A WPF application designed to replace complex Excel spreadsheets used for production yield calculations in manufacturing. The tool automates statistical analysis and generates accurate yield predictions based on historical data.",
      features: [
        "Automated statistical calculations replacing manual spreadsheets",
        "Historical data analysis and trend visualization",
        "Configurable calculation parameters and formulas",
        "Export results to multiple formats (PDF, Excel, CSV)",
        "Data validation and error checking",
        "Modern WPF interface with MVVM architecture"
      ],
      technologies: "C#, WPF, SQL Server, MVVM Pattern, Entity Framework",
      duration: "4 months",
      impact: "Improved calculation accuracy by 99% and reduced processing time from hours to minutes"
    }
  };

  const project = projectDetails[projectId];
  if (project) {
    // Create modal content
    const modalHTML = `
      <div class="modal-overlay" onclick="closeProjectModal()">
        <div class="modal-content" onclick="event.stopPropagation()">
          <div class="modal-header">
            <h2>${project.title}</h2>
            <span class="close-btn" onclick="closeProjectModal()">&times;</span>
          </div>
          <div class="modal-body">
            <p class="project-description-modal">${project.description}</p>
            
            <h3>Key Features:</h3>
            <ul class="features-list">
              ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            
            <div class="project-meta">
              <div class="meta-item">
                <strong>Technologies:</strong> ${project.technologies}
              </div>
              <div class="meta-item">
                <strong>Duration:</strong> ${project.duration}
              </div>
              <div class="meta-item">
                <strong>Impact:</strong> ${project.impact}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Add modal to DOM
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add modal styles if not already added
    if (!document.getElementById('modal-styles')) {
      const modalStyles = `
        <style id="modal-styles">
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
          }
          
          .modal-content {
            background: white;
            border-radius: 1rem;
            max-width: 600px;
            max-height: 80vh;
            overflow-y: auto;
            margin: 2rem;
            animation: slideIn 0.3s ease;
          }
          
          .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid #eee;
          }
          
          .modal-header h2 {
            margin: 0;
            color: #2c3e50;
            font-size: 1.5rem;
          }
          
          .close-btn {
            font-size: 2rem;
            cursor: pointer;
            color: #666;
            line-height: 1;
          }
          
          .close-btn:hover {
            color: #000;
          }
          
          .modal-body {
            padding: 1.5rem;
          }
          
          .project-description-modal {
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
            color: #555;
          }
          
          .modal-body h3 {
            color: #2c3e50;
            margin-bottom: 1rem;
            font-size: 1.2rem;
          }
          
          .features-list {
            list-style: none;
            padding: 0;
            margin-bottom: 1.5rem;
          }
          
          .features-list li {
            padding: 0.5rem 0;
            border-bottom: 1px solid #f0f0f0;
            position: relative;
            padding-left: 1.5rem;
          }
          
          .features-list li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #3498db;
            font-weight: bold;
          }
          
          .project-meta {
            background: #f8f9fa;
            padding: 1rem;
            border-radius: 0.5rem;
            border-left: 4px solid #3498db;
          }
          
          .meta-item {
            margin-bottom: 0.5rem;
            line-height: 1.4;
          }
          
          .meta-item:last-child {
            margin-bottom: 0;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideIn {
            from { transform: translateY(-50px) scale(0.9); opacity: 0; }
            to { transform: translateY(0) scale(1); opacity: 1; }
          }
          
          @media (max-width: 768px) {
            .modal-content {
              margin: 1rem;
              max-height: 90vh;
            }
            
            .modal-header h2 {
              font-size: 1.3rem;
            }
          }
        </style>
      `;
      document.head.insertAdjacentHTML('beforeend', modalStyles);
    }
  }
}

// Close project modal
function closeProjectModal() {
  const modal = document.querySelector('.modal-overlay');
  if (modal) {
    modal.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
      modal.remove();
    }, 300);
  }
}

// Add fadeOut animation
if (!document.getElementById('fadeout-style')) {
  const fadeOutStyle = `
    <style id="fadeout-style">
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
    </style>
  `;
  document.head.insertAdjacentHTML('beforeend', fadeOutStyle);
}

// Smooth scrolling for anchor links (fallback for older browsers)
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Contact form handling (basic validation)
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      // Basic validation
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Success message (replace with actual form submission logic)
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
      
      // Here you would typically send the data to a server
      // Example: fetch('/contact', { method: 'POST', body: formData })
    });
  }
});

// Add loading animation for external links
document.addEventListener('DOMContentLoaded', function() {
  const externalLinks = document.querySelectorAll('a[href^="http"]');
  
  externalLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Add loading indicator or analytics tracking here
      console.log('External link clicked:', this.href);
    });
  });
});

// Add active section highlighting in navigation
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  function highlightActiveSection() {
    const scrollPosition = window.scrollY + 200; // Offset for header
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all nav links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to current section's nav link
        const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }
  
  // Add CSS for active navigation links
  if (!document.getElementById('nav-active-style')) {
    const navActiveStyle = `
      <style id="nav-active-style">
        nav a.active {
          color: #3498db !important;
          text-decoration: underline !important;
          text-decoration-color: #3498db !important;
        }
      </style>
    `;
    document.head.insertAdjacentHTML('beforeend', navActiveStyle);
  }
  
  // Listen for scroll events
  window.addEventListener('scroll', highlightActiveSection);
  
  // Initial call
  highlightActiveSection();
});
