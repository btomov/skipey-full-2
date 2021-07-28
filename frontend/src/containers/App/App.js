import './App.css';
import Main from '../../components/Main/Main'
import Sidebar from '../../components/Sidebar/Sidebar'
import  _ from 'lodash';
import store from "../../store";

function App() {
  const { contacts, user, activeUserId  } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)}/>
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;
