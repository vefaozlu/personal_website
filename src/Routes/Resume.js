function Resume() {
  function redirect() {
    window.location.href = "pdf.pdf";
  }

  redirect();

  return (
    <div>
      <h1>Resume</h1>
      <a href="pdf.pdf" download>
        Download
      </a>
    </div>
  );
}

export default Resume;
