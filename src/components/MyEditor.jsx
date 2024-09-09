// import { useRef, useEffect } from 'react';
// import { Editor } from '@toast-ui/react-editor';
// import '@toast-ui/editor/dist/toastui-editor.css'; // Import the CSS file

// const ToastEditor = () => {
//   const editorRef = useRef(null);

//   useEffect(() => {
//     const savedContent = localStorage.getItem('editorContent');
//     if (savedContent) {
//       editorRef.current.getInstance().setMarkdown(savedContent);
//     }
//   }, []);

//   const saveContent = () => {
//     const editorInstance = editorRef.current.getInstance();
//     const markdownContent = editorInstance.getMarkdown();
//     const htmlContent = editorInstance.getHTML();

//     localStorage.setItem('editorContent', markdownContent);
//     localStorage.setItem('htmlContent', htmlContent);
    
//     console.log('Content saved:', markdownContent);
//   };

//   return (
//     <div>
//       <Editor
//         ref={editorRef}
//         initialValue="Hello, TOAST UI Editor!"
//         previewStyle="vertical"
//         height="400px"
//         initialEditType="markdown"
//         useCommandShortcut={true}
//       />
//       <button onClick={saveContent}>save</button>
//     </div>
//   );
// };

// export default ToastEditor;


