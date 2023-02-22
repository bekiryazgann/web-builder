class Builder {
    contents = {
        "header": {
            "component" : "header-1"
        },
        "footer": {
            "component": "footer-1",
            "copyright": "All Right Reserved &copy; 2022",
            "logo": "https://i0.wp.com/leeshia.com/wp-content/uploads/2023/02/lee-shia.jpg?fit=420%2C500&ssl=1",
            "menu": [
                {
                    "title": "Kurumsal",
                    "items": {
                        "https://leeshia.com/about": "Hakkımızda",
                        "https://leeshia.com/blog": "Blog",
                        "https://leeshia.com/musteri-destek": "Müşteri Destek",
                        "https://leeshia.com/contact": "İletişim"
                    }
                },
                {
                    "title": "Hızlı Menü",
                    "items": {
                        "https://leeshia.com/urun-dogrulama": "Ürün Doğrulama",
                        "https://leeshia.com/gizlilik-politikasi": "Gizlilik Politikası",
                        "https://leeshia.com/mesafeli-satis-sozlesmesi": "Mesafeli Satış Sözleşmesi",
                        "https://leeshia.com/kvkk": "KVKK"
                    }
                }
            ]
        }
    };

    constructor() {
        this.iframe = document.querySelector('.iframe');
        this.run();
    }

    run(){
        this.addNewSectionListen();
        this.render();
    }

    srcDoc(content = '', style = '', script = '') {

        if (script !== ''){
            script = `<script>${script}</script>`;
        }

        if (style !== ''){
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

    render(){

    }


    addNewSectionListen() {
        const addNewSection = document.querySelector('.addNewSection');
        const options = document.querySelector('.options select');

        if (options.value === ''){
            addNewSection.disabled = true;
        } else {
            addNewSection.disabled = false;
        }

        options.addEventListener('change', e => {
            if (e.target.value === ''){
                addNewSection.disabled = true;
            } else {
                addNewSection.disabled = false;
            }
        })

        addNewSection.addEventListener('click', e => {
            console.log('tıkladı');
            Object.assign(this.contents, {});
            this.render();
        });
    }
}