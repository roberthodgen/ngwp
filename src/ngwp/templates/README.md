# `/ngwp/templates` directory

This directory stores all the default templates.

__Future direction__: These templates will be used when the `/templates` directory __does not contain a specified template__.

- Example: a user loads a single post: ngwp will first search for a `single.html` template file in `/templates`, if this file exists it will be used; if this file does not exist ngwp will fall back to `/ngwp/templates/single.html`.