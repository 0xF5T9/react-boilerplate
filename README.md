#  HTML Boilerplate Project (html-boilerplate)

HTML website deployment boilerplate.
- TODO: Add <select> css

# Git Clone Command

`git clone https://0xF5T9@github.com/0xF5T9/html-boilerplate.git`

# Start the web server

### 1. Generate the project file **package.json**

`npm init --y`

### 2A. Live the web-server using Live Server

* Install the **live-server** package locally: `npm install live-server`.
* Run '**Start live server**' task to start the server. (Check **tasks.json**)

### 2B. Live the web-server using Express

* Install the **express** package locally: `npm install express`.
* Run '**Start express server**' task to start the server. (Check **tasks.json**)

### Extras

* The project uses [Prettier](https://prettier.io/) as formatter with the following options:

'**.prettierrc**':
```json
{
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": true,
    "singleQuote": true,
    "endOfLine": "auto"
}
```
