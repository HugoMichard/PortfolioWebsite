// Loading animation
var isLoadingDone = false;

function fadeOutLoadingAnimation() {
    const overlay = document.getElementById('overlay')
    overlay.style.opacity = '0'
    overlay.addEventListener('transitionend', () => overlay.remove());
    overlay.addEventListener('transitionend', () => isLoadingDone = true);
}

window.onload = function(){
    setTimeout(fadeOutLoadingAnimation, 0);
};

/* Create Vec3 object for easier vector manipulation */
var GLMAT_ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;

var vec3 = {};

vec3.create = function() {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
};

vec3.fromValues = function(x, y, z) {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

vec3.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
};

/* Add loading animation */
var canvas = document.getElementById('loading-animation');
var flr = Math.floor;

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

var halfw = canvas.width / 2,
    halfh = canvas.height / 2,
    step = 2,
    warpZ = 12,
    speed = 0.075;
var stampedDate = new Date();

var ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0,0, canvas.width, canvas.height);

function rnd(num1, num2) {
    return flr(Math.random() * num2 * 2) + num1;
}

function getColor() {
    return 'hsla(200,100%, ' + rnd(50,100) + '%, 1)';
}

var star = function() {
    var v = vec3.fromValues(rnd(0 - halfw,halfw),rnd(0 - halfh,halfh), rnd(1, warpZ));
    
    
    this.x = v[0];
    this.y = v[1];
    this.z = v[2];
    this.color = getColor();
    
    
    this.reset = function() {
        v = vec3.fromValues(rnd(0 - halfw,halfw),rnd(0 - halfh,halfh), rnd(1, warpZ));

        this.x = v[0];
        this.y = v[1];
        this.color = getColor();
        vel = this.calcVel();
    }
    
    this.calcVel = function() {
        
        return vec3.fromValues(0, 0, 0 - speed);
    };
    
    var vel = this.calcVel();
    
    this.draw = function() {
        vel = this.calcVel();
        v = vec3.add(vec3.create(), v, vel);
        var x = v[0] / v[2];
        var y = v[1] / v[2];
        var x2 = v[0] / (v[2] + speed * 0.50);
        var y2 = v[1] / (v[2] + speed * 0.50);
        
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        
        if (x < 0 - halfw || x > halfw || y < 0 - halfh || y > halfh) {
            this.reset();
        }
    };
    
}

var starfield = function() {
    var numOfStars = 250;
    
    var stars = [];
    
    function _init() {
        for(var i = 0, len = numOfStars; i < len; i++) {
            stars.push(new star());
        }
    }    
    
    _init();
    
    this.draw = function() {
        ctx.translate(halfw, halfh);
        
        for(var i = 0, len = stars.length; i < len; i++) {
            var currentStar = stars[i];
            
            currentStar.draw();
        }
    };
    
}

var mStarField = new starfield();

var alpha = 1;
const alphaDelta = 0.02
var isFaddingOut = true;

function draw() {
    if (isLoadingDone) return
    speed = 0.025;
  
    // Initialize the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(0,0, canvas.width, canvas.height);

    // Draw the loading text
    ctx.font = "48px serif";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.globalAlpha = alpha;
    ctx.fillText("Traveling to universe ...", halfw, halfh / 2)
    if(isFaddingOut) {alpha -= alphaDelta}
    if(!isFaddingOut) {alpha += alphaDelta}
    if(alpha <= 0) {
        isFaddingOut = false;
        alpha = 0
    }
    if(alpha >= 1) {
        isFaddingOut = true;
        alpha = 1
    }

    ctx.globalAlpha = 1;

    // Draw the star field
    mStarField.draw();
    
    window.requestAnimationFrame(draw);
}

draw();

window.onresize = function() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    halfw = canvas.width / 2;
    halfh = canvas.height / 2;
};


