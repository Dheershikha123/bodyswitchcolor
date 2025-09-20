// a fetch promise only rejects when a network error is encountered (which is usually when there's a permission issue or similiar).A fetch() promise does not reject on HTTP errors (404,etc).Instead a then() handler must check the Response.ok and/or Response.status properties.
// fetch method is readed by browser to perform function
