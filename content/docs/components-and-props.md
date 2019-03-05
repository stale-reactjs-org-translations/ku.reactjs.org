---
id: components-and-props
title: کۆمپۆنێنت و پرۆپەرتی
permalink: docs/components-and-props.html
redirect_from:
  - "docs/reusable-components.html"
  - "docs/reusable-components-zh-CN.html"
  - "docs/transferring-props.html"
  - "docs/transferring-props-it-IT.html"
  - "docs/transferring-props-ja-JP.html"
  - "docs/transferring-props-ko-KR.html"
  - "docs/transferring-props-zh-CN.html"
  - "tips/props-in-getInitialState-as-anti-pattern.html"
  - "tips/communicate-between-components.html"
prev: rendering-elements.html
next: state-and-lifecycle.html
---

کۆمپۆنێنت یان بە کوردی "یەکە"کان ڕێگات ئەدەن ڕووکار دابەش بکەی بەسەر پارچەی سەربەخۆ، بەکارهێنراوە و بتوانی بەجیا بیریان لێ بکەیتەوە. ئەم پەڕەیە پێشەکیەکە بۆ بیرۆکەی کۆمپۆنێنت. ئەتوانی زانیاری زیاتر لە [وردەکاری APIی کۆمپۆنێنت لێرە](/docs/react-component.html) بببینیت.

وەکو بیرۆکە، کۆمپۆنێنت لە فەنکشنی جاڤاسکریپت ئەچن. تواناری وەرگرتنی تێخراوی (ئینپۆت)ی هەڕەمەکی و دروستکردنی دانەی ڕیئاکت React element کە لەسەر شاشە نیشاندراوێک پێناسە بکرێت پێیان.

فەنکشن و پۆلی کۆمپۆنێنت {#function-and-class-components}

ئاسانترین شێوازی پێناسەکردنی کۆمپۆنێنتێک نوسینی فەنکشنیکی جاڤاسکریپتە:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

ئەم فەنکشنە کۆمپۆنێنتێکی بەکاری ڕیئاکتە لەبەر ئەوەی تەنها "پرۆپ"/خاسیەتێک وەر ئەگرێ (پرۆپ کورتکراوەی پرۆپەرتیە تەبیعی) کە ئارگومێنتێکە بە داتاوە و دانەیەکی ڕیئاکت دروست ئەکات. بەمانە ئەڵێین کۆمپۆنێنتی فەنکشنی چونکە هەر ئەوەیە فەنکشنێکی جاڤاسکریپتی ڕووتە.

ئەتوانی کلاس/پۆلێکی [ES6](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) بەکاربهێنی بۆ پێناسەکردنی کۆمپۆنێنتێک:

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

بە نیسبەت ڕیئاکت ئە دوانەی سەرەوە (کلاسەکە و فەنکشنەکە) یەک شتن.

پۆل/کلاسەکان هەندێ تایبەتمەندی تریان هەیە کە لە [بەشی داهاتوو](/docs/state-and-lifecycle.html) باسیان ئەکەین. بەڵام تا ئەو کاتە کۆمپۆنێنتی فەنکشنی بەکار ئەهێنین چونکە کورتترن.

## وێنەکردنی کۆمپۆنێنتێک {#rendering-a-component}

پێشتر تەنها ئەو یەکانەی ڕیئاکت هاتە بەردەممان کە بۆخۆیان تاگی DOMن وەک:

```js
const element = <div />;
```

بەڵام ئەکرێ یەکەکە خۆی شتێک بێ بەکارهێنەر دروستی کردبێت، وەک:

```js
const element = <Welcome name="Sara" />;
```

کاتێ ڕیئاکت چاوی بە یەکەیەک ئەکەوێ کە بەکارهێنەر دروستی کردبێ، خاسیەتەکان (ئەتریبویت)ی JSXەکە ئەگوازێتەوە بۆ کۆمپۆنێنتەکە وەک یەک ئۆبجێکت (تەنی جاڤاسکریپت) ئا بەمانە ئەوترێ "پرۆپ".

بۆ نمونە، ئەم کۆدە لەسەر پەڕەکە "سڵاو هێرۆ" وێنا ئەکات:

```js{1,5}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Hero" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

[](codepen://components-and-props/rendering-a-component)

کەواتە پوختەی ئەم نمونەیە چی بوو:

1. بانگی `ReactDOM.render()` ئەکەین بە یەکەی `<Welcome name="Sara" />`.
2. ڕیئاک بانگی کۆمپۆنێنتی `Welcome` ئەکات بە `{name: 'Hero'}` پرۆپی name.
3. کۆمپۆنێنتی `Welcome` ئەم تاگە ئەگەڕێنێتەوە `<h1>Hello, Hero</h1>` وەک ئەنجامی کۆتایی.
4. ڕیئاکت خۆی DOM تازە ئەکاتەوە (تایبەتە بە ڕئیکات) کە ئەم تاگە وابێت `<h1>Hello, Hero</h1>`.

>**تێبینی:** هەمیشە با کۆمپۆنێنتەکانت بە پیتی گەورە/کەپیتاڵ دەست پێ بکەن.
>
>React treats components starting with lowercase letters as DOM tags. For example, `<div />` represents an HTML div tag, but `<Welcome />` represents a component and requires `Welcome` to be in scope.
>
>To learn more about the reasoning behind this convention, please read [JSX In Depth](/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized).

## Composing Components {#composing-components}

Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

For example, we can create an `App` component that renders `Welcome` many times:

```js{8-10}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

[](codepen://components-and-props/composing-components)

Typically, new React apps have a single `App` component at the very top. However, if you integrate React into an existing app, you might start bottom-up with a small component like `Button` and gradually work your way to the top of the view hierarchy.

## Extracting Components {#extracting-components}

Don't be afraid to split components into smaller components.

For example, consider this `Comment` component:

```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

[](codepen://components-and-props/extracting-components)

It accepts `author` (an object), `text` (a string), and `date` (a date) as props, and describes a comment on a social media website.

This component can be tricky to change because of all the nesting, and it is also hard to reuse individual parts of it. Let's extract a few components from it.

First, we will extract `Avatar`:

```js{3-6}
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

The `Avatar` doesn't need to know that it is being rendered inside a `Comment`. This is why we have given its prop a more generic name: `user` rather than `author`.

We recommend naming props from the component's own point of view rather than the context in which it is being used.

We can now simplify `Comment` a tiny bit:

```js{5}
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

Next, we will extract a `UserInfo` component that renders an `Avatar` next to the user's name:

```js{3-8}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```

This lets us simplify `Comment` even further:

```js{4}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

[](codepen://components-and-props/extracting-components-continued)

Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (`Button`, `Panel`, `Avatar`), or is complex enough on its own (`App`, `FeedStory`, `Comment`), it is a good candidate to be a reusable component.

## Props are Read-Only {#props-are-read-only}

Whether you declare a component [as a function or a class](#function-and-class-components), it must never modify its own props. Consider this `sum` function:

```js
function sum(a, b) {
  return a + b;
}
```

Such functions are called ["pure"](https://en.wikipedia.org/wiki/Pure_function) because they do not attempt to change their inputs, and always return the same result for the same inputs.

In contrast, this function is impure because it changes its own input:

```js
function withdraw(account, amount) {
  account.total -= amount;
}
```

React is pretty flexible but it has a single strict rule:

**All React components must act like pure functions with respect to their props.**

Of course, application UIs are dynamic and change over time. In the [next section](/docs/state-and-lifecycle.html), we will introduce a new concept of "state". State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.
