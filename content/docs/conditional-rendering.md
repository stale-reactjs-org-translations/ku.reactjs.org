---
id: conditional-rendering
title: ڕێنده‌ركردنی كۆندیشناڵ
permalink: docs/conditional-rendering.html
prev: handling-events.html
next: lists-and-keys.html
redirect_from:
  - "tips/false-in-jsx.html"
---

له‌ ڕیاكتدا، ده‌توانیت كۆمپۆنێنتێك دروست بكه‌یت كه‌ به‌و جۆره‌ مامه‌ڵه‌ بكات كه‌ تۆ ده‌ته‌وێت. پاشان، ده‌توانیت ته‌نها ئه‌و به‌شه‌ی ڕێنده‌ر بكه‌یت كه‌ خۆت ده‌ته‌وێت، به‌پێی سته‌یتی ئه‌پلیكه‌یشنه‌كه‌ت.

ڕێنده‌ركردنی كۆندیشنال له‌ ڕیاكتدا به‌ هه‌مان جۆری كۆندیشن كارده‌كات كه‌ له‌ جاڤاسجكریپتدا هه‌یه‌. ئۆپێره‌یته‌ره‌كانی جاڤاسكریپت به‌كاربهێنه‌ وه‌ك [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) یاخود [conditional operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) بۆ ئه‌وه‌ی هه‌ندێك ئیلیمێنت دروست بكه‌یت به‌ پشت به‌ستن به‌ سته‌یتی ئه‌پلیكه‌یشنه‌كه‌ و پاشان ڕیاكت مالپه‌ڕه‌كه‌ به‌پێی ویستی تۆ ئه‌پده‌یت ده‌كاته‌وه‌.

ته‌ماشای ئه‌و دوو كۆمپۆنێنته‌ بكه‌:

```js
function UserGreeting(props) {
  return <h1>به‌خێربێیته‌وه‌</h1>;
}

function GuestGreeting(props) {
  return <h1>تكایه‌ خۆت ناونووس بكه‌.</h1>;
}
```

كۆمپۆنێنتی `Greeting` دروست ده‌كه‌ین كه‌ یه‌كێك له‌و دوو كۆمپۆنێنته‌ی سه‌ره‌وه‌ پیشان ده‌دات به‌ پشت به‌ستن به‌ سته‌یتی ئه‌پلیكه‌یشنه‌كه‌مان:

```javascript{3-7,11,12}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // تاقیبكه‌ره‌وه‌ بیگۆڕیت بۆ isLoggedIn={true}
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

[**له‌ كۆدپێن تاقیبكه‌ره‌وه‌**](https://codepen.io/gaearon/pen/ZpVxNq?editors=0011)

ئه‌م نموونه‌یه‌ هه‌ر جارك نووسینێكی جیاواز پیشان ده‌دات به‌ پێی نرخی پرۆپی `isLoggedIn`.

### ئیلیمێنته‌كانی ڤاریه‌بڵ {#element-variables}

ده‌توانیت ڤاریه‌بڵ به‌كاربهێنیت تاوه‌كه‌ ئیلیمێنتی تیادا هه‌لبگریت. ئه‌مه‌ ده‌توانێت به‌پێی حاڵه‌ته‌كه‌ ڕێنده‌ری به‌شێكی كۆمپۆنێنته‌كه‌ بكات به‌بێ گۆڕینی هیچ به‌شێكی تر.

ته‌ماشای ئه‌و دوو كۆمپۆنێنته‌ بكه‌ كه‌ بۆ دوگمه‌ی Login و Logout به‌كاردێن:
```js
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
```
له‌م نموونه‌یه‌ی خواره‌وه‌دا، [كۆمپۆنێنتی سته‌یتدار](/docs/state-and-lifecycle.html#adding-local-state-to-a-class) درووست ده‌كه‌ین و ناوی ده‌نێین `LoginControl`.

لێره‌دا یه‌كێك له‌ `<LoginButton />` یاخود `<LogoutButton />` ڕێنده‌ر ده‌كات، به‌ پێی سته‌یته‌كه‌. هه‌روه‌ها `<Greeting />` ڕێنده‌ر ده‌كات كه‌ له‌ نموونه‌كه‌ی پێشووتریشدا به‌كارمان هێنا:

```javascript{20-25,29,30}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
```

[**له‌ كۆدپێن تاقیبكه‌ره‌وه‌**](https://codepen.io/gaearon/pen/QKzAgB?editors=0010)

هه‌رچه‌نده‌ شتێكی ئاساییه‌ كه‌ `if statement` به‌كاربهێنیت بۆ ڕێنده‌ركردنی كۆمپۆنێنته‌كان به‌پێی حاڵه‌ت، به‌ڵام هه‌ندێكجار باشتر وایه‌ سینتاكسی كورتتر به‌كاربهێنیت. چه‌ند ڕێگایه‌ك هه‌یه‌ بۆ نووسینی كۆندیشن به‌ ئینڵاین له‌ JSX دا، له‌ خواره‌وه‌ باسكراوه‌.

### If ی ئینڵاین و Logical && Operator

ده‌توانیت هه‌ر [ئێكسپرێشنێك بخه‌یته‌ ناو JSX](/docs/introducing-jsx.html#embedding-expressions-in-jsx) له‌ ڕێگه‌ی خستنییه‌ ناو كه‌وانه‌وه‌. ده‌توانیت ئۆپێره‌یته‌ری `&&` ش به‌كاربهێنیت. ده‌كرێت ئه‌مه‌ سوودێكی زۆری هه‌بێت بۆ به‌كارهێنانی ئیلیمێنتێك به‌ پشت به‌ستن به‌ حاڵه‌تێك.‌

```js{6-10}
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```

[**له‌ كۆدپێن تاقیبكه‌ره‌وه‌**](https://codepen.io/gaearon/pen/ozJddz?editors=0010)

ئه‌وه‌ی كردمان كارده‌كات له‌به‌رئه‌وه‌ی `true && expression` هه‌میشه‌ ده‌كاته‌ `expression`، هه‌روه‌ها `false && expression` هه‌میشه‌ ده‌كاته‌ `false`.

له‌به‌رئه‌وه‌، ئه‌گه‌ر كۆندیشنه‌كه‌ `true` بێت، ئه‌و ئیلیمێنته‌ی ڕاسته‌وخۆ دوای `&&` دێت، پیشان ده‌درێت. به‌ڵام ئه‌گه‌ر `false` بوو، ڕیاكت تێپه‌ڕی ده‌كات و هیچ ناگۆڕێت

### Inline If-Else with Conditional Operator {#inline-if-else-with-conditional-operator}

Another method for conditionally rendering elements inline is to use the JavaScript conditional operator [`condition ? true : false`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

In the example below, we use it to conditionally render a small block of text.

```javascript{5}
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

It can also be used for larger expressions although it is less obvious what's going on:

```js{5,7,9}
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
    </div>
  );
}
```

Just like in JavaScript, it is up to you to choose an appropriate style based on what you and your team consider more readable. Also remember that whenever conditions become too complex, it might be a good time to [extract a component](/docs/components-and-props.html#extracting-components).

### Preventing Component from Rendering {#preventing-component-from-rendering}

In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return `null` instead of its render output.

In the example below, the `<WarningBanner />` is rendered depending on the value of the prop called `warn`. If the value of the prop is `false`, then the component does not render:

```javascript{2-4,29}
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/Xjoqwm?editors=0010)

Returning `null` from a component's `render` method does not affect the firing of the component's lifecycle methods. For instance `componentDidUpdate` will still be called.
