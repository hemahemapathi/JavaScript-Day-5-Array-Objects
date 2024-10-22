var resumeData = {
  name: "Hemapathi",
  age: 22,
  email: "hemapathi0711@gmail.com",
  phone: "0123456789",
  address: "123 Main Street, Cityname",
  skills: ["JavaScript", "React", "Node.js", "MongoDB"],
  experience: [
      { company: "TechCorp", position: "Software Developer", years: 2 },
      { company: "Web Solutions", position: "Frontend Developer", years: 1 }
  ],
  education: {
      degree: "Bachelor of Science in Computer Science",
      university: "XYZ University",
      graduationYear: 2023
  },
  hobbies: ["Coding", "Reading", "Playing chess"]
};

// Populate data in HTML using different loops

// Using forEach for arrays like skills
resumeData.skills.forEach(skill => {
  let li = document.createElement('li');
  li.textContent = skill;
  document.getElementById('skills').appendChild(li);
});

// Using forEach for experience
resumeData.experience.forEach(job => {
  let li = document.createElement('li');
  li.textContent = `${job.position} at ${job.company} (${job.years} years)`;
  document.getElementById('experience').appendChild(li);
});

// Using for loop to iterate over skills
for (let i = 0; i < resumeData.skills.length; i++) {
  console.log(resumeData.skills[i]);  // Log to console or manipulate DOM as needed
}

// Using for...in loop to iterate over education object
for (let key in resumeData.education) {
  let p = document.createElement('p');
  p.textContent = `${key}: ${resumeData.education[key]}`;
  document.getElementById('education').appendChild(p);
}

// Using for...of loop for hobbies
for (let hobby of resumeData.hobbies) {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.getElementById('hobbies').appendChild(li);
}

// Directly populate basic info using for...in loop
for (let key in resumeData) {
  if (typeof resumeData[key] !== 'object') { // Skip arrays and objects
      let p = document.createElement('p');
      p.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${resumeData[key]}`;
      document.getElementById('basic-info').appendChild(p);
  }
}
