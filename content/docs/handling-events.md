---
id: handling-events
title: مامه‌ڵه‌كردن له‌گه‌ڵ رووداوه‌كان
permalink: docs/handling-events.html
prev: state-and-lifecycle.html
next: conditional-rendering.html
redirect_from:
  - "docs/events-ko-KR.html"
---

<<<<<<< HEAD
مامه‌ڵه‌كردن له‌گه‌ڵ  رووداوه‌كان له‌ڕێی یه‌كه‌كانی رایكته‌وه‌ زۆر له‌ مامه‌ڵه‌كردنی رووداوه‌كان ده‌چیت كه‌ له‌ڕێی یه‌كه‌كانی دۆم-ه‌وه‌ ده‌كرێت. لێره‌دا چه‌ند جیاوازییه‌كی دارسته‌یی (syntax) هه‌یه‌:
=======
Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

* رووداوه‌كانی ریاكتCamelCase ناوده‌نرێن، نه‌وه‌ك lowercase.
* به‌هۆی JSX ه‌وه‌، له‌ جیاتی سترینگ، فه‌نكشنێك تێده‌په‌ڕێنی وه‌ك مامه‌ڵه‌كه‌ری رووداوه‌كه‌ (event handler).

بۆ نموونه‌، HTML ه‌كه‌: 

```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

كه‌مێك جیاوازه‌ له‌ ریاكتدا:

```js{1}
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

<<<<<<< HEAD
جیاوازییه‌كی تر ئه‌وه‌یه‌ كه‌ ناتوانیت `false` بگه‌ڕێنیته‌وه‌ بۆ رێگریكردن له‌ ره‌فتاری بنه‌ڕه‌تی له‌ ریاكتدا.
پێویسته‌ به‌ جیا `preventDefault` بانگ بكه‌یت. بۆ نموونه‌، له‌ HTML ی روتدا، بۆ رگریكردن له‌ ره‌فتاری بنه‌ڕه‌تی به‌سته‌ری كردنه‌وه‌ی په‌ڕه‌یه‌كی نوێ، ده‌توانیت ئه‌مه‌ بنووسیت:
=======
Another difference is that you cannot return `false` to prevent default behavior in React. You must call `preventDefault` explicitly. For example, with plain HTML, to prevent the default form behavior of submitting, you can write:
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

```html
<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>
```

له‌ ریاكتدا، ده‌كرێت به‌م شێوازه‌ی خواره‌وه‌ بێت:

```js{3}
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

<<<<<<< HEAD
لێره‌دا، `e` رووداوێكی دروستكراوه‌. ریاكت ئه‌م رووداوه‌ دروستكراوانه‌ به‌ پێی [W3C spec](https://www.w3.org/TR/DOM-Level-3-Events/) پێناسه‌ ده‌كات. هه‌ربۆیه‌، پێویست ناكات خه‌می كێشه‌ی سازان له‌گه‌ڵ گه‌ڕۆكی جیاوازدا، بخۆی. سه‌یری رێبه‌ری سه‌رچاوه‌ی [`SyntheticEvent`](/docs/events.html) بكه بۆ زانیاری زیاتر.

له‌كاتی به‌كارهێنانی ریاكتدا، به‌ شێوه‌یه‌كی گشتی پێویستت به‌وه‌ نابێت كه‌ بانگی `addEventListener` بكه‌یت بۆ زیادكردنی گوێگر بۆ یه‌كه‌یه‌كی دۆم پاش دروستكردنی. له‌ جیاتی ئه‌وه‌، ته‌نها له‌ كاتی رێنده‌ری سه‌ره‌تایی یه‌كه‌كه‌، گوێگرێگی بۆ دابینبكه‌. 


كاتێك پێناسه‌ی كۆمپۆنێنتێك ده‌كه‌یت له‌ رێگه‌ی پۆلی [ES6] (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)، پاتێرنێكی هاوبه‌ش هه‌یه‌ بۆ مامه‌ڵه‌كه‌رێكی روداو بۆ وه‌وه‌ی ببێته‌ مێسۆدێك بۆ پۆله‌كه‌. بۆ نموونه‌، ئه‌م زامنه‌ `Toggle`، رێنده‌ری دوگمه‌یه‌ك ده‌كات كه‌ ڕێگه‌ به‌ به‌كارهێنه‌ر ده‌دات هه‌ڵبژارده‌ی "ON" یاخود "OFF" هه‌ڵبژێرێت:
=======
Here, `e` is a synthetic event. React defines these synthetic events according to the [W3C spec](https://www.w3.org/TR/DOM-Level-3-Events/), so you don't need to worry about cross-browser compatibility. React events do not work exactly the same as native events. See the [`SyntheticEvent`](/docs/events.html) reference guide to learn more.

When using React, you generally don't need to call `addEventListener` to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28


```js{6,7,10-14,18}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

[**له‌ كۆدپێن تاقیبكه‌ره‌وه‌**](https://codepen.io/gaearon/pen/xEmzGg?editors=0010)

ده‌بێ وریابیت سه‌باره‌ت به‌ مانای `this` له‌ كوڵبه‌كی JSX دا. له‌ جاڤاسكریپتدا، كڵاس و مێسود له‌ بنه‌ڕه‌تدا به‌یه‌كه‌ نابه‌سترێنه‌وه‌ [bound](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind). 

ده‌بێت وریای مانای `this` بیت له‌ كۆڵبه‌كی JSX دا. له‌ جاڤاسكریپتدا، كڵاس و مێسۆد له‌ بناغه‌وه‌ پێكه‌وه‌ نه‌به‌ستراونه‌ته‌وه‌.  ئه‌گه‌ر بیرتچوو `this.handleClick` و تێه‌په‌ڕێنی بۆ `onClick`، `this` پێناسه‌نه‌كراو ده‌بێت له‌ كاتی بانگكردنی فه‌نكشنه‌كه‌دا. 


ئه‌مه‌ ره‌فتارێكی تایبه‌ت به‌ ریاكت نییه‌ به‌ڵكوو به‌شێكه‌ له‌ [شێوازی كاركردنی فه‌نكشن له‌ جاڤاسكریپتدا] (https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/). به‌ گشتی ئه‌گه‌ر ئاماژه‌ به‌ مێسۆدێك بكه‌یت به‌ بێ به‌كارهێنانی `()` له‌ كۆتایی مێسۆده‌كه‌دا وه‌ك `onClick={this.handleClick}`، ئه‌وا ده‌بێت ئه‌و مێسۆده‌ ببه‌ستیته‌وه‌. 


ئه‌گه‌ر وه‌ڕه‌ز ده‌بێت به‌ بانگكردنی `bind`، دوو رێگای تر هه‌یه‌ كه‌ ده‌توانیت به‌كاریان بهێنیت. ئه‌گه‌ر رسته‌كاری  [public class fields syntax](https://babeljs.io/docs/plugins/transform-class-properties/) به‌كارده‌هێنیت، ئه‌وا ده‌توانیت فیڵدی كڵاس به‌كاربێنی بۆ ئه‌وه‌ی به‌ شێوازێكی دروست كۆڵبه‌كه‌كان ببه‌ستیته‌وه‌:


```js{2-6}
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

ئه‌م رسته‌كاره‌ له‌ (ئه‌پێكی ریاكت دروستبكه‌) (https://github.com/facebookincubator/create-react-app) دا بنه‌ڕه‌تییه‌. 


ئه‌گه‌ر  رسته‌كاری فیڵدی كڵاس به‌كارناهێنیت، ده‌توانی فه‌نكشنێكی تیر-ئاسا [arrow function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) له‌ كوڵبه‌كه‌كه‌دا به‌كاربهێنیت:

```js{7-9}
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

كێشه‌ی ئه‌م رسته‌كاره‌ ئه‌وه‌یه‌ كه‌ هه‌رجارێك `LoggingButton` رێنده‌ر ده‌بێت، كۆڵبه‌كێكی جیاواز دروست ده‌بێت. له‌ زۆربه‌ی كه‌یسه‌كاندا، ئه‌مه‌ كێشه‌ی نییه‌. به‌ڵام، ئه‌گه‌ر ئه‌م كوڵبه‌كه‌ وه‌كوو پرۆپێك تێپه‌ڕێندرێت بۆ كۆمپۆنێنته‌كانی خوار خۆی، ئه‌و كۆمپۆنێنتانه‌ له‌وانه‌ رێنده‌رێكی دووباره‌و زیاده‌ بكه‌ن. به‌ گشتی ئێمه‌ هانی به‌ستنه‌وه‌ له‌ كۆنستراكته‌ر یاخود به‌كارهێنانی رسته‌كار فیڵدی كڵاس ده‌ده‌ین له‌به‌ر دووركه‌وتنه‌وه‌ له‌ كێشه‌ی كارامه‌یی هاوشێوه‌. 


## تێپه‌ڕاندنی ئارگیومێنت بۆ مامه‌ڵه‌كه‌ری رووداوه‌كان Event Handlers  {#passing-arguments-to-event-handlers}

<<<<<<< HEAD
له‌ ناو ئه‌ڵقه‌یه‌كدا loop، تێپه‌ڕاندنی پارامیته‌رێكی زیاده‌ بۆ مامه‌ڵه‌كه‌ری رووداو، شتێكی باوه‌. بۆ نموونه‌، ئه‌گه‌ر `id` بنواڕه‌ی ریزێك بێت، هه‌ریه‌ك له‌مانه‌ی خواره‌وه‌ ده‌توانرێت به‌كاربێت:
=======
Inside a loop, it is common to want to pass an extra parameter to an event handler. For example, if `id` is the row ID, either of the following would work:
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```


ئه‌م دوو دێڕه‌ی سه‌ره‌وه‌ یه‌كسانن و [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) و [`Function.prototype.bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) به‌كاردێنن. 

له‌هه‌ردوو باردا، ئارگیومێنی `e` كه‌ نوێنه‌ری رووداوه‌كه‌ی ریاكته‌، وه‌كوو دووه‌م ئارگومێنت تێده‌په‌ڕێنرێت دوای ID. له‌ فه‌نكشنی تیر-ئاسادا، پێویسته‌ به‌ ئاشكرا تێیپه‌ڕێنین، به‌ڵام له‌ كاتی به‌كارهێنانی `bind` دا، هه‌رچی ئارگومێنتی تره‌ به‌ شێوازێكی خۆكار فۆروه‌رد ده‌كرێنه‌وه‌. 

