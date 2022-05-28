# Frost componets
A collection of components built with AlpineJS and Tailwind for use with the Frost Starter Kit made available to Statamic.

The components are using my own adoption of the ABEM styling convention.
- [ABEM pattern library](https://imarc-boilerplate.netlify.app/pattern-library/docs/abem.html)
- [Css tricks writing on the topic of ABEM](https://css-tricks.com/abem-useful-adaptation-bem/)


## Scroller
A horizontal scroll component which supports scrolling different html elements across the screen.

``` 
<div x-cloak x-data="scroller" @resize.window="onWindowResize" @load.window="onDocumentLoad" class="c-scroller" :class="{'-ready':ready}">
  <ul class="c-scroller__list -original">
    <li class="c-scroller__item -original pr-8">
      <p>
        I am text and can be <strong>bold</strong> and conatain contain images or other html elments <button
        class="bg-slate-500 text-white p-2 py-1 mx-4 rounded-md">like a button</button>
      </p>
    </li>
  </ul>
</div>
```