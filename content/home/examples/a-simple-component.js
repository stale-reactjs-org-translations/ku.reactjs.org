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
>>>>>>> 4b68508440a985598571f78f60637b6dccdd5a1a
