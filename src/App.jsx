const App = () => {
  return (
    <div>
      <form>
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" name="confirm-password" id="confirm-password" />
      </form>
    </div>
  );
};

export default App;
