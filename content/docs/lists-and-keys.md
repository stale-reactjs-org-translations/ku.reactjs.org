---
id: lists-and-keys
title: لیستەکان و کییەکان 
permalink: docs/lists-and-keys.html
prev: conditional-rendering.html
next: forms.html
---

یەکەم جار، با پێداچوونەوە بکەین لەسەر گۆڕانکاری کردنی لیستەکان لە جاڤاسکریپتدا.
 
 
  سەیرێکی ئەم کۆدەی خوارەوەبکە، فەکشنی  [`()map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 
 مان بەکارهێناوە بۆ وەرگرتنی نرخەکانی ئەڕەی نەمبەرس وە دوو ئەوەنە کردنی نرخەکانی، ئەڕەیەکی تازەمان ناساندوە بەناوی دەبڵید   
 ئەو نرخانەی فەکشنی ()map دەیگەڕێنێتەوە دەیانخەینە ناو ئەڕەیە تازەکە بۆ ڤاریبڵی دەبڵد 
پاشان لۆگی دەکات. 
 

```javascript{2}
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
```

ئەم کۆدە ئەمە لۆگ دەکات   `[2, 4, 6, 8, 10]`   لە کۆنسڵ.


لە ڕیاکتدا ، گواستنەوەی ئەڕەیەکان بۆ کۆمەڵە لیستێک لە [ئیلیمێنتەکان ](/docs/rendering-elements.html) بە نزیکەی باسی لێوە کرا.


### ڕێندەرکردنی زیاد لەیەک کۆمپۆنێنت{#rendering-multiple-components}

دەتوانی کۆمەڵێک لە ئیلیمێنت دروستبکەی وە بیانکەی بە [بەشێک لە JSX   ](/docs/introducing-jsx.html#embedding-expressions-in-jsx) بە بەکارهێنانی کەوانەی لوول {}.

لەخوارەوە، لووپ دەکەین بەناو ئەڕەی نەمبەرس بە بەکارهێنانی فەکشنی  [`()map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)  لە جاڤاسکریپتدا، 
  هەر ئیلیمێنتێک لە `<li>` دەگەڕێتەوە لەکۆتایدا، ئیلیمێنتەکانی ناو ئەڕەیەکە دەخەینە ناو  `listItems`.

  

```javascript{2-4}
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
```

ئەڕەی `listItems` دەخەینە ناو ئیلیمینتی `<ul>`، پاشان [ڕێندەر دەکرێت لە DOM دا](/docs/rendering-elements.html#rendering-an-element-into-the-dom).

```javascript{2}
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

[**تاقیبکەرەوە لە کۆد پێن**](https://codepen.io/gaearon/pen/GjPyQr?editors=0011)

ئەم کۆدە لیستێک لە ژمارە پیشان دەدا لە بەینی 1 و 5

### کۆمپۆنێنتێکی سادەی لیست {#basic-list-component}

زۆربەی کات باشترە لیستێک ڕێندەر کەیت لە  ناو [کۆمپۆنێنتێکا](/docs/components-and-props.html).

دەتوانین نموونەکەی پێشوو بنیاد بنێینەوە  بیکەین بە کۆمپۆنێنتێک ئەڕەی پەسەندکا  کە ژمارەی تێدابێت وە لیستێک لە ئیلیمێنتەکانی پیشاندا.

```javascript{3-5,7,13}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

کاتێک ئەم کۆدە ڕەن دەکەیت، ئاگاداریەک وەردەگریت کە ئەڵێت ئاتیمەکانی لیستەکە پێویستە کیی یان هەبێت.کی تایبەتمەندیەکە کە نرخەکەی پیت یان ژمارەی بێ وێنەیە کاتێک لیست لە ئیلیمێنت دروست دەکەیت پێویستە هەیان بێت.گفتوگۆی لەسەر دەکەین کە بۆچی کی گرنگە لە بەشی داهاتوودا.

با بە دانانی کی  بۆ ئایتمەکانی لیستەکەمان لەناو ()numbers.map کێشەی نەبوونی کی چارەسەر بکەین.

```javascript{4}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

[**تاقیبکەرەوە لە کۆد پێن**](https://codepen.io/gaearon/pen/jrXYRR?editors=0011)

## کییەکان {#keys}

کییەکان یارمەتی ڕیاکت دەدەن کە بزانێت چی ئاییتمێک گۆڕانکاری بەسەر هاتووە، زیاد کراوە یاخود سڕاوەتەوە.

```js{3}
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

باشترین ڕێگا بۆ دەستنییشانکردنی کی بەکارهێنانی پیت یان ژمارەی بێ وێنەیە کە ناسێنەری ئایتمێکی لیستەکەیە لە نێوان ئاتمەکان. زۆربەی کات ئایدیەکانی  ناو داتابەس وەکو کی بەکاردێت.

```js{2}
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

کاتێک ئایدیەکی جێگیرت نییە دەتوانی ئیندێکسی ئایتمەکە بەکار بێنیت وەکو کی.

```js{2,3}
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

ئێمە پێشنیاری ئەوە ناکەین ئیندێکس بەکار بێنیت وەکو کی  چونکە گەر جێگۆرکێیان بەسەرا بێت، ئەنجامی خراپی دەبێت لە پێرفۆڕمانس وە لەوانەییە ببێت بە کێشە لەگەڵ ستەتی کۆمپۆنێنتەکە. سەیرێکی ئارتیکڵەکەی ڕۆبین پۆکۆرنی بکە بە ناونیشانی  [ڕوونکردنەوەیەکی تەواو لەسەر ئەنجامە خراپەکانی بەکارهێنانی ئیندێکس وەکو کی](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318).  گەر ئەوەت هەڵبژاردووە کە کی بۆ ئایتمەکان دانەنێیت ئەوا ڕیاکت بەشێوە سەرەکیەکە خۆی ئیندێکسەکان بەکار دەهێنێت وەکو کی.

ئەمەش [ڕوونکردنەوەیەکیی تەواو دەربارەی بۆچی کییەکان پێویستن ](/docs/reconciliation.html#recursing-on-children) ئەگەر ئارەزووی زیاتر فێربوون دەکەیت.

### زیادکردنی کۆمپۆنێنتەکان و کییەکان {#extracting-components-with-keys}

کییەکان تەنها کاریگەریان دەبێت کاتێک ئەڕەی هەبێت

بۆنموونە،  ئەگەر تۆ  کۆمپۆنێنتی `ListItem` [زیاد کرد ](/docs/components-and-props.html#extracting-components), پێویستە کییەکە لە ناو `<ListItem/>`    ئیلیمێنتەکانی ئەڕەیەکە بێت نەک لە ناو  `<ul>` ئیلیمێنتەکانی `ListItem` کە خۆی.

**نموونەی : بەکارهێنانی کی بە شێوەیەکی هەڵە**

```javascript{4,5,14,15}
function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Wrong! The key should have been specified here:
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

**نموونەی : بەکارهێنانی کی بە شێوەیەکی ڕاست**

```javascript{2,3,9,10}
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

[**تاقیبکەرەوە لە کۆد پێن**](https://codepen.io/gaearon/pen/ZXeOGM?editors=0010)

یاسایەکی گرنگ ئەوەیە کە ئیلیمێنتەکانی ناو ()map پێویستە کییان هەبێت.

### پێویستە کییەکان بێ وێنەبن (دووبارە نەبنەوە)  لەنێوان کییەکانی تر {#keys-must-only-be-unique-among-siblings}

ئەو کییانەی بەکاردێن لەگەڵ ئەڕەیەکدا پێویستە بێ وێنەبن، بەڵام پێویست ناکات بەشێوەیەکی گشتی بێ وێنەبن، واتا دەتوانیین کییەکان بەکار بێنینەوە لە ئەڕەیەکی تردا.

```js{2,5,11,12,19,21}
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);
```

[**تاقیبکەرەوە لە کۆد پێن**](https://codepen.io/gaearon/pen/NRZYGN?editors=0010)

کییەکان ئیش دەکەن وەکو ڕێنوێنیکەر بۆ ڕیاکت نابن بە بەشێک لە کۆمپۆنێنتەکە (واتا پیشان نادرێن). ئەگەر بتەوێت ئەو نرخە لە ناو کۆمپۆنێنتەکەت پیشان بدرێت وەکو پرۆپ بیکە بە بەشێک لە کۆمپۆنێنتەکە بەڵام بە ناوێکی جیاواز.

```js{3,4}
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
```

لە نموونەکای سەرەوەدا کۆمپۆنێنتی `Post`،  `props.id` پیشان دەدات بەڵام`props.key` نا.

###   تێکهەڵکێشکردنی   ()map    بۆ ناو JSX    {#embedding-map-in-jsx}
 
لە نموونەکەی سەرەوەدا ڤاریبڵی `listItems`  بە جیا ناساندوومانە پاشان کردوومانەتە ناو JSX.

```js{3-6}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

JSX   ڕێگەدەدات [بە تێکەڵ کردنی هەموو دەربڕینێک ](/docs/introducing-jsx.html#embedding-expressions-in-jsx) لە ناو کەوانەی لوول کەواتە ئەتوانین ()map  لەگەڵیاندا بنووسین لە ئەنجامدا .

```js{5-8}
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
```

[**تاقیبکەرەوە لە کۆد پێن**](https://codepen.io/gaearon/pen/BLvYrB?editors=0010)

هەندێ کات ئەم ئەنجامە کۆدێکی ڕوونتردەدات، بەڵام ئەم ستایلە لەوانەیە کێشەت بۆ دروست کات . وەک لە جاڤا سکریپتدا، ئەوە دێتە پێش کە بڕیار بدەیت ئەوە دەهێنێت کە ڤاریبڵێکی تر بنووسیت بۆ ئەوەی خوێندنەوەی ئاسان ببێت. ئەوە بزانە کە ئەگەر ناو ()map زۆر تێکەڵ و ئاڵۆز بوو. ئەوە باشترە کە [کۆمپۆنێنتێك زیاد بکەیت](/docs/components-and-props.html#extracting-components).
