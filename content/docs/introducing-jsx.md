---
id: introducing-jsx
title: ناساندنی JSX
permalink: docs/introducing-jsx.html
prev: hello-world.html
next: rendering-elements.html
---

پێناسەکردنی ئەم گۆڕاوە لەبەرچاو بگرە:

```js
const element = <h1>سڵاو، جیهان!</h1>;
```

This funny tag syntax is neither a string nor HTML.

ئەم ڕستەکارە هەزەلییە نە دەقەڕیزبەندە (string) نە HTML.

It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

ئەمە پێی دەڵێن JSX و درێژکراوەیەکی ڕستەکارە بۆ  جاڤاسکریپت. ئێمە پێشنیار دەکەین کە لەگەڵ‌ ڕیئاکت بەکاری بێنیت تا پێناسەی دەرکەوتنی ڕووکاری پێ بکەیت. دەشێت JSX زمانێکی ڕووکارکردنت بێنێتەوە یاد، بەڵام کۆی هێزی جاڤاسکریپت لەخۆ دەگرێت.

JSX produces React "elements". We will explore rendering them to the DOM in the [next section](/docs/rendering-elements.html). Below, you can find the basics of JSX necessary to get you started.

JSX ڕەگەزەکانی ڕیئاکت بەرهەم دەهێنێت. سەبارەت بە نیشاندانیان لەنێو DOM دا لە [بەشی داهاتوو](/docs/rendering-elements.html) قسە دەکەین. لەخوارەوە، بنەمایەکی پێویست بۆ دەست پێ کردن لەگەل JSX بەردەست خراوە.

### Why JSX? {#why-jsx}
### بۆ JSX? {#why-jsx}


React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

ڕیئاکت ئەو ڕاستییە بەهەند وەردەگرێت کە لۆژیکی پوختەکردن (پیشاندان) لە سروشتدا هاوپەیوەندە لەگەڵ لۆژیکی دیکەی ڕووکاردا، لەوانە: چۆن ڕووداو (event) ڕادەپەڕێندرێت، چۆن دۆخ (state) دەگۆڕێت بە تێپەڕبوونی کات، وەهەروەها چۆن دراوە (data) ئامادە دەکرێت بۆ پیشاندان.

Instead of artificially separating *technologies* by putting markup and logic in separate files, React [separates *concerns*](https://en.wikipedia.org/wiki/Separation_of_concerns) with loosely coupled units called "components" that contain both. We will come back to components in a [further section](/docs/components-and-props.html), but if you're not yet comfortable putting markup in JS, [this talk](https://www.youtube.com/watch?v=x7cQ3mrcKaY) might convince you otherwise.

لەبری ئەوەی بەشێوەیەکی دەستکرد *تەکنەلۆجیاکان* جیا بکرێنەوە بە جیاکردنەوەی مارکئەپ و لۆژیک بۆ پەڕگەی خۆیان، ڕیئاکت [*گرنگییەکان* جیادەکاتەوە](https://en.wikipedia.org/wiki/Separation_of_concerns)) لەڕێگەی یەکەی نەرم-پێکەوە-گرێدراو کە پێی دەوترێت "کۆمپۆنێنت" کە هەردوو لەخۆ دەگرێت. دەگەڕێینەوە بۆلای کۆمپۆنێنت لە [بەشێکی تێر و تەسەلدا](/docs/components-and-props.html)، بەڵام ئەگەر هێشتا لەگەڵ تێکەڵکردنی مارکئەپ لەنێو جاڤاسکریپتدا نیت، [ئەم وتووێژە](https://www.youtube.com/watch?v=x7cQ3mrcKaY) ڕەنگە ڕات بگۆڕێت.


React [doesn't require](/docs/react-without-jsx.html) using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

بۆ بەکارهێنانی ڕیئاکت JSX [داواکراو نییە](/docs/react-without-jsx.html)، بەڵام زۆربەی خەڵک پێیان وایە یاریدەدەرێکی بینایی باشە کاتێک کە کار لەگەڵ‌ ڕووکار دەکەن لەنێو کۆدی جاڤاسکریپتدا. هەروەها یارمەتی دەدات ڕیئاکت هەڵە و ئاگاداریی بەسوودتر نیشان بدات

With that out of the way, let's get started!
ئێستاش پاش زانینی ئەمانە، با دەست پێ بکەین!

### Embedding Expressions in JSX {#embedding-expressions-in-jsx}
### تێهەڵکێشکردنی دەستەواژەکان لەنێو JSX {#embedding-expressions-in-jsx}

In the example below, we declare a variable called `name` and then use it inside JSX by wrapping it in curly braces:

لەم نموونەیەی خوارەوەدا، گۆڕاوێک پێناسە دەکەین بەناوی `name` و پاشان بەکاری دەهێنین لەنێو JSX دا بە پێچانەوەی لەنێو کەوانی لوولدا:
```js{1,2}
const name = 'ئاسۆ نادری';
const element = <h1>سڵاو، {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

You can put any valid [JavaScript expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) inside the curly braces in JSX. For example, `2 + 2`, `user.firstName`, or `formatName(user)` are all valid JavaScript expressions.

ئەتوانیت هەر [دەستەواژەیەکی درووستی جاڤاسکریپت](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) لەنێو کەوانە لوولەکاندا دابنێیت لە JSX دا. بۆ نموونە `2 + 2`، `user.firstName`، یان `formatName(user)` هەموو دەستەواژەی درووستن لە جاڤاسکریپتدا.

In the example below, we embed the result of calling a JavaScript function, `formatName(user)`, into an `<h1>` element.

لەم نموونەیەی خوارەوەدا، ئەنجامی بانگکردنی نەخشەیەکی جاڤاسکریپت `formatName(user)` تێهەڵکێش دەکەینە نێو ڕەگەزی `<h1>`.
```js{12}
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'ڕەهێڵ',
  lastName: 'ئاوات'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

[لەسەر CodePen تاقی بکەرەوە](codepen://introducing-jsx)

We split JSX over multiple lines for readability. While it isn't required, when doing this, we also recommend wrapping it in parentheses to avoid the pitfalls of [automatic semicolon insertion](https://stackoverflow.com/q/2846283).

JSX جیادەکەینەوە بۆ سەر چەند هێڵێک مەبەستی باشترکردنی خوێندنەوە. ئەگەرچی ئەمە داواکراو نییە، بەڵام کاتێک ئەم کارە دەکەیت، پێویستە بیپێچیتە لە کەوانە تاوەکو لەمەترسی [تێخستنی فاریزەوخاڵی خۆکار](https://stackoverflow.com/q/2846283) بەدوور بیت.

### JSX is an Expression Too {#jsx-is-an-expression-too}
### JSX خۆیشی دەستەواژەیە {#jsx-is-an-expression-too}

After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

لەدوای کۆمپایڵکردن، دەستەواژەکانی JSX دەبنەوە بانگهێشتیی ئاسایی نەخشەی جاڤاسکریپت و هەڵدەسەنگێنرێن بۆ تەن (object) ی جاڤاسکریپت.

This means that you can use JSX inside of `if` statements and `for` loops, assign it to variables, accept it as arguments, and return it from functions:

ئەمە واتای ئەوەیە کە دەتوانیت JSX لەنێو ڕستەی `if` و لووپی `for` دا دابنێیت، وەک نرخ بیدەی بە گۆڕاوێک، وەری بگریت وەک ئارگیومێنت، و بیگەڕێنیتەوە لە نەخشەکانەوە:

```js{3,5}
function getGreeting(user) {
  if (user) {
    return <h1>سڵاو، {formatName(user)}!</h1>;
  }
  return <h1>سڵاو، نامۆ.</h1>;
}
```

### Specifying Attributes with JSX {#specifying-attributes-with-jsx}
### دەستنیشانکردنی تایبەتمەندییەکان (attributes) لەگەڵ JSX {#specifying-attributes-with-jsx}

You may use quotes to specify string literals as attributes:

دەتوانیت دەق بەکاربهێنیت تاوەکوو دەقەڕیزبەند وەک تایبەتمەندیی دەستنیشان بکەیت

```js
const element = <div tabIndex="0"></div>;
```

You may also use curly braces to embed a JavaScript expression in an attribute:

هەروەها دەتوانیت کەوانەی لوول بەکاربهێنیت بۆ تێهەڵکێشکردنی دەستەواژەی جاڤاسکریپت لەنێو تایبەتمەندییەکدا

```js
const element = <img src={user.avatarUrl}></img>;
```

Don't put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.

دەق بەکارمەهێنە لەدەوری کەوانەی لوول کاتێک دەستەواژەی جاڤاسکریپت تێهەڵکێش دەکەیت لەنێو تایبەتمەندییەکدا. پێویستە یان دەق (بۆ دەقەڕیزبەند) یان کەوانەی لوول (بۆ دەستەواژەکان) بەکاربێنی، نەوەک هەردووکیان لەنێو یەک تایبەتمەندییدا.

>**Warning:**
>
>Since JSX is closer to JavaScript than to HTML, React DOM uses `camelCase` property naming convention instead of HTML attribute names.
>
>For example, `class` becomes [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) in JSX, and `tabindex` becomes [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex).

>**هۆشداری:**
>
>بەهۆی ئەوەی JSX لە جاڤاسکریپت نزیکترە وەک لە HTML, DOM ی ڕیئاکت `camelCase` بەکاردەهێنێت وەک خووەنەریتی ناونانی تایبەتمەندییەکان وەک لە شێوازی ناونانی تایبەتمەندییەکانی HTML.
>
>بۆ نموونە، `class` دەبێتە [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) لە JSXدا, و `tabindex` دەبێتە [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex).

### Specifying Children with JSX {#specifying-children-with-jsx}

If a tag is empty, you may close it immediately with `/>`, like XML:

```js
const element = <img src={user.avatarUrl} />;
```

JSX tags may contain children:

```js
const element = (
  <div>
    <h1>سڵاو!</h1>
    <h2>شادمان بوومەوە بە بینینت لێرە.</h2>
  </div>
);
```

### JSX Prevents Injection Attacks {#jsx-prevents-injection-attacks}
### JSX ڕێگری دەکات لەهێرشی Injection {#jsx-prevents-injection-attacks}

It is safe to embed user input in JSX:

تێهەڵکێشکردنی تێخستەی بەکارهێنەر پارێزراوە لە JSXدا:

```js
const title = response.potentiallyMaliciousInput;
// ئەمە پارێزراوە:
const element = <h1>{title}</h1>;
```

By default, React DOM [escapes](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html) any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that's not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent [XSS (cross-site-scripting)](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.


DOM ی ڕیئاکت بەشێوەیەکی بنەڕەتیی هەموو نرخێک کە تێهەڵکێشی JSX بکرێت [دەپەڕێنێت](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html) بەر لە پووختەکردنیان. بۆیە، دڵنیایی دەدات کە هەرگیز ناتوانت هیچ شتێک inject بکەی کە بەڕوونی لە ئاپلیکەشنەکەتدا نەنووسرابێ. هەموو شتێک دەگۆڕدرێت بۆ دەقەڕیزبەند بەر لە پووختەکردن. ئەمە یارمەتی دەدات کە ڕێگری بکرێت لە هێرشی [XSS (cross-site-scripting)](https://en.wikipedia.org/wiki/Cross-site_scripting)

### JSX Represents Objects {#jsx-represents-objects}
### JSX نوێنەرایەتی تەنەکان دەکات {#jsx-represents-objects}


Babel compiles JSX down to `React.createElement()` calls.
Babel هەڵدەستێت بە کۆمپایڵکردنی JSX بۆ بانگهێشتکردنەکانی `React.createElement()`.

These two examples are identical:

ئەم دوو نموونەیە هاوتان:

```js
const element = (
  <h1 className="greeting">
    سڵاو، جیهان!
  </h1>
);
```

```js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'سڵاو، جیهان!'
);
```

`React.createElement()` performs a few checks to help you write bug-free code but essentially it creates an object like this:

`React.createElement()` هەندێک پشکنین ئەنجام دەدات تا یارمەتیت بدات کۆدی بێ هەڵە بنووسیت، بەڵام لە بنەڕەتدا تەنێک بەم شێوەیە درووست دەکات

```js
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'سڵاو، جیهان!'
  }
};
```

These objects are called "React elements". You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.

<<<<<<< HEAD
ئەم تەنانە پێیان دەوترێت "ڕەگەزەکانی ڕیئاکت" (React elements). دەتوانیت وەکوو وەسفێک بۆ ئەوەی دەتەوێت لەسەر شاشەکەت بیبینی بیریان لێ بکەیتەوە. ڕیئاکت ئەو تەنانە دەخوێنێتەوە و بەکاریان دەهێنێت بۆ درووستکردنی DOM و نوێکردنەوەی.

We will explore rendering React elements to the DOM in the next section.
=======
We will explore rendering React elements to the DOM in the [next section](/docs/rendering-elements.html).
>>>>>>> fb382ccb13e30e0d186b88ec357bb51e91de6504

لەبەشی دەهاتوودا باس لە پووختەکردنی ڕەگەزەکانی ڕیئاکت دەکەیت بۆ ناو DOM.

>**Tip:**
>
<<<<<<< HEAD
>We recommend using the ["Babel" language definition](https://babeljs.io/docs/editors) for your editor of choice so that both ES6 and JSX code is properly highlighted. This website uses the [Oceanic Next](https://labs.voronianski.com/oceanic-next-color-scheme/) color scheme which is compatible with it.

>**ڕێنمایی:**
>
>ئێمە پێشنیار دەکەین کە ["Babel" زمانی پێناسەکردن](https://babeljs.io/docs/editors) بەکاربهێنیت بۆ ئەو دەستکاریکەرەی بەکاری دەهێنیت تاوەکوو هەردووک ES6 و JSX بە شیاویی دەربکەون. ئەم ماڵپەرە ڕەنگەکانی[Oceanic Next](https://labs.voronianski.com/oceanic-next-color-scheme/) بەکاردەهێنێت کە گوونجاوە لەگەڵی.
=======
>We recommend using the ["Babel" language definition](https://babeljs.io/docs/editors) for your editor of choice so that both ES6 and JSX code is properly highlighted.
>>>>>>> fb382ccb13e30e0d186b88ec357bb51e91de6504
