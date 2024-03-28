const Alert = ({ type = 'primary', children }) => (
    <div className={`alert alert-${type}`} role="alert">
      {children}
    </div>
  );
  
  const Button = ({ type = 'primary', children, onClick }) => (
    <button type="button" className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
  
  const App = () => (
    <div>
      <Alert type="danger">I know it's tempting....but DON'T click the button of DOOM!!</Alert>
      <Button type="danger" onClick={() => alert("You'll regret this!")}>
        Button of DOOM!!!!
      </Button>
    </div>
  );
  
  ReactDOM.render(<App />, document.getElementById('root'));
  