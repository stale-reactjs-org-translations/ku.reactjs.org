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
>>>>>>> 47adefd30c46f486428d8231a68e639d62f02c9e
