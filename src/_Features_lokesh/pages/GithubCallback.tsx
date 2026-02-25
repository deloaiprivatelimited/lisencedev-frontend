import { useEffect } from "react";

const GithubCallback = () => {

  useEffect(() => {

    const code =
      new URLSearchParams(window.location.search)
      .get("code");

    if(!code) return;

    fetch(`${import.meta.env.VITE_BACKEND_URL}/github/exchange`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({code})
    })
    .then(res => res.json())
    .then(data => {
      window.location.href = data.repo;
    });

  }, []);

  return <h2>Setting up your internship repo...</h2>;

};

export default GithubCallback;