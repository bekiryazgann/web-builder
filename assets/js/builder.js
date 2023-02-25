import iframe from './utils/iframe.js';
import mapData from "./utils/data.js";

export default class Builder {

    contents = mapData();

    constructor() {
        this.run();
        this.iframe = new iframe(document.querySelector('.iframe'))
    }

    run() {
        this.listener();
        this.mapRender();
        this.drag();
    }

    mapRender() {
        let map = document.querySelector('.sideContent .map');

        let content = '';

        Object.entries(this.contents).forEach(([key, value]) => {
            content += `
                <li>
                    <div class="mapTitle">
                        <span> ${value.name} </span>
                        <i class="fal fa-ellipsis-v"></i>
                    </div>
                    <div class="mapContent">
                        Buraya İçerik Gelecek
                    </div>
                </li>
            `;
        });

        map.innerHTML = '<ul>' + content + '</ul>';

    }

    listener() {
        const addNewSection = document.querySelector('.addNewSection');
        const options = document.querySelector('.options select');

        addNewSection.disabled = (options.value);

        options.addEventListener('change', e => {
            addNewSection.disabled = (e.target.value === '');
        })
        addNewSection.addEventListener('click', e => {
            console.log('tıkladı');
            Object.assign(this.contents, {});
        });
    }

    drag() {
        var dragSrcEl = null;

        const mapItems = document.querySelectorAll('.sideContent .map ul li');
        mapItems.forEach(function (element) {
            element.draggable = true;


            element.addEventListener('dragstart', function (e) {
                e.target.style.opacity = '0.4';

                dragSrcEl = this;

                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/html', e.target.innerHTML);
            });

            element.addEventListener('dragend', function (e) {
                e.target.style.opacity = '1';

                mapItems.forEach(elem => {
                    elem.style.borderStyle = 'solid';
                    elem.style.borderWidth = '1px';
                });
            })

            element.addEventListener('dragover', e => {
                e.preventDefault();
            })

            element.addEventListener('dragenter', e => {
                e.target.style.borderStyle = 'dotted';
            });

            element.addEventListener('dragleave', function (e) {
                e.target.style.borderStyle = 'solid';
            });

            element.addEventListener('drop', function (e) {
                e.stopPropagation();

                if (dragSrcEl !== this) {
                    dragSrcEl.innerHTML = this.innerHTML;
                    this.innerHTML = e.dataTransfer.getData('text/html');
                }

                return false;
            });
        });
    }
}