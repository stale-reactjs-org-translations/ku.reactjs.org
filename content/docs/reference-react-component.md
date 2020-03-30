---
id: react-component
title: ڕیاکت کۆمپۆنێنت
layout: docs
category: Reference
permalink: docs/react-component.html
redirect_from:
  - "docs/component-api.html"
  - "docs/component-specs.html"
  - "docs/component-specs-ko-KR.html"
  - "docs/component-specs-zh-CN.html"
  - "tips/UNSAFE_componentWillReceiveProps-not-triggered-after-mounting.html"
  - "tips/dom-event-listeners.html"
  - "tips/initial-ajax.html"
  - "tips/use-react-with-other-libraries.html"
---

ئەم پەڕەيیە وردەکاری تێدایە دەربارەی سەرچاوەکانی API بۆ ڕیاکت کۆمپۆنێنت کە بە شێوەی کڵاس ناسێندرابێت. بۆ ئەو مەبەستە پێویستە زانیاریت هەبێ لەسەر بەشە بنچینەییەکانی ڕیاکت، وەک  [Components and Props](/docs/components-and-props.html), هەروەها  [State and Lifecycle](/docs/state-and-lifecycle.html). گەر زانیاریت لەسەریان نییە، لە پێشدا ئەوانە بخوێنەرەوە.

## پێشەکی {#overview}

ڕیاکت ڕێت پێدەدات کۆمپۆنێنت بناسێنی بە شێوەی کڵاس یاخود فەکشن،  ئەو کۆمپۆنێنتانەی کە بەشێوەی کڵاس ناسێنراون لە ئێستادا تایبەتمانیان زیاترە کە بەوردی باسی لێوە کراوە لەم پەڕەیەدا. بۆ ناساندنی کڵاس کۆمپۆنێنتێکی ڕیاکت پێویستە , `React.Component` بۆ زیاد بکەیت :

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

تاکە میسۆدێک کە پێویستە لە بەشە کڵاسەکانی  `React.Component` هەبێت پێی دەوترێت  [`render()`](#render). هەموو میسۆدەکانی تر کە لەم پەڕەیەدا باسیان لێوە دەکرێت ئارازومەندانەن.

**بەشیوەیەکی سەرەکی دژی دروست کردنی کڵاس کۆمپۆنێنتی بنچینەی خۆیین.** لە کۆمپۆێنتەکانی ڕیاکتدا، , [کۆد بەکارهێنانەوە بە شیوەیەکی بچینەیی بەدەست هێنراوە لەڕێی کۆمپۆزیشنەوە نەک بە شێوەی ئینهێرینتانس](/docs/composition-vs-inheritance.html).

>تێبینی:
>
>ڕیاکت زۆریت لێناکات کە ڕستە کاری کڵاس  ES6  بەکاربێنیت. گەر مەبەستە لەوە دوورکەویتەوە, لەوانەیە پێویست بکات مۆدڵی   `create-react-class` بەکاربێنیت یان لەجیاتی ئەوە شتێکی هاوشێوە بەڵام تایبەت بەخۆت . سەیرێکی [بەکارهێنانی ڕیاکت بەبێ ES6](/docs/react-without-es6.html)  بکە بۆ زیاتر فێربوون.

### سوڕی ژیانی کۆمپۆنێنتێک{#the-component-lifecycle}

هەر کۆمپۆنێنتێک چەند جۆرێک میسۆدی "سووڕی ژیانی" هەیە کە دەتوانی ئۆڤەر ڕادیان بکەیت بۆ ڕەن کردنی کۆدەکەو لە کاتێکی تایبەتدا لە پرۆسێسدا. **، دەتوانی  [ئەم وێنە ڕوونکردنەوەیەی سوڕی ژیانە ](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) بەکار بێنیت  بۆ تێگەیشتن.** لەم لیستەی خوارەوەدا, میسۆدەکانی سوڕی ژیان کە زۆر بەکاردێن  **bold** کراون ئەوانی تریش بوونیا هەیە بۆ دۆخە دەگمەنەکان.

#### Mounting {#mounting}

ئەم میسۆدانە بانگ دەرکرێن بەم ڕێکخستنەی خوارەوە کاتێک نموونەیەک لە کۆمپۆنێنت دروست دەکرێت وە دەخرێتە ناو دۆم:

- [**`constructor()`**](#constructor)
- [`static getDerivedStateFromProps()`](#static-getderivedstatefromprops)
- [**`render()`**](#render)
- [**`componentDidMount()`**](#componentdidmount)

>تێبینی:
>
>ئەم میسۆدانە ڕەچاو دەکرێن وەکو بەجێماو وە پێویست دەکات [دوورکەویتەوە لێیان ](/blog/2018/03/27/update-on-async-rendering.html)  لە کۆدە تازەکاندا:
>
>- [`UNSAFE_componentWillMount()`](#unsafe_componentwillmount)

#### Updating {#updating}

ئەپدەیتێک لەوانەیە ببێت بە هۆکاری گۆڕانکاری لە پرۆپس و ستەتدا. ئەم میسۆدانە بانگ دەرکرێن بەم ڕێکخستنەی خوارەوە کاتێک کۆمپۆنێنتێک ڕێندەر دەکرێتەوە:

- [`static getDerivedStateFromProps()`](#static-getderivedstatefromprops)
- [`shouldComponentUpdate()`](#shouldcomponentupdate)
- [**`render()`**](#render)
- [`getSnapshotBeforeUpdate()`](#getsnapshotbeforeupdate)
- [**`componentDidUpdate()`**](#componentdidupdate)

>تێبینی:
>
>ئەم میسۆدانە ڕەچاو دەکرێن وەکو بەجێماو وە پێویست دەکات  [دوورکەویتەوە لێیان ](/blog/2018/03/27/update-on-async-rendering.html) لە کۆدە تازەکاندا:
>
>- [`UNSAFE_componentWillUpdate()`](#unsafe_componentwillupdate)
>- [`UNSAFE_componentWillReceiveProps()`](#unsafe_componentwillreceiveprops)

#### Unmounting {#unmounting}

ئەم میسۆدە بانگ دەرکرێت کاتێک کۆمپۆنێنتێک دەسڕێتەوە لەلایەن دۆمەوە:

- [**`componentWillUnmount()`**](#componentwillunmount)

#### Error Handling {#error-handling}

ئەم میسۆدانە بانگ دەرکرێن کاتێک ئیرەرێک هەیە لەکاتی ڕێندەر کردن، لە ناو سوڕی ژیانی میسۆد، یان لەناو کۆستڕەکتەری هەرکام لە چایەڵد کۆمپۆنێنتێک.

- [`static getDerivedStateFromError()`](#static-getderivedstatefromerror)
- [`componentDidCatch()`](#componentdidcatch)

### Other APIs {#other-apis}

هەر کۆمپۆنێنتێک هەندێ API تر بەردەست دەکەن:

  - [`setState()`](#setstate)
  - [`forceUpdate()`](#forceupdate)

### Class Properties {#class-properties}

  - [`defaultProps`](#defaultprops)
  - [`displayName`](#displayname)

### Instance Properties {#instance-properties}

  - [`props`](#props)
  - [`state`](#state)

* * *

## سەرچاوە {#reference}

### میسۆدەکانی سوڕی ژیان زۆر بەکارهاتووەکان {#commonly-used-lifecycle-methods}

میسۆدەکانی ئەم بەشە باسی زۆربەی بەکارهێنانەکان دەکات کە ڕووبەڕی دەبیتەوە لە دروست کردنی ڕیاکت کۆمپۆنێنت. **بۆ بینینی سەرچاوە سەردانی [ئەم دایەگرامەی سوڕی ژیان ](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) بکە.**

### `render()` {#render}

```javascript
render()
```

میسۆدی `render()` تاکە میسۆدی پێویستە کە لە کڵاس کۆمپۆنێنت هەبێت.

کاتێک بانگ کرا , پێویستە ڕەچاوی  `this.props` وە `this.state` بکات وە یەکێک لەم جۆرانەی خوارەوە بگەڕێنێتەوە:

- **•	ئیلیمێنتەکانی ڕیاکت.** بەگشتی دروستدەبن بەهۆی [JSX](/docs/introducing-jsx.html). بۆ نموونە , `<div />` وە  `<MyComponent />` ڕیاکت ئیلیمێنتن کە ڕێنوێنی ڕیاکت دەکەن بۆ ڕێندەر کردنی نۆدێک لە دۆم, یاخود کۆمپۆنێنتێک کە بەکاربەر ناساندبێتی بەجیا.
- **•	ئەڕەیەکان و فراگمێنتەکان.** . ڕێت پێدەدەن بە گەڕاندنەوەی زیاتر لە دانەیەک ئیلیمێنت لە ڕێندەرەوە. سەیری دۆکۆمێنتەکە بکە لەسەر  [fragments](/docs/fragments.html) بۆ وردەکاری زیاتر.
- **•	پۆڕتاڵەکان**. ڕێت پێدەدەن بە گەڕاندنەوەی چیڵدرین لەناو دۆمە بەشە ترییەکی جیاوازدا. سەیری دۆکۆمێنتەکە بکە لەسەر [portals](/docs/portals.html) بۆ وردەکاری زیاتر.
- **•	سترینگ و ژمارەکان.** ئەمانە ڕێندەر دەکرێن وەکو نۆدی تێکست لە دۆمدا.
- **•	بووڵیەنس یان  نەڵ**. هیچ ڕێندەر ناکەن. (بە زۆری بوونیان هەیە بۆ پاڵپشتی لە `return test && <Child />`, کاتێک  `test` بووڵیەنە)

`render()` میسۆد پێویستە کامڵ بێت, واتا گۆڕان کاری دروست نەکات لە ستەتی کۆمپۆنێنتەکە، هەمان ئەنجام ئەگەڕینێتەوە هەرجارێ بەکارهات، وە بە ڕاستەوخۆی کار لەگەڵ وێبگەڕ ناکات.

گەر دەتەوێ کار لەگەڵ وێبگەڕ بکات ئیشەکانت لە  `componentDidMount()` یان لە ناو  میسۆدەکانی سوڕی ژیان ئەنجام بدە. `render()`  یان لە ناو  میسۆدەکانی سوڕی ژیان ئەنجام بدە.

> تێبینی
>
> `render()` بانگ ناکرێت ئەگەر  [`shouldComponentUpdate()`](#shouldcomponentupdate) بیگەڕێنێتەوە false.

* * *

### `constructor()` {#constructor}

```javascript
constructor(props)
```

**ئەگەر نرخپێیان ناکەیت لە ستەت وە میسۆدەکان بایند ناکەیت ئەوا پێویست ناکات کۆنستڕەکتەرەکە بۆ ڕیاکت کۆمپۆنێنتەکە دانێیت.**

کۆنستڕەکتەر بۆ ڕیاکت کۆمپۆنێنت بانگ دەکرێت پێش ئەوەی ماونتد بکرێت. کاتێک کۆنستڕەکتەر دەلکێنی بە  `React.Component` بەشە کڵاسەوە, پێویست ئەکات  `super(props)` ) بانگ کەیت پێش هەموو شتێک. گەر نا  , `this.props` نەناسراو دەبێت لە ناو کۆنسترەکتەرەکە, کە دەبێتە هۆی دروست بوونی کەلێن.

بەگشتی کۆنستڕەکتەرەکانی ڕیاکت بۆ دوو مەبەست بەکاردێن:

* •	نرخپێیان بۆ [local state](/docs/state-and-lifecycle.html) بە ئاڕاستە کردنی ئۆبجێکتێک بۆ  `this.state`.
* •	بایند کردنی میسۆد [event handler](/docs/handling-events.html).

 **پێویست ناکات بانگی  `setState()`** بکەیت لە ناو  `constructor()`. لە جیاتی ئەوە ئەگەر کۆمپۆنێنتەکە پیویستی کرد لۆکاڵ ستەت بەکاربهێنێت, **ئەوا ئاڕاستەی نرخپێیانی ستەتەکە بکە بۆ `this.state`** ڕاستەوخۆ لە کۆنستڕەکتەرەکە:

```js
constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```

کۆنستڕەکتەر تاکە شوێنە کە  `this.state` ئاڕاستە دەکرێت بە ڕاستەوخۆی.  لە ناو هەموو میسۆدەکانی تر پێویست دەکات  `this.setState()` بەکاربێنیت.

 دورکەوەرەوە لە دروستکردنی کاریگەری لاوەکی لە ناو کۆنتستڕەکتەر . لەجیاتی ئەوە بۆ ئەم دۆخانە ,  `componentDidMount()` بەکاربێنە.

>تێبینی
>
>**دورکەوەرەوە لە کۆپی کردنی پرۆپس بۆ ستەت ! ئەمە هەڵەیەکی بەربڵاوە:**
>
>```js
>constructor(props) {
>  super(props);
>  // Don't do this!
>  this.state = { color: props.color };
>}
>```
>
>کێشەکە لەوەیایە هەر دووکیان پێویست نیین (ئەتوانی`this.props.color` ڕاستەوخۆ بەکاربێنی), وە کەلێنیش دروست دەکات (( ئەپدەیت کردنی  `color`  پڕۆپ کاریگەری لەوەی ستەت ناکات).
>
>**تەنها کاتێک ئەم شێوەیە بەکاربێنە ئەگەر ویستت ئەپدەتی پڕۆپ پشتگوێ بخەیت.** لەم دۆخەیا , هەستیار دەبێت بۆ ناو لێنانەوەی پڕۆپ بۆی بانگ بکرێت `initialColor` یان  `defaultColor`. دوای دەتوانی وا لە کۆمپۆنینتێک بکەیت "reset" ستەیتەکەی بکات بە  [changing its `key`](/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) کاتێک پێویست بوو.
>
>بڵۆگ پۆستەکەمان بخوێنەرەوە دەرباری [دورکەوتنەوە لە دێریڤەت کردنی ستەت ](/blog/2018/06/07/you-probably-dont-need-derived-state.html) بۆ فێربوونی دەربارەی ئەوەی کە چی بکەیت ئەگەر  وات بیر کردەوە کە پێویست دەکاته هەندێ لە ستەت پشت بەستووبێت بە پڕۆپس.


* * *

### `componentDidMount()` {#componentdidmount}

```javascript
componentDidMount()
```

`componentDidMount()` بانگ دەکرێت دەستبەجێ دوای ئەوەی کۆمپۆنێنتێک ماونتد کرا (دەخرێتە ناو تریی). نرخپێیانەکان کە پێویستیان بە نۆدەکانی دۆمە پێویستە لێرە جێبەجێبکرێن. گەر پێویستت کرد داتا بگوازیتەوە لە ئیند پۆینتێکەوە, . ئێرە شوێنێکی باشە بۆ پیشاندانی نێتۆرک ڕیکوێست.

ئەم میسۆدە شوینێکی باشە بۆ بنیاتنانی  subscriptions . گەر ئەوە ناکەیت , لە بیری مەکە  unsubscribe بکەی لە    `componentWillUnmount()`.

 **لەوانەیە بانگی  `setState()` بکەیت دەستبەجێ** لەناو `componentDidMount()`. دەبێتە هۆی ڕێندەر کردنی زیادە, بەڵام ئەوە ڕودەدات پێش ئەوەی وێبگەڕ شاشەکە ئەپدەت بکات . گرەنتیان دەداتێ کە تەنانەت   `render()` دوو جار بانگ دەکرێت لەم دۆخەدا, بەکاربەر ستەتی ئەو ماوەیە نابینێت.بە ئاگاییەوە ئەم شێوازە بەکاربێنە لەبەرئەوەی زۆربەی کات کێشەی پێرفۆڕماست بۆ دروست دەکات. لە زۆر دۆخدا , دەبێت نرخپێیانی ستەت لە `constructor()` بکەیت.  هەرچۆنێکبێت ,  پێویستە بۆ دۆخەکانی وەکو مۆدەڵس و تووڵتیپ کاتێک پێویست بکات نۆدەکانی دۆم بپێوێت پێش ڕێندەرکردنی شتێک کە پشت بەستووبێت بە قەبارە و شوێنەکەی.

* * *

### `componentDidUpdate()` {#componentdidupdate}

```javascript
componentDidUpdate(prevProps, prevState, snapshot)
```

`componentDidUpdate()` بانگ دەکرێت دەستبەجێ دوای ڕوودانی ئەپدەیت، ئەم میسۆدە بانگ ناکرێت بۆ دەسپێکی ڕێندەر.

ئەمە بەکاربێنە وەکو هەلێک بۆ جێبەجێ کردنی لەسەر دۆم کاتێک کۆمپۆنێنتەکە ئەپدەیت دەکرێتەوە. هەروەها شوێنیکی باشە بۆ نێتۆرک ڕیکوێست هاوکات بەراورد دەکەیت لە نێوان پڕۆپسی ئێستا و پڕۆپسی پێشوو  (بۆ نموونە نێتۆرک ڕیکوێستێک لەوانەیە پێویست نەکات ئەگەر پرۆپس ەکە گۆڕانکاری تیا نەکرابێت).

```js
componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

**لەوانەیە بانگی  `setState()` بکەیت دەستبەجێ** لە ناو  `componentDidUpdate()` بەڵام تێبینی ئەوەبکە  **کە پێویستدەکات لەدۆخێکدابێت** وەکو نموونەکەی سەرەوە, یان دەبێتە هۆکاری لووپێکی بێکۆتا.  هەروەها دەبێتە هۆکاری ڕی-ڕێندەرکردنی زیادە کە، , لە کاتێکدا بینراو نیە بۆ بەکاربەر, کاریگەری لە پێرفۆڕمانسی کۆمپۆنێنتەکە دەکات. گەر هەوڵ دەدەی  هەندێ ستەت  "mirror" بکەیت بۆ پڕۆپ ێک لە سەرەوە, لە جیاتی ئەوە ڕەچاوی بەکارهێنای پڕۆپ بکە بە ڕاستەوخۆی. زیاتر بخوێنەرەوە دەربارەی  [بۆچی کۆپی کردنی پڕۆپس بۆ ستەت هۆکاری کەلێنە](/blog/2018/06/07/you-probably-dont-need-derived-state.html).

 گەر کۆمپۆنێنتەکەت `getSnapshotBeforeUpdate()` lifecycle تیابوو (کە دەگمەنە), ئەو نرخەی کە دەگەڕێتەوە تێدەپەڕێت بە سێهەمین  "snapshot" پارامیتەر بۆ  `componentDidUpdate()`. گەرنا ئەم پارامیتەرە نەناسراو دەبێت.

> تێبینی
>
> `componentDidUpdate()` بانگ ناکرێت ئەگەر [`shouldComponentUpdate()`](#shouldcomponentupdate) گەڕاندییەوە false.

* * *

### `componentWillUnmount()` {#componentwillunmount}

```javascript
componentWillUnmount()
```

`componentWillUnmount()` بانگ دەکرێت دەستبەجێ پێش ئەوەی کۆمپۆنێنتێک ئەنماونتد بکات و لەناوبچێت. پێداویستیەکانی ڕێکوپێک کردن جێبەجێ بکە لەم میسۆدەدا، وەکو  invalidating timers, canceling network requests, or cleaning up any subscriptions کە دروستکراون لەناو  `componentDidMount()`.

**پێویست ناکات بانگی   `setState()` پێویست ناکات بانگی** لەناو  `componentWillUnmount()` لەبەرئەوەی کۆمپۆنێنتەکە هەرگیز ڕی-ڕێندەر نابێت. یەکجار کۆمپۆنێنت ئەنماونتد بوو , هەرگیز ماونتد نا بێتەوە دووبارە.

* * *

### میسۆدەکانی سوڕی ژیان کەم بەکارهاتووەکان {#rarely-used-lifecycle-methods}

میسۆدەکانی ئەم بەشە هاوپێچن بۆ دۆخە کەم بەکارهاتووەکان. بەسوودن یەکجار لە ماوەیەکدا, بەڵام زۆرێک لە کۆمپۆنێنتەکانت لەوانەیە پێویستیان بەوانە نەبێت. **دەتوانی سەیری زۆربەی میسۆدەکانی خوارەوە بکەیت لەسەر  [ئەم دایەگرامەی سوڕی ژیان ](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) ئەگەر کلیک لە چێک بۆکسی "Show less common lifecycles" بکەیت لە بەشی سەرەوە**


### `shouldComponentUpdate()` {#shouldcomponentupdate}

```javascript
shouldComponentUpdate(nextProps, nextState)
```

`shouldComponentUpdate()` بەکاربهێنە بۆ ئەوەی ڕیاکت بزانێت ئەگەر ئاوتپوتی کۆمپۆنێنتێک کاریگەر نابێت بە گۆڕان کارییەکانی ئەوکاتەی پڕۆپس و ستەت. کردارە بنچینەییەکە  بۆ ڕی-ڕێندەر کردنی هەموو گۆڕانکاری ستەتەکەیە, وە لە زۆربەی دۆخەکان پێویستە بەردەوام بیت لەسەر کردارە بنجینەییەکە.

`shouldComponentUpdate()` بانگ دەکرێت پێش ڕێندەرکردن کاتێک پرؤپس ێکی تازە یان ستەت بگات. بنچینەکان بۆ  `true`. ئەم میسۆدە بانگ ناکرێت بۆ دەسپێکی ڕێندەر یان کاتێک  `forceUpdate()` بەکارهێنرابوو.

ئەم میسۆدە بوونی هەیە وەکو  **[performance optimization](/docs/optimizing-performance.html).** پشتبەستوو مەبە پێی بۆ "بەردەوامبونی" ڕێندەرێک, کە دەبێتە هۆی کەلێن. **ڕەچاوی بەکارهێنانی بکە لە بنیات نانی  [`کۆمپۆنێنتێکی کامڵ `](/docs/react-api.html#reactpurecomponent)** لەجیاتی نووسینی `shouldComponentUpdate()` بە دەست. `PureComponent` بەراوردێکی قوڵ دەکات لە نێوان پڕۆپس و ستەت, بەراوردێکی قوڵ دەکات لە نێوان پڕۆپس و ستەت.

ئەگەر دڵنیایت دەتەوێ کە بەدەست بینووسی, لەوانەیە بەراوردی  `this.props` لەگەڵ  `nextProps` وە  `this.state` لەگەڵ  `nextState` بکەیت و  `false` to بگەڕێنێتەوە بۆ ئەوەی بە ڕیاکت بڵێت ئەپدەیتەکە دەتوانرێت تێ بپەڕێنرێت. بزانە کە گەڕاندنەوەی `false` چایەڵد کۆمپۆنێنت بەردەوام ناکات لە ڕی-ڕێندەر کردن کاتێک ستەتەکانیا دەگۆڕێت.

ئێمە پێشنیاری یەکسانیەکی تەواو ناکەین یان بەکارهێنانی  `JSON.stringify()` لەناو  `shouldComponentUpdate()`. زۆر نا کارامەییە و زەرەر بە پێرفۆڕمانس دەگەیەنێت.

لە ئێستادا, گەر  `shouldComponentUpdate()` بگەڕینێتەوە  `false`, دواتر  [`UNSAFE_componentWillUpdate()`](#unsafe_componentwillupdate), [`render()`](#render), و [`componentDidUpdate()`](#componentdidupdate) بانگ ناکرێن. لە داهاتوودا لەوانەیە ڕیاکت مامەڵە لەگەڵ `shouldComponentUpdate()` بکات بە ناڕاستەو خۆی نەک بە ڕاستەوخۆی , وە گەڕاندنەوەی  `false` لەوانەیە ئەنجامەکەی هەر ڕی-ڕێندەر کردنی کۆمپۆنێنت بێت.

* * *

### `static getDerivedStateFromProps()` {#static-getderivedstatefromprops}

```js
static getDerivedStateFromProps(props, state)
```

`getDerivedStateFromProps` بانگ دەکرێت پێش بانگ کردنی ڕێندەر میسۆد, هەردووکیان لە سەرەتای ماونتد و لە بەشە ئەپدەیتەکان. پێویست دەکات ئۆبجێکتێک بگەڕێنێتەوە بۆ ئەپدەیت کردنەوەی ستەت,  یان نەڵ بۆ ئەپدەیت کردنەوەی هیچ شتێک.

ئەم میسۆدە بوونی هەیە [بۆ دۆخە کەم بەکار هاتووەکان ](/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state) لە شوێنێکدا کە ستەت پشت بەستووبێت بەو گۆڕانکاریانەی ڕوودەدەن لە پڕۆپس بە پێی کات. بۆ نموونە , لەوانەیە بەردەست بێت لکاندنی  `<Transition>` کۆمپۆنێنت بۆ بەراورد کردنی چیڵدرنی پێشووی لەگەڵ داهاتووی بۆ ئەوەی بڕیار بدات کامیان کارابێت.

زۆر بەکار هێنانی ستەت دەبێتە هۆی کۆدی زیادە و قوڕس دەبێت بۆ کۆمپۆنێنتەکە جێبەجی بکات.  
[دڵنیا بەرەوە کە هەڵبژاردە سادەکانی تر دەزانی:](/blog/2018/06/07/you-probably-dont-need-derived-state.html)

* 	گەر پێویستی کرد  **کاریگەریەکی لاوەکەی ئەنجام بدەیت** (بۆ نموونە , داتا هێنان یان ئەنیمێشنێک) لە بەرامبەر گۆرینی پڕۆپس ,  [`componentDidUpdate`](#componentdidupdate) سوڕی ژیان بەکار بێنە لەجیاتی.

* 	گەر ویستت **هەژمار کردنەوە بۆ هەندێ داتا بکەیت تەنها کاتێک پڕۆپ دەگۆڕێت**, [یارمەتی دەری بیرهێنەرەوە بەکار بێنە](/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization).

* 	گەر ویستت  **هەندێ ستەت "reset" کەیتەوە تەنها کاتێک پرۆپ دەگۆڕیت**, دەگۆڕیت ڕەچاوی دروست کردنی کۆمپۆنێنتێکی  [بە تەواوی کۆنتڕۆڵکراو ](/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component) یاخود  [بە تەواوی کۆنتڕۆڵ نەکراو لەگەڵ کییەک ](/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) بکە.

ئەم میسۆدە توانای بەکارهێنانی نموونەی کۆمپۆنێنتەکەی نییە . گەر دەتەوێ وابێت, ئەتوانی هەندێ کۆد بەکار بێنیتەوە لە نێوان `getDerivedStateFromProps()` وە میسۆدەکانی کڵاسی تر لە ڕێی زیاد کردنی فەکشنی کامڵ لە ناو پڕۆپس و ستەت کۆمپۆنێنتەکە لەدەرەوەی کڵاس ناساندنەکە.

بزانە کە ئەم میسۆدە بانگ دەکرێت لە هەموو ڕێندەر ێک, بەبێ ڕەچاوکردنی دۆخەکە. ئەمە بنچینەیە بۆ `UNSAFE_componentWillReceiveProps`,کە تەنها کاتێک بانگ دەکرێت کە پارێنت هۆکاری ڕی-ڕێندەرە نەک وەک ئەنجامێک لە ناوخۆی  `setState`.

* * *

### `getSnapshotBeforeUpdate()` {#getsnapshotbeforeupdate}

```javascript
getSnapshotBeforeUpdate(prevProps, prevState)
```

`getSnapshotBeforeUpdate()` بانگ دەکرێت پێش دواینترین ئاوتپوتی ڕێندەرکراو بۆ نموونە دۆم توانا دەدات بە کۆمپۆنێنتەکەو بۆ وەرگرتنی هەندێ زانیاری لە دۆمەوە (e.g. scroll position) پێش ئەوەی توانای گەشەکردنی بگۆڕدرێت. هەر نرخێک گەڕایەوە لەلایەن ئەم سوڕی ژیانە تێ دەپەڕێت وەکو پارامیتەر بۆ  `componentDidUpdate()`.

ئەم بەرکارهێنانە بەربڵاو نییە, ، بەڵام لەوانەیە ڕووبدات لە  UIs وەکو سەکۆی چات کە پێویستی بە گۆڕینی شوێنە بە ڕێگایەکی تایبەت.

نرخی snapshot  (یان  `null`) بێت دەبێت گەڕابێتەوە.

بۆ نموونە:

`embed:react-component-reference/get-snapshot-before-update.js`

لە نموونەکەی سەرەوەدا , گرنگە کە تایبەتمەندی `scrollHeight` بخوێنیتەوە لە  `getSnapshotBeforeUpdate` چونکە لەوانەیە ماوەیەک هەبێت لەنێوان بەشەکانی "render" سوڕی ژیان  (وەکو  `render`) و بەشە   "commit" سوڕی ژیان  (وەکو  `getSnapshotBeforeUpdate` و  `componentDidUpdate`).

* * *

### Error boundaries {#error-boundaries}

[Error boundaries](/docs/error-boundaries.html) کان لە ڕیاکت کۆمپۆنێنتەکان دا کە ئیرەرەکانی جاڤا سکریپت دەگرن لە هەر شوێنیکی چایەڵد کۆمپۆنێنتی ترییەکە, لۆگی ئەم ئیرەرانە دەکەن, وە ئەنجامەکەی لە  UI پیشاندەدات لەجیاتی ئەوەی کۆمپۆنێنت ترییەکە تێکبشکێت. Error boundaries ئیرەرەکان دەگرن بە درێژای ڕێندەرکردن, لە سوڕی ژیانی میسۆدەکان, وە لە ناو کۆنستڕەکتەرەکان وە لەهەموو ترییەکەی خوار ئەوانیش.

کڵاس کۆمپۆنێنتێک دەبێت بە  error boundary ئەگەر یەکێکیان یان(هەردووکیان) لە میسۆدەکانی سوڕی ژیانی `static getDerivedStateFromError()` یان `componentDidCatch()` بناسێنێت. تازەکردنەوەی ستەت لەلایەن ئەم سوڕی ژیانانە ڕێگەت پێدەدا بە گرتنی ئیرەرەکانی جاڤاسکریپت لە خوارەوەی  tree کە وە پیشاندانی  fallback UI.

error boundaries تەنها بەکاریبێنە بۆ چارەسەکردنی ئیرەری چاوەڕوان نەکراوەکان **؛ بە کاریان مەهێنە بۆ control flow.**

بۆ وردبینی , سەیری  [*Error Handling in React 16*](/blog/2017/07/26/error-handling-in-react-16.html).

> تێبینی
> 
> Error boundaries   تەنها ئیرەرە کانی ناو کۆمپۆنێنتەکانی **خوار** ترییەکەیان دەگرن. ئیرەر باوندەریەک ناتوانێ ئیرەر لە ناو خۆی بگرێت.

### `static getDerivedStateFromError()` {#static-getderivedstatefromerror}
```javascript
static getDerivedStateFromError(error)
```

ئەم سوڕی ژیانە بانگ دەکرێت دوای ئەوەی ئیرەرێک گیرا لەلایەن کۆمپۆنێنتێکەوە.
ئەو ئیرەرەی پێدەگات کە گیراوە وەکو پارامیتەر وە پێویستە نرخێک بگەڕێنێتەوە بۆ ئەوەی ستەت ئەپدەیت بێتەوە.

```js{7-10,13-16}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```

> تێبینی
>
> `getDerivedStateFromError()` بانگ دەکرێت بە درێژای بەشی "render", کەواتە کاریگەریە لاوەکیەکانی ڕێپێنەدراون.
. بۆ ئەو دۆخانە , `componentDidCatch()`  لەجیاتی بەکاردێت.

* * *

### `componentDidCatch()` {#componentdidcatch}

```javascript
componentDidCatch(error, info)
```

ئەم سوڕی ژیانە بانگ دەکرێت دوای ئەوەی ئیرەرێک گیرا لە لایەن کۆمپۆنێنتێکەوە.
دوو پارامیتەری پێدەگات:

1. `error` - ئیرەرەکەی کە گیراوە.
2. `info` - – ئۆبجێکتێک لەگەڵ `componentStack` کییەکە پێک دێت  [دێت لە زانیاری دەربارەی کۆمپۆنێنتەکەی کە ئیرەرەکەی تیا ڕووداوە](/docs/error-boundaries.html#component-stack-traces).


`componentDidCatch()` بانگ دەکرێت بە درێژای بەشی "commit" , کەواتە کاریگەریە لاوەکییەکانی ڕێپێدراوە.
پێویستدەکات بەکاربهێنرێت بۆ شتەکانی وەک ئیرەرەکانی چوونەژورەوە:

```js{12-19}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    logComponentStackToMyService(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```

> تێبینی
> 
> لە ئیڤێنتێکدا ئیرەرێک ڕوویدا, دەتوانی ڕێندەری fallback UI بکەیت لەگەڵ  `componentDidCatch()`لە ڕێی بانگکردنی `setState`, بەڵام ئەمە پاڵپشتی ناکرێت لە وەشانی دواتر.
> `static getDerivedStateFromError()` بەکاربێنە بۆ fallback ڕێندەرکردن.

* * *

### Legacy Lifecycle Methods {#legacy-lifecycle-methods}

میسۆدەکانی سوڕی ژیان کە لە خوارەوە وەکو  "legacy" " دیاری کراون. تا ئێستاش ئیش دەکەن, بەڵام پێشنیاری بەکارهێنانیان ناکەین لە کۆدە تازەکاندا. دەتوانی زیاتر فێربیت دەربارەی دوورکەوتنەوە لە میسۆدەکانی سوڕی ژیانی legacy [لەم بڵۆگ پۆستەیا](/blog/2018/03/27/update-on-async-rendering.html).

### `UNSAFE_componentWillMount()` {#unsafe_componentwillmount}

```javascript
UNSAFE_componentWillMount()
```

> تێبینی
>
> ئەم سوڕی ژیانە لە پێشوودا ناوی  `componentWillMount` بوو. ئەو ناوە بەردەوام دەبێت لە ئیش کردن تا ڤێرژنی 17.  [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) بەکار بێنە بۆ ئەوەی بە شێوەیەکی خۆکاری کۆمپۆنێنتەکانت تازە بکاتەوە.

`UNSAFE_componentWillMount()` بانگ دەکرێت تەنها پێش دەستپێکردنی ماونتیینگ. بانگ دەکرێت پێش  `render()`, گەر نا بانگ کردنی  `setState()` بە synchronously لەم میسۆدەدا نابێتە هۆی ڕێندەر کردنی زیادە. بەگشتی , پێشنیاری بەکارهێنانی  `constructor()` دەکەین بۆ نرخپێیان بە ستەت.

دورکەوەرەوە لە ناساندنی کاریگەریە لاوەکییەکان  یان subscriptions لەم میسۆدە. بۆ ئەم دۆخانە لەجیاتی ئەوە ,  `componentDidMount()` بەکاربێنت.

ئەمە تەنها میسۆدی سوڕی ژیانە کە بانگ دەکرێت لەسەر سێرڤەر ڕێندەرکردن.

* * *

### `UNSAFE_componentWillReceiveProps()` {#unsafe_componentwillreceiveprops}

```javascript
UNSAFE_componentWillReceiveProps(nextProps)
```

> تێبینی:
>
> ئەم سوڕی ژیانە لە پێشوودا ناوی `componentWillReceiveProps` بوو. ئەو ناوە بەردەوام دەبێت لە ئیش کردن تا ڤێرژنی 17 . [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) بەکار بێنە بۆ ئەوەی بە شێوەیەکی خۆکاری کۆمپۆنێنتەکانت تازە بکاتەوە.

> تێبینی:
>
> بەکارهێنانی ئەم میسۆدەی سوڕی ژیانە بە زۆری دەبێتە هۆی کەلێن و ناجێگیری
>
> * 	گەر پێویستت **بە جێبەجێکردنی کاریگەریە لاوەکییەکان بوو** (بۆ نموونە هێنانی داتا و ئەنیمەشن ) لە بەرامبەر گۆڕینی پڕۆپس, لە جیاتی ئەوە  [`componentDidUpdate`](#componentdidupdate) سوڕی ژیان بەکاربێنە.
> * 	گەر  `componentWillReceiveProps` بەکارهێنا  بۆ  **هەژمار کردنەوە هەندێ داتا کاتێک پڕۆپ دەگۆڕێت**, [یارمەتی دەری بیرهێنەرەوە بەکار بێنە  ](/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization).
> * •	گەر `componentWillReceiveProps` بەکارهێنا بۆی **هەندێ ستەت "reset"  کەیتەوە کاتێک پرۆپ ێک دەگۆڕیت**, دەگۆڕیت ڕەچاوی دروست کردنی کۆمپۆنێنتێکی [بە تەواوی کۆنتڕۆڵکراو ](/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component) یاخود  [بە تەواوی کۆنتڕۆڵ نەکراو لەگەڵ کییەک](/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) بکە .
>
> بۆ دۆخەکانی تر , [شوێن پێشنیار کراوەکانی ناو ئەم بڵۆگ پۆستە بکەوە دەربارەی دێریڤەتت ستەت](/blog/2018/06/07/you-probably-dont-need-derived-state.html).

`UNSAFE_componentWillReceiveProps()` بانگ دەکرێت پێش ئەوەی کۆمپۆنێنتێکی ماونتد پڕۆپسی تازەی پێبگات. ئەگەر پێویستت بە تازەکردنەوەی ستەت بوو لەبەرامبەر گۆڕانی پرؤپ (بۆ نموونە , بۆ reset کردنەوەی), لەوانەیە بەراوردی `this.props` و `nextProps` nextProps و جێبەجی کردنی گۆڕانکاری ستەت بە بەکار هێنانی`this.setState()` لەم میسۆدەدا.

بزانە کە ئەگەر پارێنت کۆمپۆنێنتێک بووە هۆی ئەوی کۆمپۆنێنتەکەو ڕی-ڕێندەربێت, ئەم میسۆدە پێی دەوترێت  even گەر پڕۆپس نەگۆڕدرا. دڵنیا بەرەوە لە بەراورد کردنی نرخەکانی ئێستا و داهاتووی ئەگەر دەتەوێ تەنها گۆڕانکارییەکان هەست پێبکەیت.

ڕیاکت `UNSAFE_componentWillReceiveProps()` بانگ ناکات لەگەڵ دەست پێکردنی پڕۆپ بە درێژای  [mounting](#mounting). ئەم میسۆدە بانگ دەکات تەنها  ئەگەر پڕؤپسی کۆمپۆنێنتەکە تازەبێتەوە. بانگ کردنی  `this.setState()` بەگشتی کاریگەری ناکات لە `UNSAFE_componentWillReceiveProps()`.

* * *

### `UNSAFE_componentWillUpdate()` {#unsafe_componentwillupdate}

```javascript
UNSAFE_componentWillUpdate(nextProps, nextState)
```

> تێبینی
>
> تێبینی `componentWillUpdate` بوو. بوو.  [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) بەکار بێنە بۆ ئەوەی بە شێوەیەکی خۆکاری کۆمپۆنێنتەکانت تازە بکاتەوە.

`UNSAFE_componentWillUpdate()` بانگ دەکرێت تەنها پێش ڕێندەرکردن کاتێک پڕؤپس و ستەت تازە دەگەن. ئەمە وەکو هەلێک بەکاربێنە بۆ جێبەجێ کردنی ئامادەکاری پێش دەستپێک کردنی ئەپدەیتێک. ئەم میسۆدە بانگ ناکرێت بۆ دەستپێکی ڕێندەر.

بزانە کە لێرەدا ناتوانی بانگی  `this.setState()` بکەیت; پێویست ناکات هیچ شتێکی تر کەیت (بۆ نموونە ناردنی Redux action) دەبێتە هۆی ئەپدەیت بۆ کۆمپۆنێنتەکە پێش `UNSAFE_componentWillUpdate()` بگەڕێنێتەوە.

بەزۆری, ئەم میسۆدە دەتوانێ جێگرەوەی `componentDidUpdate()` بێت. ئەگەر خوێندنەوەت بۆ کرد لە دۆمەوە لەم میسۆدەدا  (بۆ نموونە خەزن کردنی  scroll position), دەتوانی ئەو لۆجیکە بگوازیتەوە بۆ  `getSnapshotBeforeUpdate()`.

> تێبینی 
>
> `UNSAFE_componentWillUpdate()` بانگ ناکرێت ئەگەر  [`shouldComponentUpdate()`](#shouldcomponentupdate) بیگەڕێنێتەوە false.

* * *

## Other APIs {#other-apis-1}

بەپێچەوانەی میسۆدەکانی سوڕی ژیان سەرەوە (کە ڕیاکت بانگی دەکات بۆت), میسۆدەکانی خوارەوە ئەو میسۆدانەن دەتوانی بانگیان بکەیت لە کۆمپۆنێتەکانت.

تەنها دووان لەوان هەیە: : `setState()` و `forceUpdate()`.

### `setState()` {#setstate}

```javascript
setState(updater, [callback])
```

`setState()` گۆڕانکارییەکان بە ڕیز زیاد دەکات بۆ ستەت کۆمپۆنێنتەکە وە بە ڕیاکت دەڵێت کە ئەم کۆمپۆنێنتە و چایەڵدەکانی پێویستان بە ڕی-ڕێندەرکردن هەیە لەگەڵ ئەپدەیت کردنی ستەت. ئەمە میسۆدی بنچینەییە بۆ تازەکردنەوەی یوزەر ئینتەرفەیس لەبەرامبەر ئیڤێنت هەڵگرەکان و وەڵام دانەوەی سێرڤەرەکان.

بیر لە  `setState()` بکەرەوە وەکو ڕیکوێستێک نەک وەکو کۆماندێک بۆ تازەکردنەوەی کۆمپۆنێنت. بۆ جێبەجێکردنێکی باشتر, ڕیاکت کاتی دەداتێ پاشان کۆمەڵە کۆمپۆنێنتێنک پێکەوە تازەدەکاتەوە لە یەک جارە. ڕیاکت گرەنتی ئەوەناکات کە گۆڕانکارییەکانی ستەتە دەستبەجێ زیاد کرێ.

`setState()` هەموو کاتێک دەستبەجێ کۆمپۆنێنتەکە تازەناکاتەوە . لەوانەیە ئەپدەیتەکە ڕێک بخات یان بیوەستێنی تا دواتر. ئەمە وادەکات خوێندنەوەی `this.state`بکەوێتە دوای بانگکردنی  `setState()` شاردنەوەی گەشەکردن. لەجیاتی ئەوە,  `componentDidUpdate` یان   `setState` callback (`setState(updater, callback)`) بەکاربێنە, ، وە گرەنتی کراون کە دەست پێدەکەن پاش ئەوەی ئەپدەیتکە زیادکرا. گەر پێویستە ستەت دانێیت بە بنجینەی ستەتی پێشوو دەربارەی,  `updater` بخوێنەرەوە لەم بەشەی خوارەوە.

`setState()` هەموو کات دەبێتە هۆی ڕی-ڕێندەر مەگەر  `shouldComponentUpdate()` بگەڕێنێتەوە `false`. Iئەگەر ئەو ئۆبجێکتانە بەکارهاتن کە توانی گۆڕانکارییان هەیە لەگەڵ ئەوەدا ڕێندەر کردنی مەرجی ناتوانرێت بلکێنرێت لە ناو `shouldComponentUpdate()`, بانگکردنی  `setState()` تەنها کاتێک کە ستەیتە تازەکە جیاوازبێت لەوەی پێشووی ئەمە دەبێتە هۆی دوورکەوتنەوە لە ڕی-ڕێندەرە ناپێویستەکان.

یەکەم ڕستە فەکشنێکی  `updater` لەگەڵ بنچینەکەی:

```javascript
(state, props) => stateChange
```

`state` دەگەڕێتەوە بۆ ستەتی کۆمپۆنێنتەکە لە کاتێکدا گۆرانکارییەکە زیاد کرا. پێویست ناکات بەڕاستەوخۆی بگۆڕدرێت. لەجیاتی ئەوە, پێویستە گۆڕانکارییەکان پیشان بدرێن لە ڕێگەی بنیاد نانی ئۆبجێکتێکی تازە لەسەر بنچینەی داخڵبووەکانی `state` وە `props`. بۆ نموونە وای دابنێ دەمانەوێ نرخێک زیادبکەین لە ستەت بە  `props.step`:

```javascript
this.setState((state, props) => {
  return {counter: state.counter + props.step};
});
```

هەردووکیان `state` و `props` لە ڕێی  updater فەکشین پێیان دەگات وە گرەنتی کراون بۆ تازە کردنەوەی. ئاوتپوی فەکشنی  updater دەبەسترێتەوە لەگەڵ `state`.

دووەم پارامیتەر بۆ  `setState()`  callback function نێکی ئارەزومەندانەیە کە جێبەجی دەبێت دوای ئەوەی یەکجار `setState` تەواو بوو وە کۆمپۆنێنتەکە ڕی-ڕێندەر بۆیەوە. بەگشتی پێشنیاری بەکارهێنانی  `componentDidUpdate()` دەکەین بۆ لەجیاتی لۆجیک.

لەوانەیە بتەوێت  pass ئۆبجێکتێک بکەیت وەکو یەکەم پارامیتەر بۆ  `setState()` لەجیاتی فەکشنێک:

```javascript
setState(stateChange[, callback])
```

ئەم جێبەجی کردنە دەبەسترێتەوە لە ناو  `stateChange` بۆ ناو ستەت ێکی تازە , بۆ نموونە بۆ هاوسەنگ کردنی ڕێژەی کاڵاکانی شۆپینگ کارت :

```javascript
this.setState({quantity: 2})
```

ئەم شێوازی  `setState()`  asynchronous, وە زیاد لە یەک بانگکردن بەدرێژای هەمان سوڕ لەوانەیە پێکەوە ڕێکخراوبن. بۆ نموونە, ئەگەر ویستت ڕێژەی کاڵایەک زیاد کەیت زیا لەیەکجار لە هەمان سوڕ دەبێتە هۆکاری یەکسانی تیایدا:

```javaScript
Object.assign(
  previousState,
  {quantity: state.quantity + 1},
  {quantity: state.quantity + 1},
  ...
)
```

بەشە زنجیرە بانگ کردنەکان نرخەکان override دەبن لەلایەن بانگ کردنەکانی پێشووی لە هەمان سوڕ, کەواتە ڕێژەکان تەنها یەکجار زیاد دەکەن. ئەگەر ستەت داهاتوو پشت بەستووبێت  بە ستەت ئێستا , ئێمە پێشنیاری بەکار هێنانی updater function دەکەین، لە جیاتی:

```js
this.setState((state) => {
  return {quantity: state.quantity + 1};
});
```

بۆ وردەکاری زیاتر سەیری:

* [State and Lifecycle guide](/docs/state-and-lifecycle.html)
* [In depth: When and why are `setState()` calls batched?](https://stackoverflow.com/a/48610973/458193)
* [In depth: Why isn't `this.state` updated immediately?](https://github.com/facebook/react/issues/11527#issuecomment-360199710)

* * *

### `forceUpdate()` {#forceupdate}

```javascript
component.forceUpdate(callback)
```

بە ئاسایی, کاتێک ستەت یان پڕۆپسی کۆمپۆنێنتێک دەگۆڕێت, ، کۆمپۆنێنتەکەو ڕی-ڕێندەر دەبێت. ئەگەر میسۆدی `render()`رەکەو پشتبەستووبێت بۆ هەندێ داتا, دەتوانی بە ڕیاکت بڵێیت کە کۆمپۆنێنتەکە پێویستی بە ڕی-ڕێندەر کردنە لەلایەن بانگ کردنی`forceUpdate()`.

بانگکردنی `forceUpdate()` دەبێتە هۆی بانگ کردنی  `render()` لەسەر کۆمپۆنێنتەکە, وە پەڕاندنی  `shouldComponentUpdate()`. ئەمە کاریگەری دەبێت لەسەر میسۆدە ئاساییەکانی سوڕی ژیان بۆ چایەڵد کۆمپۆنێنتەکان, پێکدێت لە میسۆدی  `shouldComponentUpdate()` بۆ هەر چایەڵدێک. ڕیاکت دەیەوێت تەنها دۆم تازە بکاتەوە ئەگەر markup بگۆڕێت.

ئاسای پێویست دەکات دوورکەویتەو لە بەکارهێنانی  `forceUpdate()` و تەنها `this.props` و `this.state` بەکاربهێنیت لە `render()`.

* * *

## Class Properties {#class-properties-1}

### `defaultProps` {#defaultprops}

`defaultProps` دەتوانرێت بناسێنرێنرێت وەکو تایبەتمەندییەکی کڵاس کۆمپۆنێنت, بۆ دانانی  default props بۆ کڵاس. ئەمە بەکاردێت بۆ پڕۆپس ە نەناسێنراوەکەن, بەڵام نەک بۆ پڕۆپسە  null ە نەڵە کان. بۆ نموونە:

```js
class CustomButton extends React.Component {
  // ...
}

CustomButton.defaultProps = {
  color: 'blue'
};
```

ئەگەر `props.color` نەبوو,ئەوا نرخە ئاساییەکە دەبێت  `'blue'`:

```js
  render() {
    return <CustomButton /> ; // props.color will be set to blue
  }
```

ئەگەر  `props.color` نرخەکەی  null بوو, هەربە null ی دەمێنێتەوە:

```js
  render() {
    return <CustomButton color={null} /> ; // props.color will remain null
  }
```

* * *

### `displayName` {#displayname}

وشەی `displayName` sبەکاردێت لە پەیامەکانی  debugging دا. بە زۆری , پێویستت بە دانانی نابێت بەڕوونی چونکە باسکراوە لەلایەن ناوی فەکشنەکە و یان کڵاسەکە کە کۆمپۆنێنتەکەی ناساندوە . . ئەگەر دەتەوێ ناوێکی جیا پیشان بدات بۆ ئەنجامەکانی debugging یان کاتێک کۆمپۆنێتێکی پلە بەرزترت دروست کرد, سەیری [کۆکردنەوەی ناوە پیشاندراوەکان بکە بۆ ئاسانی Debugging](/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging) بۆ وردبینی.

* * *

## Instance Properties {#instance-properties-1}

### `props` {#props}

`this.props` پێکدێت لە پڕۆپس کە ناسێنراون لەلایەن بانگکەری کۆمپۆنێنتەکەوە. سەیری  [کۆمپۆنێنتەکان و پڕۆپس](/docs/components-and-props.html) for بکە بۆ ناسینی پڕۆپس.

لە ڕاستیدا, `this.props.children` پرۆپ ێکی تایبەتە, بەزۆری دەناسێنرێت لەلایەن چایەڵد تاگەکان لە دەربڕینەکانیی JSX نەک لە تاگەکەی خۆیدا.

### `state` {#state}

ستەت پێکدێت لە داتای تایبەت بۆ کۆمپۆنینتەکە کە لەوانەیە گۆڕانکاری بەسەرا بێت بەپێی کات. ستەت ناسێنراوی دەستی بەکاربەرە, وە پێویستە ئۆبجێکتێکی جاڤاسکریپتی سادە بێت.

ئەگەر هەندێ نرخ بەکارنەهاتبوون بۆ ڕێندەرکردن یان داتا گواستنەوە  (بۆ نموونە , a timer ID), پێویست ناکات بیخەیتە ستەت ەوە. ئەو نرخانە دەتوانرێت بناسێنرێن وەک بەشێک لە نموونەی کۆمپۆنێنتەکە.

سەیری [ستەت و سوڕی ژیان ](/docs/state-and-lifecycle.html)بکە بۆ زانیاری زیاتر دەربارەی ستەت.

هەرگیز بە ڕاستەوخۆی  `this.state` مەگۆڕە, وەک بانگکردنی  `setState()` لەوانەیە جێگرەوەی گۆڕانکارییەکان بکات کە دروستت کردوە. مامەڵە لەگەڵ  `this.state` بکە وەکو ئەوەی نەتوانی بیگۆڕیت.
