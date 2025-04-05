const problems = {
  1: {
    title: "No Poverty",
    content: `
    <p>Develop inclusive financial systems to empower underserved communities through:</p>
    <ul style="padding-left: 1.5rem; margin: 1rem 0;">
      <li>Digital micro-lending platforms</li>
      <li>Community savings networks</li>
      <li>Financial literacy mobile apps</li>
    </ul>
    <p><strong>Evaluation:</strong> Financial inclusion metrics and scalability potential</p>
  `,
  },
  2: {
    title: "Zero Hunger",
    content: `
    <p>Create solutions for sustainable food systems focusing on:</p>
    <ul style="padding-left: 1.5rem; margin: 1rem 0;">
      <li>Smart food distribution networks</li>
      <li>AI-powered waste reduction</li>
      <li>Nutrition tracking systems</li>
    </ul>
    <p><strong>Evaluation:</strong> Impact measurement and technological innovation</p>
  `,
  },
  3: {
    title: "Good Health",
    content: `
    <p>Design accessible healthcare solutions featuring:</p>
    <ul style="padding-left: 1.5rem; margin: 1rem 0;">
      <li>AI diagnostic tools</li>
      <li>Telemedicine platforms</li>
      <li>Vaccine distribution trackers</li>
    </ul>
    <p><strong>Evaluation:</strong> Healthcare accessibility improvements</p>
  `,
  },
  4: {
    title: "Quality Education",
    content: `
    <p>Develop innovative learning platforms with:</p>
    <ul style="padding-left: 1.5rem; margin: 1rem 0;">
      <li>Adaptive learning algorithms</li>
      <li>VR classroom experiences</li>
      <li>Skill verification systems</li>
    </ul>
    <p><strong>Evaluation:</strong> Educational outcomes and user engagement</p>
  `,
  },
  5: {
    title: "Gender Equality",
    content: `
    <p>Create tools for promoting gender equity through:</p>
    <ul style="padding-left: 1.5rem; margin: 1rem 0;">
      <li>Bias detection algorithms</li>
      <li>Mentorship networks</li>
      <li>Pay equity analyzers</li>
    </ul>
    <p><strong>Evaluation:</strong> Measurable equality metrics</p>
  `,
  },
  6: {
    title: "Clean Water",
    content: `
    <p>Innovate water management solutions including:</p>
    <ul style="padding-left: 1.5rem; margin: 1rem 0;">
      <li>Smart purification systems</li>
      <li>Leak detection sensors</li>
      <li>Community water mapping</li>
    </ul>
    <p><strong>Evaluation:</strong> Sustainability and scalability factors</p>
  `,
  },
  7: {
    title: "Reduce Inequality",
    content: `
    <p>Develop systems for economic inclusion featuring:</p>
    <ul style="padding-left: 1.5rem; margin: 1rem 0;">
      <li>Opportunity matching engines</li>
      <li>Bias-free hiring tools</li>
      <li>Community resource networks</li>
    </ul>
    <p><strong>Evaluation:</strong> Reduction in disparity metrics</p>
  `,
  },
  8: {
    title: "Industry & Innovation",
    content: `
    <p>Create sustainable industrial solutions with:</p>
    <ul style="padding-left: 1.5rem; margin: 1rem 0;">
      <li>Smart manufacturing systems</li>
      <li>Circular economy platforms</li>
      <li>AI-powered R&D tools</li>
    </ul>
    <p><strong>Evaluation:</strong> Innovation index and sustainability</p>
  `,
  },
  9: {
    title: "Climate Action",
    content: `
    <p>Design climate solutions focusing on:</p>
    <ul style="padding-left: 1.5rem; margin: 1rem 0;">
      <li>Carbon footprint trackers</li>
      <li>Renewable energy optimizers</li>
      <li>Disaster prediction systems</li>
    </ul>
    <p><strong>Evaluation:</strong> Environmental impact metrics</p>
  `,
  },
  10: {
    title: "Agro Solutions",
    content: `
    <p>Develop agricultural technologies including:</p>
    <ul style="padding-left: 1.5rem; margin: 1rem 0;">
      <li>Precision farming tools</li>
      <li>Crop health monitors</li>
      <li>Smart irrigation systems</li>
    </ul>
    <p><strong>Evaluation:</strong> Yield improvement and sustainability</p>
  `,
  },
  11: {
    title: "Clean Energy",
    content: `
    <p>Create renewable energy solutions with:</p>
    <ul style="padding-left: 1.5rem; margin: 1rem 0;">
      <li>Energy sharing platforms</li>
      <li>Smart grid optimizers</li>
      <li>Storage capacity enhancers</li>
    </ul>
    <p><strong>Evaluation:</strong> Energy efficiency metrics</p>
  `,
  },
  12: {
    title: "Student Innovation",
    content: `
      <p>Develop groundbreaking student-led solutions with:</p>
      <ul style="padding-left: 1.5rem; margin: 1rem 0;">
        <li>Prototype development platforms</li>
        <li>Interdisciplinary collaboration tools</li>
        <li>Scalable studentpreneur models</li>
      </ul>
      <p><strong>Evaluation:</strong> Innovation metrics & real-world impact</p>
    `,
  },

};


function showProblemDetail(id) {
  const problem = problems[id];
  document.getElementById("modal-title").textContent = problem.title;
  document.getElementById("modal-content").innerHTML = problem.content;
  document.getElementById("problem-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("problem-modal").style.display = "none";
}

// Updated Countdown Timer for April 23, 2025
const eventDate = new Date("April 23, 2025 09:00:00").getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = eventDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display results
  document.getElementById("days").innerHTML = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").innerHTML = Math.floor(hours)
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerHTML = Math.floor(minutes)
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerHTML = Math.floor(seconds)
    .toString()
    .padStart(2, "0");

  // If countdown is finished
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.querySelector(".registration-status").textContent =
      "EVENT STARTED";
  }
}, 1000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});