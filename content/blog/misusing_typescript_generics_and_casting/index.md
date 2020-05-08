---
template: post
title: Misusing typescript generics
slug: hello_world
date: "2020-05-08T23:46:37.121Z"
category: Typescript
tags: ["typescript", "javascript", "development"]
---

## Misuse of typescript generics and casting with arrays, inheritance and subtypes

Many times I've run across code that uses typescript generics, arrays, inheritance and casting 
inappropriatly. I've done it myself on numerous occassions, only now I know better and have a
suggested work around.

```ts
interface Renderer<Props extends object = object> {
  id: string;
  render: (props: Props) => void;
}
interface SayHelloProps {
  name: { firstName: string };
}
type SayHelloRenderer = Renderer<SayHelloProps>;

const sayHelloRenderer: SayHelloRenderer = {
  render: (props: SayHelloProps) => { console.log('Hello ' + props.name.firstName) }
}

// Typescript Error!
const renderers: Array<Renderer> = [sayHelloRenderer];
```

This will emit the typescript error:

```
Type 'SayHelloRenderer' is not assignable to type 'Renderer<object>'.
Property 'name' is missing in type '{}' but required in type 'SayHelloProps'.
```

So what do you do to get around it? Why, just cast it, of course.

```ts
const renderers: Array<Renderer> = [sayHelloRenderer as Renderer];
```

No more error!  All good, right? 

Wrong.

There is a reason that typescript complains, and it shouldn't be ignored.  If we cast, I can do
the following with no typescript errors, but it will throw an exception:

```ts
const renderer = renderers[0];
// No type error, but it's wrong! 
renderer.render({});
```

You can check out a jsFiddle of it <a href="https://jsfiddle.net/tmv01o2k/">here</a>.

## What can be done about it?

To start, lets expand a bit on the example so it fits a real world need. Why do you need an array 
of base `Renderer` implementations?

I encountered this frequently when working in a pluggable system. Data I don't know about ends up serialized and
persisted. That deserialized data maps to a handler at runtime.

```ts


interface Renderer<Props extends object = object> {
  id: string;
  render: (props: Props) => void;
}

interface PersonalizedSayHiProps {
  name: string;
}

const sayHiRenderer: Renderer = {
  id: 'sayHi',
  render: () => { console.log('Hi!') }
}
type PersonalizedSayHiRenderer = Renderer<PersonalizedSayHiProps>;

const personalizedSayHiRenderer: PersonalizedSayHiRenderer = {
  id: 'personalizedSayHi',
  render: (props: PersonalizedSayHiProps) => { console.log('Hi ' + props.name + '!') }
}

// Cast to avoid error
const renderers: Renderer[] = [sayHiRenderer as Renderer, personalizedSayHiRenderer as Renderer];

interface Renderable<Props extends object = object> {
  id: string;
  props: Props;
}

const renderables: Renderable[] = [];

function addRenderable(renderable: Renderable) {
  renderables.push(renderable);
}


addRenderable({ id: 'personalizedSayHi', props: { name: 'Stacey'}});
// No type error. :(
addRenderable({ id: 'personalizedSayHi', props: { });

function renderThings() {
  renderables.forEach(renderable => {
    const foundRenderer = renderers.find(rendererToFind => { return rendererToFind.id === renderable.id });
    if (foundRenderer) {
      foundRenderer.render(renderable.props);
    }
  });
}

renderThings();
```
<a href="https://jsfiddle.net/staceyg/br8sh7Lo/1/">View in jsFiddle</a>

Lets improve on that code and add an id to prop type mapping for extra safety.

```ts
interface PersonalizedSayHiProps {
  name: string;
}

interface RendererToPropTypes {
  ['sayHi']: {};
  ['personalizedSayHi']: PersonalizedSayHiProps;
}

export type RendererId = keyof RendererToPropTypes;
interface Renderer<Id extends RendererId = RendererId> {
  id: Id;
  render: (props: RendererToPropTypes[Id]) => void;
}

type SayHiRenderer = Renderer<'sayHi'>;
type PersonalizedSayHiRenderer = Renderer<'personalizedSayHi'>;

const sayHiRenderer: SayHiRenderer = {
  id: 'sayHi',
  render: () => { console.log('Hi!') }
}

const personalizedSayHiRenderer: PersonalizedSayHiRenderer = {
  id: 'personalizedSayHi',
  render: (props: PersonalizedSayHiProps) => { console.log('Hi ' + props.name + '!') }
}

// Still need to downcast to avoid type error.
const renderers: Renderer[] = [sayHiRenderer as Renderer, personalizedSayHiRenderer as Renderer];

interface Renderable<Id extends RendererId = RendererId> {
  id: Id;
  props: RendererToPropTypes[Id];
}

let renderables: Renderable[] = [];

function addRenderable<Id extends RendererId>(renderable: Renderable<Id>) {
  renderables.push(renderable);
}

addRenderable({ id: 'sayHi', props: {} });

// Success! Type Error!
addRenderable({ id: 'personalizedSayHi', props: { name: { typeErrorHere: 'boo' } } });

// No type error, yay.
addRenderable({ id: 'personalizedSayHi', props: { name: 'Stacey' } });

function renderThings() {
  renderables.forEach(renderable => {
    const foundRenderer = renderers.find(rendererToFind => { return rendererToFind.id === renderable.id });
    if (foundRenderer) {
      foundRenderer.render(renderable.props);
    }
  });
}

renderThings();

// But what happens if we want to serialize and persist all the renderables?

const saveToDisk = JSON.stringify(renderables);

// Load from disk.
renderables = JSON.parse(saveToDisk);


renderThings();
```

Unfortunately the above code fails in jsFiddle (see [#1582](https://github.com/jsfiddle/jsfiddle-issues/issues/1582)), but works fine in the typescript playground so, no link to jsFiddle here.

We've improved things a bit.  The invalid `addRenderable` call successfully yells at us. We still have the cast though.

And unfortunately I have no good idea yet for how to solve this, or if it's even possible.

Once you serialize and deserialize, you only know the value of the id at runtime. You will never be able to type check against
something like:

```ts
const { id, props }: { id: string; props: object } = getPersistedRenderable();
const renderer = getRendererForId(id);
renderer.render(props);
```

If you do, let me know!!