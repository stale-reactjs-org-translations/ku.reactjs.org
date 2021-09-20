
<div dir="rtl">


# وه‌شانی کوردی reactjs.org

<<<<<<< HEAD
ئه‌م رێپۆیه‌ به‌ ئامانجی وه‌رگێڕانی دۆکیومنته‌یشنی ریاکت  (react)بۆ زمانی کوردی له‌ reactjs/reactjs.org فۆرک کراوه‌.
=======
1. Git
1. Node: any 12.x version starting with v12.0.0 or greater
1. Yarn: See [Yarn website for installation instructions](https://yarnpkg.com/lang/en/docs/install/)
1. A fork of the repo (for any contributions)
1. A clone of the [reactjs.org repo](https://github.com/reactjs/reactjs.org) on your local machine
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

به‌ره‌وپێشچوونه‌کانمان له‌ رێگه‌ی ئه‌م ماڵپه‌ڕه‌وه‌ ببینه‌: https://isreacttranslatedyet.com


## با ده‌ستپێبکه‌ین!

### پێویستییه‌کان


1. Git 
2. Node: وه‌شانی ٨ له‌ وه‌شانی ٨.٤.٠ به‌ره‌و سه‌ره‌وه‌
3. Yarn: https://yarnpkg.com/lang/en/docs/install

<<<<<<< HEAD
=======
The documentation is divided into several sections with a different tone and purpose. If you plan to write more than a few sentences, you might find it helpful to get familiar with the [contributing guidelines](https://github.com/reactjs/reactjs.org/blob/main/CONTRIBUTING.md#guidelines-for-text) for the appropriate sections.
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

### دامه‌زراندن

<<<<<<< HEAD
```
# کۆپییه‌ک له‌ رێپۆکه‌مان وه‌ربگره‌:
```
=======
1. `git checkout main` from any folder in your local `reactjs.org` repository
1. `git pull origin main` to ensure you have the latest main code
1. `git checkout -b the-name-of-my-branch` (replacing `the-name-of-my-branch` with a suitable name) to create a branch
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

<div dir="ltr">

<<<<<<< HEAD
```
git clone https://github.com/reactjs/ku.reactjs.org.git
```
=======
1. Follow the ["Running locally"](#running-locally) instructions
1. Save the files and check in the browser
  1. Changes to React components in `src` will hot-reload
  1. Changes to markdown files in `content` will hot-reload
  1. If working with plugins, you may need to remove the `.cache` directory and restart the server
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

</div>

```
# بچۆره‌ ناو لقی سه‌ره‌کی پرۆژه‌که‌
```

<div dir="ltr">

1. `git add -A && git commit -m "My message"` (replacing `My message` with a commit message, such as `Fix header logo on Android`) to stage and commit your changes
1. `git push my-fork-name the-name-of-my-branch`
1. Go to the [reactjs.org repo](https://github.com/reactjs/reactjs.org) and you should see recently pushed branches.
1. Follow GitHub's instructions.
<<<<<<< HEAD
1. If possible, include screenshots of visual changes. A Netlify build will also be automatically created once you make your PR so other people can see your change.
```
# په‌یوه‌ستییه‌كانی npm داببه‌زێنه‌
Yarn
```
 
### جێبه‌جێكردن
=======
1. If possible, include screenshots of visual changes. A [Netlify](https://www.netlify.com/) build will also be automatically created once you make your PR so other people can see your change.
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28

```
#  بۆ ده‌ستپێكردنی سێرڤه‌ری خۆكار كه‌ له‌ Gatsby وه‌رگیراوه‌

```
# په‌یوه‌ستییه‌کانی npm داببه‌زێنه‌
Yarn
```
 
### جێبه‌جێکردن

```
#  بۆ ده‌ستپێکردنی سێرڤه‌ری خۆکار که‌ له‌ Gatsby وه‌رگیراوه‌
yarn dev
```
[![asciicast](https://asciinema.org/a/231801.svg)](https://asciinema.org/a/231801)

ئه‌م به‌سته‌ره‌ له‌ گه‌ڕۆکه‌کاتدا بکه‌ره‌وه‌:
http://localhost:8000


## به‌شداری له‌ وه‌رگێڕان

<<<<<<< HEAD
زۆرسوپاس بۆ هاوکاریت له‌ وه‌رگێڕانی دۆکیومێنته‌یشنی ریاکت بۆ زمانی کوردی، با ده‌ستپێبکه‌ین!

### په‌ره‌یه‌ک هه‌ڵبژێره‌ بۆ وه‌رگێڕان

له‌ [بابه‌تی #١]( https://github.com/reactjs/ku.reactjs.org/issues/1)، ئه‌و په‌ڕانه‌ی که‌ پێویستییان به‌ وه‌رگێڕانه‌، ریزکراون. پێش هه‌موو شتێک، پێویسته‌ له‌ په‌ڕه‌کانی Core Pages ده‌ستپێبکه‌ین به‌و ریزبه‌ندییه‌ی ئاماژه‌ی پێکراوه‌. یه‌کێک له‌و په‌ڕانه‌ی که‌ حه‌زت لێیه‌و ئاشنای پێی، هه‌ڵبژێره‌.

تێبینی: ئه‌و په‌ڕانه‌ی که‌ ئه‌م هێمایه‌یان [x] به‌ ته‌نیشته‌وه‌یه‌، وه‌رگێردراون. ئه‌گه‌ر ناوی هه‌رکه‌سێک له‌ ته‌نیشت په‌ڕه‌یه‌ک دانرابێت، ئه‌وا، ئه‌رکی وه‌رگێڕانی ئه‌و په‌ڕه‌یه‌ له‌ ئه‌ستۆی ئه‌و که‌سه‌دایه‌.

له‌رێگه‌ی نووسینی کۆمێنته‌وه‌ له‌سه‌ر[بابه‌تی #١]( https://github.com/reactjs/ku.reactjs.org/issues/1)، مه‌ینته‌ینه‌ره‌کان ئاگاداربکه‌نه‌وه‌ له‌و په‌ڕه‌یه‌ی ده‌تانه‌وێت وه‌ریبگێڕن، دوای په‌سه‌ند کردنی، ناوی خۆتان له‌ ته‌نیشت ئه‌و په‌ڕه‌یه‌ ده‌بینن و ئه‌رکی وه‌رگێڕانی ده‌گرنه‌ ئه‌ستۆ.

### لقێک دروستبکه‌

لقێک له‌ رێپۆی سه‌ره‌کی وه‌ربگره‌ و کۆپییه‌کی له‌سه‌ر سیستمه‌که‌ی خۆت دابنێ. دڵنیابه‌ره‌وه‌ که‌ له‌سه‌ر لقی `master` یت. لقێکی نوێ دروستبکه‌و ناوێکی لێبنێ.

```
# ناوی به‌کارهێنه‌ری گیتهه‌به‌که‌ی خۆت له‌م به‌سته‌ره‌ی خواره‌وه‌ دابنێ
```
<div dir="ltr">

```
1. git clone git@github.com:[username]/ku.reactjs.org.git
2. cd ku.reactjs.org
3. git checkout master
```

</div>

```
# به‌ دڵی خۆت، ناوی ئه‌و لقه‌ی دروستی ده‌که‌یت له‌ خواره‌وه‌ دابنێ
```

<div dir="ltr">

```
4. git checkout -b the-name-of-my-branch
```

</div>

### گۆڕانکاری بکه‌

شێوازی جێبه‌جێکردنی پرۆژه‌که‌ له‌ سه‌ره‌وه‌دا باسکراوه‌. ئه‌و فایلانه‌ی که‌ گۆرانکاریت تێدا کردوون، سه‌یڤییان بکه‌ و و ئه‌نجامه‌که‌ی له‌ گه‌ڕۆکه‌که‌تدا ببینه‌.  ئه‌نجامی ئه‌و فایلانه‌ی له‌ فۆلده‌ری  `src`و `content` ده‌ستکاریکراون، به‌ شێوه‌یه‌کی خۆکار له‌ گه‌ڕۆکه‌که‌تدا، نیشانده‌درێت. 


### تێست بکه‌

ئه‌و گۆڕانکارییانه‌ی کردووتن، له‌ گه‌ڕۆکی جیاواز و له‌سه‌ر شاشه‌ی گه‌وره‌و و شاشه‌ی مۆبایل تاقیبکه‌ره‌وه‌. پاشان، له‌ رێگه‌ی ئه‌م کۆمانده‌ی خواره‌وه‌ له‌ فۆلده‌ری سه‌ره‌کی پرۆژه‌که‌، تێسته‌که‌ن ره‌ن بکه‌. ئه‌گه‌ر ته‌نها وه‌رگێڕانت کردووه‌، نابێت هیچ کێشه‌یه‌کت لێره‌دا بۆ دروست ببێت.

<div dir="ltr">

```
yarn check-all
```

</div>

### گۆڕانکارییه‌کانت بنێره‌ بۆمان

گۆرانکارییه‌کان به‌ نووسینی مه‌سجێکی گونجاو کۆمیت بکه و بۆ سێرڤه‌ری گیتهه‌بی بنێره‌. پاشان پوڵ ریکوێستێک بنێره‌ بۆ لقی ku له‌ رێپۆ سه‌ره‌کییه‌که‌وه‌. 

```
# مه‌سجه‌که‌ت له‌ خواره‌وه‌دا بنووسه 
```

<div dir="ltr">

```
1. git add -A && git commit -m "the-message" 
```
</div>

```
# ناوی فۆرکه‌که‌ت و برانچه‌که‌ت له‌ خواره‌وه‌دا دابنێ
```

<div dir="ltr">

```
2. git push my-fork-name the-name-of-my-branch
```
</div>

### پوڵ ریکوێست

پاش ناردنی گۆرانکارییه‌کان بۆ فۆرکه‌که‌ی خۆتان، پوڵ ریکوستێک له‌و فۆرکه‌وه‌ بنێرن بۆ ku

<img width="564" alt="screenshot 2019-03-05 at 13 50 47" src="https://user-images.githubusercontent.com/408568/53810062-02e3e700-3f4e-11e9-82cb-bd986d8b8c69.png">


### که‌مێک چاوه‌ڕێی پێداچوونه‌وه‌ بکه‌

گۆرانکارییه‌کانت له‌ لایه‌ن تیمی مه‌ینته‌ینه‌ره‌وه‌، پێداچوونه‌وه‌یان بۆ ده‌کرێت و بۆچوونی خۆیان به‌ ئێوه‌ ده‌ڵێن. پاش په‌سه‌ند کردن، گۆرانکارییه‌کانتان زیاد ده‌کرێت. 

</div>
=======
## License
Content submitted to [reactjs.org](https://reactjs.org/) is CC-BY-4.0 licensed, as found in the [LICENSE-DOCS.md](https://github.com/open-source-explorer/reactjs.org/blob/main/LICENSE-DOCS.md) file.
>>>>>>> 0bb0303fb704147452a568472e968993f0729c28
