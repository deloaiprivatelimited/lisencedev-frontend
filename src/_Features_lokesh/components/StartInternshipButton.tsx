const StartInternshipButton = () => {

  const startInternship = () => {

    const githubAuthURL =
      `https://github.com/login/oauth/authorize` +
      `?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}` +
      `&scope=repo`;

    window.location.href = githubAuthURL;

  };

  return (
    <button onClick={startInternship}>
      Start Internship
    </button>
  );
};

export default StartInternshipButton;