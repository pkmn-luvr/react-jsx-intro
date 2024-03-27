const Person = ({name, age, hobbies}) => {
    const shortName = name.length > 8 ? name.substring(0, 6) :name;
    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{age >= 18 ? 'please go vote!' : 'you must be 18'}</h3>
            <p>Name: {shortName}</p>
            <p>Age: {age}</p>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Person name="Marissa" age={29} hobbies={['Reading', 'Gaming', 'Hiking', 'Gardening']} />
            <Person name="Catherine" age={18} hobbies={['Singing', 'Dancing', 'Guitar']} />
            <Person name="Korra" age={2} hobbies={['Playing', 'Running', 'Digging']} />
        </div> 
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));