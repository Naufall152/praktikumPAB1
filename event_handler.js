// Pendekatan Functional Component
function CounterFunctional() {
  const [count, setCount] = React.useState(0);

  const tambah = () => setCount(count + 1);
  const kurang = () => setCount(count - 1);

  return (
    <div>
      <h2>Functional Component</h2>
      <h3>{count}</h3>
      <button onClick={kurang}>- 1</button>
      <button onClick={tambah}>+ 1</button>
    </div>
  );
}

// Pendekatan Class Component
class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  kurang = () => {
    this.setState({ count: this.state.count - 1 });
  };

  tambah = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <h3>{this.state.count}</h3>
        <button onClick={this.kurang}>- 1</button>
        <button onClick={this.tambah}>+ 1</button>
      </div>
    );
  }
}

// Komponen utama
function App() {
  return (
    <div>
      <CounterFunctional />
      <CounterClass />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
