const jobsContainer = document.getElementById('jobs');

const fetchJobs = async () => {
  const response = await fetch(
    'http://localhost:5000/api/jobs'
  );

  const result = await response.json();

  displayJobs(result.data);
};

const displayJobs = (jobs) => {
  jobsContainer.innerHTML = '';

  jobs.forEach((job) => {
    const div = document.createElement('div');

    div.className = 'job-card';

    div.innerHTML = `
      <h2>${job.title}</h2>

      <p><strong>Company:</strong> ${job.company}</p>

      <p><strong>Location:</strong> ${job.location}</p>

      <p><strong>Salary:</strong> ${job.salary}</p>

      <p>${job.description}</p>

      <p><strong>Skills:</strong> ${job.skills}</p>

      <a href="apply.html">
        <button>Apply Now</button>
      </a>
    `;

    jobsContainer.appendChild(div);
  });
};

fetchJobs();