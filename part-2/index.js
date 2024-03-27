const Tweet = ({username, name, date, message}) => (
   <div className="tweet">
        <h3>{name} (@{username})</h3>
        <p>{message}</p>
        <small>{date}</small>
    </div>
);

const App = () => (
    <div>
        <Tweet
            username="user1"
            name="First User"
            date="March 27, 2024"
            message="This is the first tweet!"
        />
        <Tweet
            username="user2"
            name="Second User"
            date="March 27, 2024"
            message="This is the second tweet!"
        />
        <Tweet
            username="user3"
            name="Third User"
            date="March 27, 2024"
            message="This is the third tweet!"
        />
    </div>
);


ReactDOM.render(<App />, document.getElementById('root'));
