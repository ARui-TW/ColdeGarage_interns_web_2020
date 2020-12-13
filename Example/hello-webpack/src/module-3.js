import _ from 'lodash';

export default function() {
    var el = document.querySelector('#module-3');
    el.textContent = _.join(['Module', '3'], ' ');
}