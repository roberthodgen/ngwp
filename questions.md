#### Homepage style

How do we determine the WordPress home style? Single page? List of Posts? Etc?

At the moment we can default something, however this will change?


#### Menus

Where do we retrieve menus from?


#### Naming conventions

What is the "home" called?

- "Home"?
- "Main"?
- "Blog"?
- "Site"?

This will likley be used for the main route and our primary template file, e.g. `main.html`.

For routes, we'll likley build from this to navigate to pages, e.g. `<a ui-sref="main.pages('page-slug')">My Page</a>`


#### Linking home (state)

Could we link home using a state name like `main.home`?

E.g. `<a ui-sref="main.home">Home</a>`


#### Can we change WP-API to return non-html entity encoded special characters?

For example, the name `Robert's Blog` appears as `Robert&#039;s Blog` as returned from the API. We _could_ create a request transformer OR render this as HTML into an element.


#### Permalinks or override JSON API links

The WP-API spits back API locations, could we override, or optionally include front-end links?

How about a permalink router? So we always end up at the right page on the front-end.


#### Dates from WP-API

These should by in ISO8601 __with time zone information__ so Angular can parse them with the proper time zone! Example: `-00` to end of string.


#### Could we roll this project into a theme?

Because WordPress links to itself by default, could we simply let our theme's `index.php` always serve our `index.html`? That would eliminate the need for more rewrites...