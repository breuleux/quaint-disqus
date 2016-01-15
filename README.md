
quaint-disqus
=============

This plugin lets you embed a Disqus comment thread on a page.


## Install

    npm install quaint-disqus -g


## Sample configuration

This configuration entry must be added in the `plugins` field of
`quaint.json`:

```json
"disqus": {
  "shortname": "your-disqus-identifier",
  "idField": "id",
  "titleField": "title"
}
```

## Sample use

```quaint
meta ::
  title = My excellent post
  id = bfb6ba80-bbbf-11e5-ae01-f3fe481b06e1

Some excellent text.

disqus ::
```


## Macros

### `disqus ::`

Inserts the comment thread at the calling location. There are no
arguments: the shortname must be provided in the plugin options, and
the thread identifier must be specified in the `meta` properties.


## Options

### `shortname` (**required**)

The Disqus identifier for your site.


### `idField` (**required**)

For any given page, `quaint-disqus` will look for the comment thread
ID in the `meta ::` declarations and you must provide the name of the
ID field. For instance, if `idField` is set to `"id"`, then you might
write something like:

```quaint
meta ::
  id = bfb6ba80-bbbf-11e5-ae01-f3fe481b06e1

disqus ::
```

You may also set `idField` to `"path"`, which is a field that Quaint
fills by default. The only issue with that is that the comment thread
will be lost if you rename the file. I recommend using a dedicated
`id` field instead, which you might use for other purposes as well.

`quaint-disqus` will print an error if it doesn't find an id. If you
would rather not print a comment thread if the field is empty, you can
use the following conditional expression:

    meta::id ?? disqus::


### `titleField` (**optional**, default: "title")

The `meta ::` field to use for the thread's title. By default this is
the `title` field.

