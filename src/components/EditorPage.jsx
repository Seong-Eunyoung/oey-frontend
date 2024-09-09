const EditorPage = () => {
  const htmlContent = localStorage.getItem('htmlContent');
  console.log(htmlContent);

  return (
    <div>
      <h1>Preview Page</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default EditorPage;

