export default class iframe{
    constructor(iframe) {
        this.iframe = iframe;
    }

    writeSrcDoc(content = '', style = '', script = '') {
        if (script !== '') {
            script = `<script>${script}</script>`;
        }

        if (style !== '') {
            style = `<style>${style}</style>`;
        }
        this.iframe.srcdoc = `
            <!doctype html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
                 <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                 <meta http-equiv="X-UA-Compatible" content="ie=edge">
                 <title>Document</title>
                 <style>*{margin:0;border:0;padding:0;text-decoration:none;list-style:none;box-sizing:border-box}input:focus{outline:0}body,html{height:100%;width:100%}body{font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}</style>
            </head>
            <body>
                ${content}
                
                ${script}
            </body>
            </html>`;
    }
}