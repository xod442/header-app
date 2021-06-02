import Header from './components/Header';
import Form from './components/Form';
import Spin from './components/Spinner';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



const App = () => {
  const wordtext = "Do I seem like a mad scientist to you, do I?";
  return (
    <div>
      <Header title="Wookieware.com"/>
      <Form words={wordtext} stuff="Copyright 2021"/>
      <Spin msg="Please wait, will ya?"/>
    </div>

  );
}

export default App;
