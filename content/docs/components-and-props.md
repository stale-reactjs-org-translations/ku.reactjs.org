---
id: components-and-props
title: کۆمپۆنێنت و پرۆپس
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

کۆمپۆنێنت یان بە کوردی "پێکهێنەر"ەکان ڕێگات ئەدەن ڕووکار دابەش بکەی بەسەر پارچەی سەربەخۆ، بەکارهێنراوە و بتوانی بەجیا بیریان لێ بکەیتەوە. ئەم پەڕەیە پێشەکیەکە بۆ بیرۆکەی کۆمپۆنێنت. ئەتوانی زانیاری زیاتر لە [وردەکاری APIی کۆمپۆنێنت لێرە](/docs/react-component.html) بببینیت.

وەکو بیرۆکە، کۆمپۆنێنت لە فەنکشنی جاڤاسکریپت ئەچن. تواناری وەرگرتنی تێخراوی (ئینپۆت)ی هەڕەمەکی و دروستکردنی دانەی ڕیئاکت React element کە لەسەر شاشە نیشاندراوێک پێناسە بکرێت پێیان.

فەنکشن و پۆلی کۆمپۆنێنت {#function-and-class-components}

ئاسانترین شێوازی پێناسەکردنی کۆمپۆنێنتێک نوسینی فەنکشنیکی جاڤاسکریپتە:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

ئەم فەنکشنە کۆمپۆنێنتێکی بەکاری ڕیئاکتە لەبەر ئەوەی تەنها "پرۆپ"/خاسیەتێک وەر ئەگرێ (پرۆپ کورتکراوەی پرۆپەرتیە تەبیعی) کە ئارگومێنتێکی بە داتاوە تێدایە و دانەیەک/ئەلەمێنتێکی ڕیئاکت دروست ئەکات. بەمانە ئەڵێین کۆمپۆنێنتی فەنکشنی چونکە هەر ئەوەیە فەنکشنێکی جاڤاسکریپتی ڕووتە.

ئەتوانی کلاس/پۆلێکی [ES6](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) بەکاربهێنی بۆ پێناسەکردنی کۆمپۆنێنتێک:

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

بە نیسبەت ڕیئاکت ئە دوانەی سەرەوە (کلاسەکە و فەنکشنەکە) یەک شتن.

<<<<<<< HEAD
پۆل/کلاسەکان هەندێ تایبەتمەندی تریان هەیە کە لە [بەشی داهاتوو](/docs/state-and-lifecycle.html) باسیان ئەکەین. بەڵام تا ئەو کاتە کۆمپۆنێنتی فەنکشنی بەکار ئەهێنین چونکە کورتترن.
=======
Function and Class components both have some additional features that we will discuss in the [next sections](/docs/state-and-lifecycle.html).
>>>>>>> 9e5a358cb24a665fc48615ae224f26a4f2191b32

## وێنەکردنی کۆمپۆنێنتێک {#rendering-a-component}

پێشتر تەنها ئەو یەکانەی ڕیئاکت هاتە بەردەممان کە بۆخۆیان تاگی DOMن وەک:

```js
const element = <div />;
```

بەڵام ئەکرێ یەکەکە خۆی شتێک بێ بەکارهێنەر دروستی کردبێت، وەک:

```js
const element = <Welcome name="Sara" />;
```

<<<<<<< HEAD
کاتێ ڕیئاکت چاوی بە یەکەیەک ئەکەوێ کە بەکارهێنەر دروستی کردبێ، خاسیەتەکان (ئەتریبویت)ی JSXەکە ئەگوازێتەوە بۆ کۆمپۆنێنتەکە وەک یەک ئۆبجێکت (تەنی جاڤاسکریپت) ئا بەمانە ئەوترێ "پرۆپ".
=======
When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object "props".
>>>>>>> 9e5a358cb24a665fc48615ae224f26a4f2191b32

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

1. بانگی `ReactDOM.render()` ئەکەین بە یەکەی `<Welcome name="Hero" />`.
2. ڕیئاک بانگی کۆمپۆنێنتی `Welcome` ئەکات بە `{name: 'Hero'}` پرۆپی name.
3. کۆمپۆنێنتی `Welcome` ئەم تاگە ئەگەڕێنێتەوە `<h1>Hello, Hero</h1>` وەک ئەنجامی کۆتایی.
4. ڕیئاکت خۆی DOM تازە ئەکاتەوە (تایبەتە بە ڕئیکات) کە ئەم تاگە وابێت `<h1>Hello, Hero</h1>`.

>**تێبینی:** هەمیشە با کۆمپۆنێنتەکانت بە پیتی گەورە/کەپیتاڵ دەست پێ بکەن.
>
>ڕیئاکت کۆمپۆنێنتێک بە پیتی بچوک دەست پێ بکات وای دا ئەنێت تاگێکی DOMە. بۆ نمونە `<div />` نمونەی دیڤ'ێکی HTMLە، بەڵام `<Welcome />` بریتیە لە کۆمپۆنێنتێک و پێویستی بەوەیە کە `Welcome` لە بوار/سکۆپ'دا ئامادە بێت.
>بۆ زانیاری زیاتر دەربارەی ئەم لۆجیکەی پشت ئەم عادەتە، تکایە [JSX بە قوڵی](/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized) بخوێنەوە.

## دانانی کۆمپۆنێنت {#composing-components}

کۆمپۆنێنتەکان ئەتوانن هێما بۆ کۆمپۆنێنتی تر بکەن لەکاتی دەرهاویشتندا. ئەمە وا ئەکات هەمان کۆمپۆنێنتکردن بەکار بهێنرێ لە هەموو ئاستێکی وردەکاریدا. دوگمەیەکە، فۆرمێک، دایەلۆگ بۆکسێک، شاشەیەک: لە ئاپەکانی ڕیئاکتدا، هەموو ئەمانە بە گشتی ئەکرێ وەک کۆمپۆنێنت پێناسە بکرێن.

بۆ نمونە ئەکرێ تەواوی ئاپەکە وەک کۆمپۆنێنتی `App` پێناسە بکەین کە `Welcome` چەن جارێک نیشان بدات، بەم شێوەیە:

```js{8-10}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Hero" />
      <Welcome name="Broosk" />
      <Welcome name="Goran" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

[](codepen://components-and-props/composing-components)

ئاساییە، ئاپی نوێی ڕیئاکت بریتی بێ لە تەنها کۆمپۆنێنتێک بەناوی `App` لە سەری سەرەوە. بەڵام ، ئەگەر ڕیئاکتت تێکەڵکرد لەگەڵ ئاپێکی حازدا، ئەکرێ لە ژێرەوە دەستپێ بکەیت بۆ نمونە لە دوگمەیەک`Button`ەوە دەست پێ بکەیت و هەنگاو هەنگاو تا بگەیتە ئاستی سەرەوەی پلەکانی ئاپەکەت. 

## دەرهێنانی کۆمپۆنێنت {#extracting-components}

مەترسە لەوەی کۆمپۆنێنتەکانت وردکەیتەوە بۆ کۆمپۆنێنتی بچوکتر.

بۆ نمونە کۆمپۆنێنتی`Comment` لەبەرچاوگرە:

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

پرۆپسی `author` (ئۆبجێک)، `text` (سترینگ)، و `date` (ڕێکەوت) وەر ئەگرێت، پێناسەی کۆمێنتێکی سەر سایتێکی تۆڕی کۆمەڵایەتی ئەکات.

ئەم کۆمپۆنێنتە کەمێ سەختە دەستکاری کردنی لەبەر ئەو لەناویەک دانانە، وە سەختیشە بەشەکانی بەکاربهێنرێتەوە. با هەندێ پێکهێنەری دەربهێنین.

یەکەم شت، `Avatar` دەرئەهێنین:

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

پێکهێنەری `Avatar` پێویست ناکات بزانێ کەوا لەناو کۆمپۆنێنتێکی وەک `Comment`دایە. لەبەر ئەوەشە پرۆپسەکەمان گۆڕی بۆ شتی گشتی تر: `user` نەک `author`.

ئێمە لامان باشە ناوی پرۆپسەکانت لە چاوی کۆمپۆنێنتەکەوە دابنێێت نەک لە چوارچێوەی بەکارهێنانەکەیدا ناوزەدیان بکەیت.

ئیتر ئەتوانین کۆمپۆنێنتی `Comment` کەمێک سادە بکەینەوە:

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

ئەنجا بەشی `UserInfo` دەر ئەهێنین وەک کۆمپۆنێنتێک کە بتوانێت `Avatar` لە تەنیشت ناوی بەکارهێنەرەکە دانێت:

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

ئیتر ئەمە ئاوا `Comment` زیاتر سادە ئەکاتەوە:

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

دەرهێنانی کۆمپۆنێنت لەوەیە وەک ئیشێکی سەخت بێتە بەرچاوت یەکەمجار، بەڵام کاتێک خەرمانێ کۆمپۆنێنت هەبێ بۆ ئەوەی ئەپێکی گەورەی پێ دروست بکەی دوایی ژیانت ئاسان ئەکات. یاسایەکی گشتی لەپێش چاوت بێ ئەوەیە گەر بەشێکی ڕووکارەکەت چەن جارێک بەکارهاتەوە
(`Button`, `Panel`, `Avatar`)، یاخوود هەر خۆی بۆخۆی ئاڵۆزە کەمێک (`App`, `FeedStory`, `Comment`)، ئیتر ئەوە کاندیدیکی چاکە ورد بکرێتەوە.

## پرۆپس نەگۆڕن {#props-are-read-only}

کاتێک کۆمپۆنێنتێک دروست ئەکەی [چ بە کلاس یان فەنکشن](#function-and-class-components)، نابێ بەهیچ شێوەیەک پرۆپسەکانی خۆی دەستکاری بکات. فەنکشنی کۆکردنەوەی `sum` لەبەرچاو گرە:

```js
function sum(a, b) {
  return a + b;
}
```

ئەم فەنکشنانە بە ["خاوێن"](https://en.wikipedia.org/wiki/Pure_function) ناو ئەبرێن چونکە "پێدراو" یان ئینپوتەکانیان دەستکاری ناکەن و هەمیشە هەمان نرخ ئەدەن بەدەستەوە بۆ هەمان پێدراو.

جیاواز لەمە، ئەم فەنکشنەی خوارەوە "ناخاوێن"ە چونکە پێدراوەکەی ئەگۆڕێت:

```js
function withdraw(account, amount) {
  account.total -= amount;
}
```

ڕیئاکت تا ڕادیەکی باش نەرمە بەڵام یەک یاسای گیری هەیە:

**هەموو کۆمپۆنێنتەکانی ڕیئاکت ئەبێ وەک فەنکشنی خاوێن هەڵسوکەوت لەگەڵ پرۆپسەکانیان بکەن**

بەدڵنیایەوە، ڕووکارەکانی پرۆگرامەکان جوڵاون ئەگۆڕین بەپێی کات. لە بەشی [بەشی داهاتوو](/docs/state-and-lifecycle.html)دا بابەتێکی تر ئەناسێنین بەناوی "ستەیت" یان دۆخ. ستیەت ڕێگا ئەدات کۆمپۆنێنتەکانی ڕیئاکت دەرکراوەکانیان بەدرێژایی کات بگۆڕن بەپێی کردارەکانی بەکارهێنەر، وەڵامە ڕایەڵەییەکان/نێتوێرک، یان هەرشتێکی تر، بەبێ ئەوەی یاساکەی سەرەوە بشکێنن.
