// ==================== SEMESTER DATA (unchanged) ====================
const semesterDetails = {
  1: { 
    name: "Foundations", 
    icon: "fas fa-rocket", 
    courses: [
      "GENDER SENSITIZATION",
      "ADVANCED CALCULUS",
      "BASIC ELECTRONICS",
      "BASIC ELECTRONICS LABORATORY",
      "BASIC ENGINEERING MECHANICS",
      "CHEMISTRY",
      "CHEMISTRY LABORATORY",
      "EXTRA ACADEMIC ACTIVITY-I"
    ], 
    credits: 21, 
    project: "Introduction to Engineering Design — hands-on project integrating basic electronics, mechanics, and chemistry principles." 
  },
  2: { 
    name: "Core Sciences", 
    icon: "fas fa-atom", 
    courses: [
      "LIFE SKILL",
      "PROGRAMMING AND DATA STRUCTURES (CS10003)",
      "LINEAR ALGEBRA, NUMERICAL AND COMPLEX ANALYSIS (MA11004)",
      "PROGRAMMING AND DATA STRUCTURES LABORATORY (CS19003)",
      "PHYSICS OF WAVES (PH11003)",
      "PHYSICS LABORATORY (PH19003)",
      "ENGINEERING DRAWING AND COMPUTER GRAPHICS (CE13003)",
      "ELECTRICAL TECHNOLOGY (EE11003)",
      "EXTRA ACADEMIC ACTIVITY-II (EA10008)"
    ], 
    credits: 24, 
    project: "Integrated Lab Project — programming, circuit design, and engineering graphics based mini-project." 
  },
  3: { 
    name: "Aerodynamics & Propulsion Fundamentals", 
    icon: "fas fa-wind", 
    courses: [
      "INTRODUCTION TO AERODYNAMICS (AE21201)",
      "DYNAMICS FOR AEROSPACE ENGINEERS (AE21203)",
      "THERMODYNAMICS AND AEROSPACE PROPULSION SYSTEMS (AE21205)",
      "EXTRA ACADEMIC ACTIVITY-III (EA10009)",
      "BASIC ELECTRONICS (EC21201)",
      "BASIC ELECTRONICS LABORATORY (EC29201)",
      "NUMERICAL SOLUTION OF ORDINARY AND PDE (MA20201)",
      "BREADTH ELECTIVE I"
    ], 
    credits: 25, 
    project: "Wind Tunnel Demonstration — experimental analysis of basic aerodynamic forces." 
  },
  4: { 
    name: "Aerospace Structures & Flight Controls", 
    icon: "fas fa-cogs", 
    courses: [
      "AERODYNAMICS LABORATORY - I (AE29202)",
      "INTRODUCTION TO FLIGHT VEHICLE CONTROLS (AE20202)",
      "LOW SPEED AERODYNAMICS (AE21202)",
      "INTRODUCTION TO AEROSPACE STRUCTURES (AE21204)",
      "STRUCTURES LABORATORY - I (AE29204)",
      "INTEGRAL TRANSFORMS AND APPLICATIONS (MA30210)",
      "APPLIED COMPUTATIONAL METHODS (MA30208)",
      "EXTRA ACADEMIC ACTIVITY-IV (EA10010)"
    ], 
    credits: 22, 
    project: "Structural Analysis of a Wing Box — finite element modeling and experimental validation." 
  },
  5: { 
    name: "High Speed Aerodynamics & Flight Mechanics", 
    icon: "fas fa-fighter-jet", 
    courses: [
      "HIGH SPEED AERODYNAMICS (AE31103)",
      "MECHANICS OF FLIGHT (AE31007)",
      "VISCOUS FLOW THEORY (AE31010)",
      "AEROSPACE STRUCTURAL ANALYSIS (AE31009)",
      "STRUCTURES LAB -II (AE39003)",
      "AERODYNAMICS LAB-II (AE39001)",
      "DEPTH ELECTIVE I"
    ], 
    credits: 23, 
    project: "Flight Stability & Control Analysis — simulation of aircraft longitudinal dynamics." 
  },
  6: { 
    name: "Advanced Aerospace Systems", 
    icon: "fas fa-cogs", 
    courses: [
      "Aerospace Structural Dynamics",
      "Aircraft Stability and Control",
      "Finite Elements Methods",
      "Theory of Jet Propulsion",
      "System Laboratory",
      "Flight Testing Laboratory",
      "Propulsion Laboratory"
    ], 
    credits: 22, 
    project: "Integrated Lab Project — performance analysis of a jet engine & flight control system validation" 
  },
  7: { 
    name: "Specialization", 
    icon: "fas fa-microchip", 
    courses: [
      "Hypersonic Aerodynamics",
      "Space Mission Design",
      "AI in Aerospace",
      "Finite Element Methods",
      "Technical Elective I"
    ], 
    credits: 16, 
    project: "Mission Design Report — interplanetary trajectory & spacecraft architecture" 
  },
  8: { 
    name: "Advanced Topics", 
    icon: "fas fa-chart-line", 
    courses: [
      "Reusable Launch Vehicles",
      "Guidance & Control",
      "Aerospace System Integration",
      "Technical Elective II",
      "Professional Ethics"
    ], 
    credits: 16, 
    project: "Capstone Proposal — detailed roadmap for final year project" 
  },
  9: { 
    name: "Capstone I", 
    icon: "fas fa-users", 
    courses: [
      "Capstone Design Project I",
      "Spacecraft Thermal Control",
      "Risk & Reliability",
      "Elective III"
    ], 
    credits: 15, 
    project: "Preliminary Capstone Review — design verification and prototype" 
  },
  10: { 
    name: "Capstone II & Launch", 
    icon: "fas fa-check-double", 
    courses: [
      "Capstone Design Project II",
      "Entrepreneurship in Aerospace",
      "Seminar & Portfolio"
    ], 
    credits: 14, 
    project: "Full-Scale Rocket/System Launch & Final Presentation" 
  }
};

// ==================== RESOURCE FOLDERS ====================
const DEFAULT_FOLDERS = {
  books: "https://drive.google.com/drive/folders/1mjfdzM67UBHLnHT2rPHA-8CirH_CXJ9H?usp=sharing",
  notes: "https://drive.google.com/drive/folders/1OdJZZl9IiFGMNT4B4ZkE61aIG_lwJiev?usp=sharing",
  slides: "https://drive.google.com/drive/folders/1Y9cweOT4dVGOnOyBmKwlaxC_-rNYmfRQ?usp=sharing",
  tutorials: "https://drive.google.com/drive/folders/1aEfAKlxx5k4KbvfaktQPGKT_-nXyrSZO?usp=sharing",
  pyqs: "https://drive.google.com/drive/folders/1HGjbd1kGkm0JokbjuqTHP345SMJz3frO?usp=sharing"
};

const SUBJECT_FOLDERS = {
  "Aircraft Stability and Control": {
    books: "https://drive.google.com/drive/folders/12cSzlni0okbJkSo6LUIjQPM6Oms2HzHa?usp=sharing",
    notes: "https://drive.google.com/drive/folders/1NF92Vlf8iv3NdbUR8pbEgO0KdRDL4bH6?usp=sharing",
    slides: "https://drive.google.com/drive/folders/1Iw58sL3R-qclkThvh7EIBzDgPfHH90rE?usp=sharing",
    tutorials: "https://drive.google.com/drive/folders/1aEfAKlxx5k4KbvfaktQPGKT_-nXyrSZO?usp=sharing",
    pyqs: "https://drive.google.com/drive/folders/1hI_uG5-kIRalaY2oBblKDoH2HSf3XwDw?usp=sharing"
  },
  "Finite Elements Methods": {
    books: "https://drive.google.com/drive/folders/1A2m4S5qT7lFXBdEF60mlEpSIKSZRFGst?usp=sharing",
    notes: "https://drive.google.com/drive/folders/1UeloxKsP9JenV0JZfvwWg7evXBjbY0De?usp=sharing",
    slides: "https://drive.google.com/drive/folders/109WiHksb6sgXZuyTf-Xu5NhrAQJhp9sQ?usp=sharing",
    tutorials: "https://drive.google.com/drive/folders/1zbp8rpI8qmV9XEHHJey9WVJeI3UiT1l6?usp=sharing",
    pyqs: "https://drive.google.com/drive/folders/1WWC01vqyw2CKWM50I08qbGLPeTBW3iLa?usp=sharing"
  }
};

function getFolderURL(subjectName, resourceType) {
  if (SUBJECT_FOLDERS[subjectName] && SUBJECT_FOLDERS[subjectName][resourceType]) {
    return SUBJECT_FOLDERS[subjectName][resourceType];
  }
  return DEFAULT_FOLDERS[resourceType];
}

// ==================== ICON MAPPING ====================
function getIconForCourse(courseName) {
  const name = courseName.toUpperCase();
  if (name.includes("GENDER SENSITIZATION")) return "fa-venus-mars";
  if (name.includes("ADVANCED CALCULUS")) return "fa-calculator";
  if (name.includes("BASIC ELECTRONICS") && !name.includes("LABORATORY")) return "fa-microchip";
  if (name.includes("ELECTRONICS LABORATORY")) return "fa-flask";
  if (name.includes("BASIC ENGINEERING MECHANICS")) return "fa-cogs";
  if (name.includes("CHEMISTRY") && !name.includes("LABORATORY")) return "fa-flask";
  if (name.includes("CHEMISTRY LABORATORY")) return "fa-vial";
  if (name.includes("EXTRA ACADEMIC ACTIVITY")) return "fa-users";
  if (name.includes("LIFE SKILL")) return "fa-heart";
  if (name.includes("PROGRAMMING AND DATA STRUCTURES") && !name.includes("LABORATORY")) return "fa-code";
  if (name.includes("LINEAR ALGEBRA")) return "fa-calculator";
  if (name.includes("PROGRAMMING AND DATA STRUCTURES LABORATORY")) return "fa-laptop-code";
  if (name.includes("PHYSICS OF WAVES")) return "fa-waveform";
  if (name.includes("PHYSICS LABORATORY")) return "fa-microscope";
  if (name.includes("ENGINEERING DRAWING")) return "fa-drafting-compass";
  if (name.includes("ELECTRICAL TECHNOLOGY")) return "fa-bolt";
  if (name.includes("INTRODUCTION TO AERODYNAMICS")) return "fa-wind";
  if (name.includes("DYNAMICS FOR AEROSPACE ENGINEERS")) return "fa-chart-line";
  if (name.includes("THERMODYNAMICS AND AEROSPACE PROPULSION SYSTEMS")) return "fa-fire";
  if (name.includes("NUMERICAL SOLUTION OF ORDINARY AND PDE")) return "fa-calculator";
  if (name.includes("BREADTH ELECTIVE")) return "fa-book-open";
  if (name.includes("AERODYNAMICS LABORATORY - I")) return "fa-flask";
  if (name.includes("INTRODUCTION TO FLIGHT VEHICLE CONTROLS")) return "fa-sliders-h";
  if (name.includes("LOW SPEED AERODYNAMICS")) return "fa-wind";
  if (name.includes("INTRODUCTION TO AEROSPACE STRUCTURES")) return "fa-cubes";
  if (name.includes("STRUCTURES LABORATORY - I")) return "fa-flask";
  if (name.includes("INTEGRAL TRANSFORMS AND APPLICATIONS")) return "fa-calculator";
  if (name.includes("APPLIED COMPUTATIONAL METHODS")) return "fa-laptop-code";
  if (name.includes("HIGH SPEED AERODYNAMICS")) return "fa-rocket";
  if (name.includes("MECHANICS OF FLIGHT")) return "fa-fighter-jet";
  if (name.includes("VISCOUS FLOW THEORY")) return "fa-tachometer-alt";
  if (name.includes("AEROSPACE STRUCTURAL ANALYSIS")) return "fa-chart-line";
  if (name.includes("STRUCTURES LAB -II")) return "fa-flask";
  if (name.includes("AERODYNAMICS LAB-II")) return "fa-flask";
  if (name.includes("DEPTH ELECTIVE")) return "fa-book-open";
  if (name.includes("AEROSPACE STRUCTURAL DYNAMICS")) return "fa-chart-line";
  if (name.includes("AIRCRAFT STABILITY AND CONTROL")) return "fa-fighter-jet";
  if (name.includes("FINITE ELEMENTS METHODS")) return "fa-cube";
  if (name.includes("THEORY OF JET PROPULSION")) return "fa-fire";
  if (name.includes("SYSTEM LABORATORY")) return "fa-microchip";
  if (name.includes("FLIGHT TESTING LABORATORY")) return "fa-plane";
  if (name.includes("PROPULSION LABORATORY")) return "fa-rocket";
  if (name.includes("HYPERSONIC AERODYNAMICS")) return "fa-rocket";
  if (name.includes("SPACE MISSION DESIGN")) return "fa-satellite";
  if (name.includes("AI IN AEROSPACE")) return "fa-robot";
  if (name.includes("FINITE ELEMENT METHODS")) return "fa-cube";
  if (name.includes("TECHNICAL ELECTIVE")) return "fa-book-open";
  if (name.includes("REUSABLE LAUNCH VEHICLES")) return "fa-space-shuttle";
  if (name.includes("GUIDANCE & CONTROL")) return "fa-sliders-h";
  if (name.includes("AEROSPACE SYSTEM INTEGRATION")) return "fa-cogs";
  if (name.includes("PROFESSIONAL ETHICS")) return "fa-balance-scale";
  if (name.includes("CAPSTONE DESIGN PROJECT")) return "fa-tasks";
  if (name.includes("SPACECRAFT THERMAL CONTROL")) return "fa-thermometer-half";
  if (name.includes("RISK & RELIABILITY")) return "fa-chart-line";
  if (name.includes("ELECTIVE III")) return "fa-book-open";
  if (name.includes("ENTREPRENEURSHIP IN AEROSPACE")) return "fa-chalkboard-user";
  if (name.includes("SEMINAR & PORTFOLIO")) return "fa-file-alt";
  return "fa-book-open";
}

// ==================== MODAL CREATION ====================
function createModal() {
  const modalDiv = document.createElement('div');
  modalDiv.id = 'customModal';
  modalDiv.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.85);
    backdrop-filter: blur(5px);
    z-index: 2000;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  `;
  modalDiv.innerHTML = `
    <div style="background: rgba(10,30,45,0.95); backdrop-filter: blur(12px); border-radius: 2rem; border: 1px solid rgba(230,126,34,0.4); max-width: 1100px; width: 90%; max-height: 90vh; overflow-y: auto; box-shadow: 0 25px 45px -12px black;">
      <div style="background: linear-gradient(115deg, #0f2b3f, #1c4e70); padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e67e22; border-radius: 2rem 2rem 0 0;">
        <h2 id="modalTitle" style="font-size: 1.8rem; font-family: 'Space Grotesk', monospace; color: white; margin: 0;">Semester Details</h2>
        <button id="closeModalBtn" style="background: none; border: none; font-size: 2rem; cursor: pointer; color: white; transition: 0.2s;">&times;</button>
      </div>
      <div id="modalContent" style="padding: 2rem; color: #eef5ff;"></div>
    </div>
  `;
  document.body.appendChild(modalDiv);
  document.getElementById('closeModalBtn').addEventListener('click', () => {
    modalDiv.style.display = 'none';
  });
  modalDiv.addEventListener('click', (e) => {
    if (e.target === modalDiv) modalDiv.style.display = 'none';
  });
  return modalDiv;
}

let modal = null;

function showModal(title, contentHtml) {
  if (!modal) modal = createModal();
  document.getElementById('modalTitle').innerHTML = title;
  document.getElementById('modalContent').innerHTML = contentHtml;
  modal.style.display = 'flex';
  attachModalEventListeners(title);
}

function attachModalEventListeners(currentTitle) {
  // Course cards (semester view)
  const courseCards = document.querySelectorAll('#modalContent .course-icon-card');
  courseCards.forEach(card => {
    card.addEventListener('click', () => {
      const courseName = card.getAttribute('data-course');
      if (courseName) {
        const subjectContent = generateSubjectContent(courseName);
        showModal(courseName, subjectContent);
      }
    });
  });

  // Resource buttons (subject view)
  const resourceBtns = document.querySelectorAll('#modalContent .resource-btn');
  resourceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type');
      const subjectName = currentTitle;
      switch(type) {
        case 'slides':
          window.open(getFolderURL(subjectName, 'slides'), '_blank');
          break;
        case 'notes':
          window.open(getFolderURL(subjectName, 'notes'), '_blank');
          break;
        case 'books':
          window.open(getFolderURL(subjectName, 'books'), '_blank');
          break;
        case 'tutorials':
          window.open(getFolderURL(subjectName, 'tutorials'), '_blank');
          break;
        case 'pyqs':
          window.open(getFolderURL(subjectName, 'pyqs'), '_blank');
          break;
        case 'videos':
          alert('🎥 Video lectures will be available soon.');
          break;
        case 'instructor':
          alert(`👨‍🏫 Dr. [Instructor Name] – expert in ${subjectName} with 12+ years of experience.`);
          break;
        default:
          alert('Content coming soon.');
      }
    });
  });
}

// ==================== CONTENT GENERATION ====================
function generateSemesterContent(semNum, semesterData) {
  const iconsHtml = semesterData.courses.map(course => {
    const iconClass = getIconForCourse(course);
    const escapedCourse = course.replace(/'/g, "\\'");
    return `
      <div class="course-icon-card" data-course="${escapedCourse.replace(/"/g, '&quot;')}" style="background: rgba(255,255,255,0.08); border-radius: 1.5rem; padding: 1.5rem 1rem; text-align: center; transition: 0.3s; border: 1px solid rgba(230,126,34,0.3); cursor: pointer;">
        <i class="fas ${iconClass}" style="font-size: 3rem; color: #e67e22; margin-bottom: 0.8rem; display: block;"></i>
        <span style="font-size: 0.95rem; font-weight: 500;">${course}</span>
      </div>
    `;
  }).join('');

  return `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.8rem;">
      ${iconsHtml}
    </div>
    <div style="background: rgba(0,0,0,0.3); border-radius: 1.5rem; padding: 1.5rem; margin-top: 1.5rem; border: 1px solid rgba(230,126,34,0.4);">
      <i class="fas fa-rocket"></i> <strong>🏆 Capstone / Key Project</strong><br>
      ${semesterData.project}
    </div>
    <div style="display: inline-block; background: #e67e22; padding: 0.2rem 1rem; border-radius: 30px; margin-top: 1rem;">
      <i class="fas fa-graduation-cap"></i> Total Credits: ${semesterData.credits}
    </div>
  `;
}

function generateSubjectContent(subjectName) {
  return `
    <div>
      <p style="margin-bottom: 1rem;">Click any button to access learning materials for this subject.</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.2rem; margin-bottom: 2rem;">
        <button class="resource-btn" data-type="slides" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(230,126,34,0.5); border-radius: 1rem; padding: 1rem; font-size: 1rem; font-weight: 600; color: white; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <i class="fas fa-chalkboard-teacher"></i> Lecture Slides
        </button>
        <button class="resource-btn" data-type="notes" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(230,126,34,0.5); border-radius: 1rem; padding: 1rem; font-size: 1rem; font-weight: 600; color: white; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <i class="fas fa-file-alt"></i> Notes
        </button>
        <button class="resource-btn" data-type="videos" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(230,126,34,0.5); border-radius: 1rem; padding: 1rem; font-size: 1rem; font-weight: 600; color: white; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <i class="fas fa-video"></i> Video Lectures
        </button>
        <button class="resource-btn" data-type="books" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(230,126,34,0.5); border-radius: 1rem; padding: 1rem; font-size: 1rem; font-weight: 600; color: white; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <i class="fas fa-book"></i> Books
        </button>
        <button class="resource-btn" data-type="tutorials" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(230,126,34,0.5); border-radius: 1rem; padding: 1rem; font-size: 1rem; font-weight: 600; color: white; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <i class="fas fa-graduation-cap"></i> Tutorials
        </button>
        <button class="resource-btn" data-type="pyqs" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(230,126,34,0.5); border-radius: 1rem; padding: 1rem; font-size: 1rem; font-weight: 600; color: white; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <i class="fas fa-question-circle"></i> PYQs
        </button>
        <button class="resource-btn" data-type="instructor" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(230,126,34,0.5); border-radius: 1rem; padding: 1rem; font-size: 1rem; font-weight: 600; color: white; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <i class="fas fa-user-tie"></i> About Instructor
        </button>
      </div>
    </div>
  `;
}

// ==================== MAIN ====================
function openSemesterPage(semNum) {
  const data = semesterDetails[semNum];
  if (!data) return;
  const content = generateSemesterContent(semNum, data);
  showModal(`Semester ${semNum}: ${data.name}`, content);
}

// Generate 10 semester buttons
const grid = document.getElementById('semesterGrid');
for (let i = 1; i <= 10; i++) {
  const btn = document.createElement('div');
  btn.className = 'semester-btn';
  btn.innerHTML = `
    <i class="fas fa-calendar-alt"></i>
    <span class="sem-number">${i}</span>
    <span class="sem-label">Semester</span>
  `;
  btn.addEventListener('click', (function(num) { return function() { openSemesterPage(num); }; })(i));
  grid.appendChild(btn);
}

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 800) navLinks.classList.remove('show');
    });
  });
}

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✨ Message launched! Krishana will reply within 24 hours.');
    form.reset();
  });
}