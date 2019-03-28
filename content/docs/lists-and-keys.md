---
id: lists-and-keys
title: لیستەکان و کیەکان 
permalink: docs/lists-and-keys.html
prev: conditional-rendering.html
next: forms.html
---

یەکەم جار، با پێداچوونەوە بکەین لەسەر گۆڕانکاری کردنی لیستەکان لە جاڤاسکریپتدا

 
 
  سەیرێکی ئەم کۆدەی خوارەوەبکە، فەکشنی  [`ماپ()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 
 مان بەکارهێناوە بۆ وەرگرتنی نرخەکانی ئەڕەی نەمبەرس وە دوو ئەوەنە کردنی نرخەکانی، ئەڕەیەکی تازەمان ناساندوە بەناوی دەبڵید   
 ئەو نرخانەی فەکشنی ماپ() ئەیانگێرێتەوە ئەیانخەینە ناو ئەڕەیە تازەکە بۆ ڤاریبڵی دەبڵید 
پاشان لۆگی ئەکات 
 

```javascript{2}
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
```

ئەم کۆدە ئەمە لۆگ دەکات   `[2, 4, 6, 8, 10]`   لە کۆنسڵ.

لە ڕیئاکتدا ، گواستنەوەی ئەڕەیەکان بۆ کۆمەڵە لیستێک لە [ئیلیمێنتەکان ](/docs/rendering-elements.html) بە نزیکەی باسی لێوە کرا

### ڕێندەرکردنی زیاد لەیەک کۆمپۆنێنت{#rendering-multiple-components}

ئەتوانی کۆمەڵێک لە ئیلیمێنت دروستبکەی وە بیانکەی بە [بەشێک لە جەی ئێس ئێکس  ](/docs/introducing-jsx.html#embedding-expressions-in-jsx) بە بەکارهێنانی کەوانەی لوول {}.

لەخوارەوە، لووپ ئەکەین بەناو ئەڕەی نەمبەرس بە بەکارهێنانی فەکشنی  [`ماپ()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)  لە جاڤاسکریپتدا، 
  هەر ئیلیمێنتێک لە <لیست ئایتمێک> ئەگەڕێتەوە لەکۆتایدا، ئیلیمێنتەکانی ناو ئەڕەیەکە ئەخەینە ناو لیست ئایتمیس  

  

```javascript{2-4}
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
```

ئەڕەی لیست ئاتمیس ئەخەینە ناو ئیلیمینتی <یو ئێڵ>، پاشان [ڕێندەر ئەکرێت لە دۆم دا](/docs/rendering-elements.html#rendering-an-element-into-the-dom)

```javascript{2}
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

[**تاقیبکەرەوە لە کۆد پێن**](https://codepen.io/gaearon/pen/GjPyQr?editors=0011)

ئەم کۆدە لیستێک لە ژمارە پیشان ئەدا لە بەینی 1 و 5

### کۆمپۆنێنتێکی سادەی لیست {#basic-list-component}

زۆربەی کات باشترە لیستێک ڕێندەر کەیت لە  ناو [کۆمپۆنێنتێکا](/docs/components-and-props.html)

ئەتوانین نموونەکەی پێشوو بنیاد بنێینەوە  بیکەین بە کۆمپۆنێنتێک ئەڕەی پەسەندکا  کە ژمارەی تێدابێت وە لیستێک لە ئیلیمێنتەکانی پیشاندا

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

کاتێک ئەم کۆدە ڕەن دەکەیت، ئاگاداریەک وەردەگریت کە ئەڵێت ئاتیمەکانی لیستەکە پێویستە کی یان هەبێت.کی تایبەتمەندیەکە کە نرخەکەی پیت یان ژمارەی بێ وێنەیە کاتێک لیست لە ئیلیمێنت دروست ئەکەیت پێویستە هەیان بێت.گفتوگۆی لەسەر ئەکەین کە بۆچی کی گرنگە لە بەشی داهاتوودا

با بە دانانی کی  بۆ ئایتمەکانی لیستەکەمان لەناو نەمبەرس.ماپ() کێشەی نەبوونی کی چارەسەر بکەین

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

## کیەکان {#keys}

کیەکان یارمەتی ڕیائاکت ئەدەن کە بزانێت چی ئاییتمێک گۆڕانکاری بەسەر هاتووە، زیاد کراوە یاخود سڕاوەتەوە

```js{3}
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

باشترین ڕێگا بۆ دەستنییشانکردنی کی بەکارهێنانی پیت یان ژمارەی بێ وێنەیە کە ناسێنەری ئایتمێکی لیستەکەیە لە نێوان ئاتمەکان. زۆر بەی کات ئایدیەکانی  ناو داتابەس وەکو کی بەکاردێت

```js{2}
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

کاتێک ئایدیەکی جێگیرت نییە ئەتوانی ئیندێکسی ئایتمەکە بەکار بێنیت وەکو کی

```js{2,3}
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

ئێمە پێشنیاری ئەوە ناکەین ئیندێکس بەکار بێنیت وەکو کی  چونکە گەر جێگۆرکێیان بەسەرا بێت، ئەنجامی خراپی ئەبێت لە پێرفۆڕماسا وە لەوانەییە ببێت بە کێشە لەگەڵ ستەیتی کۆمپۆنێنتەکە. سەیرێکی ئارتیکڵەکەی ڕۆبین پۆکۆرنی بکە بە ناونیشانی  [ڕوونکردنەوەیەکی تەواو لەسەر ئەنجامە خراپەکانی بەکارهێنانی ئیندێکس وەکو کی](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318).  گەر ئەوەت هەڵبژاردووە کە کی بۆ ئایتمەکان دانەنێیت ئەوا ڕیئاکت بەشێوە سەرەکیەکە خۆی ئیندێکسەکان بەکار دەهێنێت وەکو کی

ئەمەش [ڕوونکردنەوەیەکیی تەواو دەربارەی بۆچی کیەکان پێویستن ](/docs/reconciliation.html#recursing-on-children) ئەگەر ئارەزوی زیاتر فێربوون دەکەیت

### زیادکردنی کۆمپۆنێنتەکان و کییەکان {#extracting-components-with-keys}

کییەکان تەنها کاریگەریان دەبێت کاتێک ئەڕەی هەبێت

بۆنموونە،  ئەگەر تۆ  کۆمپۆنێنتی لیست ئایتم [زیاد کرد ](/docs/components-and-props.html#extracting-components), پێویستە کییەکە لە ناو    <لیست ئایتم /> ئیلیمێنتەکانی ئەڕەیەکە بێت نەک لە ناو  <ڵ یوو> ئیلیمێنتەکانی لیست ئایتمەکە خۆی

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
    <ListItem key={number.toString()}
              value={number} />
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

[**تاقیکەرەوە لە کۆد پێن**](https://codepen.io/gaearon/pen/ZXeOGM?editors=0010)

یاسایەکی گرنگ ئەوەیە کە ئیلیمێنتەکانی ناو ماپ() پێویستە کییان هەبێت

### پێویستە کییەکان بێ وێنەبن (دووبارە نەبنەوە)  لەناو کیەکانی تر {#keys-must-only-be-unique-among-siblings}

ئەو کییانەی بەکاردێن لەگەڵ ئەڕەیەکدا پێویستە بێ وێنەبن، بەڵام پێویست ناکات بەشێوەیەکی گشتی بێ وێنەبن، واتا ئەتوانین کیەکان بەکار بێنینەوە لە ئەڕەیەکی تردا

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

[**تاقیکەرەوە لە کۆد پێن**](https://codepen.io/gaearon/pen/NRZYGN?editors=0010)

کییەکان ئیش دەکەن وەکو پۆینتەرێک بۆ ڕیئاکت نابن بە بەشێک لە کۆمپۆنێنتەکە (واتا پیشان نادرێن). ئەگەر بتەوێت ئەو نرخە لە ناو کۆمپۆنێنتەکەت پیشان بدرێت وەکو پرۆپ بیکە بە بەشێک لە کۆمپۆنێنتەکە بەڵام بە ناوێکی جیاواز

```js{3,4}
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
```

لە نموونەکای سەرەوەدا کۆمپۆنێنتی پۆست، پرۆپس ئایدی پیشان دەدات بەڵام پرۆپس کی نا

###   خستنە ناو  ماپ() بۆ جەی ئێس ئێکس   {#embedding-map-in-jsx}

لە نموونەکەی سەرەوەدا ڤاریبڵی لیست ئایتمیس بە جیا ناساندووە پاشان کردوومانەتە ناو جەی ئێس ئێکس

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

جەی ئێس ئێکس ڕێگەدەدات [بە تێکەڵ کردنی هەموو دەربڕینێک ](/docs/introducing-jsx.html#embedding-expressions-in-jsx) لە ناو کەوانەی لوول کەواتە ئەتوانین ماپ()  لەگەڵیاندا بنووسین لە ئەنجامدا 

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

[**تاقیکەرەوە لە کۆد پێن**](https://codepen.io/gaearon/pen/BLvYrB?editors=0010)

هەندێ کات ئەم ئەنجامە کۆدێکی ڕوونتردەدات، بەڵام ئەم ستایلە لەوانەیە کێشەت بۆ دروست کات . وەک لە جاڤا سکریپتدا، ئەوە دێتە پێش کە بڕیار بەیت ئەوە دەهێنێت کە ڤاریبڵێکی تر بنووسیت بۆ ئەوەی خوێندنەوەی ئاسان بێت. ئەوە بزانە کە ئەگەر ناو ماپ() زۆر تێکەڵ بوو. ئەوە باشترە کە [کۆمپۆنێنتێك زیاد کەیت](/docs/components-and-props.html#extracting-components)
