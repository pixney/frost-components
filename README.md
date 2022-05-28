# Frost componets
A collection of components built with AlpineJS and Tailwind for use with the Frost Starter Kit made available to Statamic.

The components are using my own adoption of the ABEM styling convention.
- [ABEM pattern library](https://imarc-boilerplate.netlify.app/pattern-library/docs/abem.html)
- [Css tricks writing on the topic of ABEM](https://css-tricks.com/abem-useful-adaptation-bem/)


## How to use
Even though the intention of these components are to be distributed with the frost starter kit, they can be used in other scenarios as well.

To use them in other scenarios, you need tailwind setup. Then include the correct tailwind plugin from this repository to your configuration file. 

Copy the markup into your html file and make sure you import the component to your javascript file.

## Components
### Scroller
A horizontal scroll component which supports scrolling different html elements across the screen.

#### Html markup
Simply copy and paste the following to your website.

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