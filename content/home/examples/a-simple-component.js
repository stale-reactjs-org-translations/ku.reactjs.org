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
>>>>>>> c7d858947f832d1ba4e78caebc391fd964ff6de6
