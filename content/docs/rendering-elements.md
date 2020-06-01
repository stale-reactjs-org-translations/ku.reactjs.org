---
id: rendering-elements
title: ڕێندەرکردنی (بەدەستخستنی) پێکهاتەکان
permalink: docs/rendering-elements.html
redirect_from:
  - "docs/displaying-data.html"
prev: introducing-jsx.html
next: components-and-props.html
---

(react)پێکهاتەکان بچووکترین بەردی بناغەی بەرنامەی ڕیاکتن 


:پێکهاتەیەک پێناسەی ئەوە دەکات کە تۆ دەتەوێت چی ببینیت لەسەر شاشەکە

```js
const element = <h1>سڵاو, جیهان</h1>;
```

.جیا لە پێکهاتەی وێبگەڕی (دۆم)، پێکهاتەی ڕیاکت شتانێکی سادەن ،ئاسانن بۆ دروست کردن،وە (ڕیاکت دۆم)گرنگی بە نوێ بونەوەی (دۆم) دەدات بۆ گونجاندنی پێکهاتەکانی ڕییاکت
>**تێبینی:**
>
>یەکێک لەوانیە پێکهاتەکان لەگەڵ یەکێک لە  چەمکە زۆر ناسراوەکان تێکەڵ بکات کە ئەویش کۆمپۆنێنتە . 
ئێمە کۆمپۆنێنت لە [دەزگای داهاتوو] دەناسێنین پێکهاتەکان ئەوانەن کە کۆمپۆنێت پێک دێنن, 
وە ئێمەش داوات لیدەکەین ئەم بەشە بخوێنیتەوە پێش ئەوە برۆی بۆ پەڕەی داهاتوو
 (/docs/components-and-props.html)
 
##   (ڕێندەرکردنی پێکهاتەیەک بۆ (دۆم  {#rendering-an-element-into-the-dom}

:کەت(Html)لە شوێنێکە لە ناو فایلی `<div>`بابڵێین 
```html
<div id="root"></div>
```

.ئێمە پێی دەڵێین("ڕوت" دۆم نۆد)لەبەرئەوەی لەناویدا هەموو شتەکان لە لایەن (ڕییەکت دۆم)بەڕێوە دەچێت


<<<<<<< HEAD
ئەپەکانی بەس بە ڕیاکت دروستکراون تەنها زۆر جار یەک ڕەگی دۆم نۆدیان هەیە.
ئەگەر تۆ ڕیاکت یەکبەخەی بۆ ناو ئەپێک کە بوونی هەبێ تۆ ئەتوانی چەنێک ڕەگی دۆم نۆدی جیاکراووەت هەبێ بتەوێت
`ReactDOM.render()` بۆ ڕیندەرکردنی پێکهاتەیەکی ڕیاکت بۆ (ڕووت دۆم نۆد)هەردوکیان تێپەڕدەبن بۆ ڕییەکت دۆم   :
=======
To render a React element into a root DOM node, pass both to [`ReactDOM.render()`](/docs/react-dom.html#render):
>>>>>>> b4b59062e59d56da37274c6de1fa4a134d2d8f49

`embed:rendering-elements/render-an-element.js`

[](codepen://rendering-elements/render-an-element)

سڵاو، جیهان" پیشاندەدا لەسەر پەڕەکە"
## نویکردنەوەی ئەو پێکهاتەنەی ڕیندەرکراون {#updating-the-rendered-element}


.پێکهاتەکانی ڕیاکت [نەگۆرە](https://en.wikipedia.org/wiki/Immutable_object)
:یەکجار پێکهاتەیەک درووستبکە، ناتوانی ئەوە منداڵە یان سیفەتە بگۆڕی پێکهاتەیەک وەک چوارچێوەیەکی تاکە لە فیلمێکدا
 دەبینێت لە خاڵێکی دیاریکراوی کات دا(ui) ڕۆڵی 

<<<<<<< HEAD
=======
With our knowledge so far, the only way to update the UI is to create a new element, and pass it to [`ReactDOM.render()`](/docs/react-dom.html#render).
>>>>>>> b4b59062e59d56da37274c6de1fa4a134d2d8f49


بریتییە لە دروستکردنی پێکهاتەی نوێ، وە کردنەناو (ui)لەگەڵ ئەو زانیاریانەەی هەمانە ، تاکە ڕێگە بۆ نوێ کردنەوەی 
`ReactDOM.render()`.

:ڕەچاوی نمونەی چکەچک کردنی کاتژمێر
`embed:rendering-elements/update-rendered-element.js`

[](codepen://rendering-elements/update-rendered-element)

<<<<<<< HEAD
=======
It calls [`ReactDOM.render()`](/docs/react-dom.html#render) every second from a [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) callback.
>>>>>>> b4b59062e59d56da37274c6de1fa4a134d2d8f49

 [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) هەموو چرکەیەک لە `ReactDOM.render()` پێی ئەڵێن 
>**تێبینی:**
>
<<<<<<< HEAD
> لە بڕگەکانی دواتر فێردەبین چۆن کۆدەکان ئەوها دەستدەکەون خراونەتە ناو .`ReactDOM.render()`لە کرداری(عەمەلی)، زۆربەی بەرنامەکانی رییاکت تەنها یەکجار پێیان دەوترێ
[ستەیتفول کۆمپۆنێنت](/docs/state-and-lifecycle.html).
=======
>In practice, most React apps only call [`ReactDOM.render()`](/docs/react-dom.html#render) once. In the next sections we will learn how such code gets encapsulated into [stateful components](/docs/state-and-lifecycle.html).
>>>>>>> b4b59062e59d56da37274c6de1fa4a134d2d8f49
>
>ئێمە پێشنیار دەکەین کە بابەتەکان نەپەڕێنیت چونکە لەسەر یەک بونیاد دەنرێن

## ڕییاکت تەنها بۆ ئەو نوێکردنەوانەی کە پێویستە {#react-only-updates-whats-necessary}


ڕیاکتی دۆمەکە پێکهاتەکان و مناڵەکانی بەراورد ئەکات بەوانەی پیش خۆی
تەنها ئەو ئەو ئەبدەیتانە جێبەجەێدەکن 
کە پێویستن بۆ ئەوەی دۆم بگەیەنە شێوازی خواستراو

تۆ دەتوانی پشتڕاستی بکەیتەوە لەلایەن پشکنینی [کۆتا نموونە](codepen://rendering-elements/update-rendered-element)   
:لەگەڵ ئامڕازەکانی وێبگەڕەکە

![DOM inspector showing granular updates](../images/docs/granular-dom-updates.gif)

<<<<<<< HEAD

هەرچەنە ئێمە پێکهاتەیەک دروست دەکەین کە باسی هەموو یوو ئای لەسەر هەموو چکە
تەنها ئەو نوسینانەی دۆم کە  بناغەیان گۆڕابێ لەلایەن ڕییاکت دۆم ئەپدەیت 


بەپێی ئەزموونی ئێمە، بە بیرکردنەوە لە وەی ئایە یوو ئای چۆن دەرکەوێ لە هەر ساتێکدا 
وەک لەوەی کە چۆن بیگۆڕین لەگەڵ کاتدا 
کە پۆلێک لە بەگ (کەموکوڕی) لەناو دەبات
=======
Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM.

In our experience, thinking about how the UI should look at any given moment, rather than how to change it over time, eliminates a whole class of bugs.
>>>>>>> b4b59062e59d56da37274c6de1fa4a134d2d8f49
