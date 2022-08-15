/*
Floatsam Copyright [2022] [@jntk.net]

Licensed under the Apache License, Version 2.0 (the “License”);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0
 
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an “AS IS” BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
window.onload = function () {
    d = document;
    b = d.body;
    sw = window.innerWidth;
    sh = window.innerHeight;
    hn = 500;
    mm = [0, 0];
    c = new m();
    heart = [[2, 0], [4, 0], [1, 1], [3, 1], [5, 1], [0, 2], [6, 2], [1, 3], [5, 3], [2, 4], [4, 4], [3, 5]];
    star = [[2, 0], [1, 1], [2, 1], [3, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [1, 3], [2, 3], [3, 3], [1, 4], [3, 4]];
    dt1 = heart;
    dt2 = [[1, 0], [0, 1], [2, 1], [1, 2]];

    so();
    setInterval(function () {
        c.x.clearRect(0, 0, sw, sh);
        for (i = 0; i < hn; i++) {
            p = _a[i];
            p[2] += p[3] - mm[1] * p[4];
            p[1] += -mm[0] * p[4];
            (p[2] > sh) ? p[2] = 0 : 0;
            (p[2] < 0) ? p[2] = sh : 0;
            (p[1] > sw) ? p[1] = 0 : 0;
            (p[1] < 0) ? p[1] = sw : 0;
            var h = new ht(p[5], p[0], p[1], p[2]);
        }
    }, 100);
    b.addEventListener("mousemove", function (e) {
        mm = [(e.pageX - (sw / 2)), (e.pageY - (sh / 2))];
    });
    b.addEventListener("click", function () {
        dt1 = dt1 == star ? heart : star;
        so();
    });

    function so() {
        _a = [];
        for (var h = 0; h < hn; h++) {
            _a.push([5 * r(), sw * r(), sh * r(), 5 * r() + 5, 0.06 * r(), r() < 0.5 ? dt1 : dt2]);
        }
    }

    function dt(c, ar, px, py, s) {
        c.x.beginPath();
        for (j = 0; j < ar.length; j++) {
            c.x.fillStyle = "#" + Math.floor(r() * 0xFFFFFF).toString(16);
            c.x.fillRect(ar[j][0] * s + px, ar[j][1] * s + py, s, s);
        }
    }

    function ht(hd, s, px, py) {
        var u = s;
        var d = new dt(c, hd, px, py, u);
    }

    function m() {
        _ = this;
        _.v = d.createElement("canvas");
        _.x = this.v.getContext("2d");
        b.appendChild(_.v);
        _.v.width = sw;
        _.v.height = sh;
    }

    function r() {
        return Math.random();
    }
}