import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import { useRef } from 'react';
function App() {
  const editor = new EditorJS({
    holder: 'editorjs',
  });
  const instanceRef = useRef(null);

  return (
    <EditorJS instanceRef={(instance)=>(instanceRef.current = instance)} tools={{header: Header}} data={{}}></EditorJS>
  );
}
export default App;