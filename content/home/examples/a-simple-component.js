class HelloMessage extends React.Component {
  render() {
<<<<<<< HEAD
    return (
      <div>
        سڵاو {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="میران" />,
  document.getElementById('hello-example')
);
=======
    return <div>Hello {this.props.name}</div>;
  }
}

root.render(<HelloMessage name="Taylor" />);
>>>>>>> c1c3d1db304adfa5446accb0312e60d515188414
